# Offline-First PWA for Field Operations

## Setup
1. Copy all files as shown.
2. Run `npm install`
3. Generate icons into `public/` (or use placeholder images).
4. Start backend: `npm run server`
5. Start frontend: `npm run dev`
6. Build for production: `npm run build && npm run preview`

## Testing Offline
- Open DevTools → Application → Service Workers → Offline checkbox.
- Add new jobs – they go to IndexedDB.
- Uncheck offline → sync happens automatically.

## Push Notifications
- Backend server exposes `/api/subscribe`.
- Subscribe in frontend (add a button) – see web-push docs.