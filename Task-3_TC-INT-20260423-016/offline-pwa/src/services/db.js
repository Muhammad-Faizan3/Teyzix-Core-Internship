import Dexie from 'dexie'

export const db = new Dexie('FieldTechDB')

db.version(2).stores({
  jobs: 'id, title, status, dueDate, createdAt, updatedAt, syncStatus',
  syncQueue: '++id, type, jobId, timestamp, retryCount'
})

// Seed demo data if empty
db.jobs.count().then(count => {
  if (count === 0) {
    const demoJobs = [
      {
        id: '1',
        title: 'Fix AC Unit',
        description: 'Inspect and repair air conditioning unit at Main Street office',
        status: 'pending',
        dueDate: new Date(Date.now() + 86400000).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        syncStatus: 'synced'
      },
      {
        id: '2',
        title: 'Electrical Wiring Check',
        description: 'Complete safety inspection of electrical systems',
        status: 'in-progress',
        dueDate: new Date(Date.now() + 172800000).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        syncStatus: 'synced'
      },
      {
        id: '3',
        title: 'Plumbing Repair',
        description: 'Fix leak in bathroom pipes',
        status: 'completed',
        dueDate: new Date(Date.now() - 86400000).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        syncStatus: 'synced'
      }
    ]
    db.jobs.bulkAdd(demoJobs)
  }
})

export default db