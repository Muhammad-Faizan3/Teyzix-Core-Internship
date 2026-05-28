import { useState, useEffect } from 'react'

export function useNotifications() {
  const [permission, setPermission] = useState(Notification.permission)

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications')
      return false
    }

    const result = await Notification.requestPermission()
    setPermission(result)
    return result === 'granted'
  }

  const sendNotification = (title, options = {}) => {
    if (permission === 'granted' && document.hidden) {
      const notification = new Notification(title, {
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        ...options
      })

      notification.onclick = (event) => {
        event.preventDefault()
        window.focus()
        if (options.url) {
          window.location.href = options.url
        }
        notification.close()
      }

      return notification
    }
    return null
  }

  useEffect(() => {
    // Subscribe to push notifications from service worker
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      const subscribeToPush = async () => {
        const registration = await navigator.serviceWorker.ready
        const subscription = await registration.pushManager.getSubscription()
        
        if (!subscription && permission === 'granted') {
          // In production, you would send this subscription to your server
          const newSubscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array('YOUR_VAPID_PUBLIC_KEY')
          })
          console.log('Push subscription:', newSubscription)
        }
      }
      
      if (permission === 'granted') {
        subscribeToPush()
      }
    }
  }, [permission])

  return { permission, requestPermission, sendNotification }
}

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}