// backgroundSync.js

export async function registerBackgroundSync() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        await registration.sync.register('database-sync');
        console.log('Background sync registered successfully.');
      } catch (error) {
        console.error('Background sync registration failed:', error);
      }
    }
  }
  