// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

// Simple Install Prompt for PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Show install button after 3 seconds
  setTimeout(() => {
    const btn = document.getElementById('installBtn');
    if(btn) btn.style.display = 'block';
  }, 3000);
});

document.addEventListener('click', async (e) => {
  if (e.target.id === 'installBtn' && deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    e.target.style.display = 'none';
  }
});

console.log('Naabia Pro Loaded ✅');