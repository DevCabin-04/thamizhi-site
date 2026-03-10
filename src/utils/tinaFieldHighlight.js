/**
 * TinaCMS Field Highlighting Utility
 *
 * Adds click handlers to elements with data-tina-field attributes.
 * When clicked, sends a message to the parent TinaCMS admin frame
 * to highlight and scroll to the corresponding field.
 */

let initialized = false;

export function initFieldHighlighting() {
  // Only run once
  if (initialized) return;

  // Only run in development and when inside an iframe (TinaCMS preview)
  if (typeof window === 'undefined' || window.self === window.top) {
    return;
  }

  // Check if we're in TinaCMS admin context by looking at the URL
  const isInTinaCMS = window.location.pathname.includes('/admin') ||
                      document.referrer.includes('/admin');

  if (!isInTinaCMS) {
    console.log('Not in TinaCMS context, field highlighting disabled');
    return;
  }

  initialized = true;

  // Add class to body to enable CSS styles
  document.body.classList.add('tina-iframe');

  console.log('TinaCMS Field Highlighting enabled');

  // Add click listeners to all elements with data-tina-field attribute
  document.addEventListener('click', (e) => {
    // Find the closest element with data-tina-field
    const target = e.target.closest('[data-tina-field]');

    if (target) {
      const fieldPath = target.getAttribute('data-tina-field');

      // Send message to parent (TinaCMS admin)
      window.parent.postMessage({
        type: 'tina:field:focus',
        fieldPath: fieldPath,
      }, '*');

      // Visual feedback
      target.style.outline = '3px solid #d4af37';
      target.style.outlineOffset = '4px';
      target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';

      setTimeout(() => {
        target.style.outline = '';
        target.style.outlineOffset = '';
        target.style.backgroundColor = '';
      }, 1500);

      console.log('✅ TinaCMS field focus requested:', fieldPath);
    }
  }, true); // Use capture phase
}

/**
 * React hook for field highlighting
 * Call this in your component to enable field highlighting
 */
export function useFieldHighlighting() {
  if (typeof window !== 'undefined') {
    // Check if we're inside an iframe first
    if (window.self !== window.top) {
      // Run once when component mounts, with a small delay to ensure DOM is ready
      setTimeout(() => initFieldHighlighting(), 500);
    }
  }
}
