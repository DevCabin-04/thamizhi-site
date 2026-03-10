// TinaCMS Iframe Communication Helper
// This script helps TinaCMS detect navigation changes in the preview

(function() {
  // Check if we're running inside TinaCMS iframe
  const isInTinaIframe = window.parent !== window && window.parent.location.href.includes('/admin');

  if (!isInTinaIframe) {
    return; // Not in TinaCMS, no need to run
  }

  console.log('[TinaCMS] Preview iframe initialized');

  // Notify parent about URL changes
  function notifyParentOfNavigation() {
    try {
      window.parent.postMessage({
        type: 'tina:navigation',
        url: window.location.href,
        pathname: window.location.pathname
      }, '*');
      console.log('[TinaCMS] Navigation detected:', window.location.pathname);
    } catch (e) {
      console.error('[TinaCMS] Error sending navigation message:', e);
    }
  }

  // Listen for navigation events
  let lastUrl = window.location.href;

  // For View Transitions
  document.addEventListener('astro:after-swap', () => {
    if (window.location.href !== lastUrl) {
      lastUrl = window.location.href;
      notifyParentOfNavigation();
    }
  });

  // For regular page loads (fallback)
  window.addEventListener('load', () => {
    notifyParentOfNavigation();
  });

  // For history changes (back/forward buttons)
  window.addEventListener('popstate', () => {
    notifyParentOfNavigation();
  });

  // Initial notification
  notifyParentOfNavigation();
})();
