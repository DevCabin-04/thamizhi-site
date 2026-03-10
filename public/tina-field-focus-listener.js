/**
 * TinaCMS Field Focus Listener
 *
 * This script listens for postMessage events from the preview iframe
 * and highlights/scrolls to the corresponding field in the TinaCMS editor.
 *
 * Load this script in the TinaCMS admin interface.
 */

(function() {
  console.log('🎯 TinaCMS Field Focus Listener initialized');

  // Wait for TinaCMS to be fully loaded
  let retryCount = 0;
  const maxRetries = 20;

  function waitForTinaCMS() {
    // Check if TinaCMS form fields are present
    const hasFields = document.querySelectorAll('input, textarea, [role="textbox"]').length > 0;

    if (hasFields || retryCount >= maxRetries) {
      console.log('✅ TinaCMS form detected, listener active');
      setupListener();
    } else {
      retryCount++;
      setTimeout(waitForTinaCMS, 500);
    }
  }

  // Start checking for TinaCMS
  setTimeout(waitForTinaCMS, 1000);

  function setupListener() {
    // Listen for messages from the preview iframe
    window.addEventListener('message', function(event) {
      const data = event.data;

      // Check if this is a field focus request
      if (data && data.type === 'tina:field:focus' && data.fieldPath) {
        console.log('📍 Field focus request received:', data.fieldPath);

        // Find the field in TinaCMS
        const fieldElement = findTinaField(data.fieldPath);

        if (fieldElement) {
          // Highlight the field
          highlightField(fieldElement);

          // Scroll to the field
          fieldElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          // Focus on the field input if it exists
          const input = fieldElement.querySelector('input, textarea, [role="textbox"], [contenteditable="true"]');
          if (input) {
            setTimeout(() => {
              input.focus();
              console.log('✅ Field focused successfully');
            }, 600);
          }

          console.log('✨ Field highlighted and scrolled into view');
        } else {
          console.warn('❌ Field not found:', data.fieldPath);
          debugFields();
        }
      }
    });
  }

  /**
   * Find a TinaCMS field by path
   */
  function findTinaField(fieldPath) {
    // Strategy 1: Try to find by label text (most reliable)
    const labels = document.querySelectorAll('label');
    for (const label of labels) {
      const labelText = label.textContent.toLowerCase().trim();
      const pathParts = fieldPath.split('.');
      const lastPart = pathParts[pathParts.length - 1].toLowerCase();

      if (labelText.includes(lastPart) || lastPart.includes(labelText)) {
        // Found a matching label, return its parent container
        return label.closest('[class*="field"]') || label.closest('div[class*="Field"]') || label.parentElement;
      }
    }

    // Strategy 2: Try to find input by name attribute
    let input = document.querySelector(`input[name*="${fieldPath}"], textarea[name*="${fieldPath}"]`);
    if (input) {
      return input.closest('[class*="field"]') || input.closest('div') || input.parentElement;
    }

    // Strategy 3: Search for field path in any attribute
    const allElements = document.querySelectorAll('[name], [id], [data-field], [class]');
    for (const el of allElements) {
      const attrs = ['name', 'id', 'data-field', 'class'].map(attr => el.getAttribute(attr)).join(' ');
      if (attrs.includes(fieldPath)) {
        return el.closest('[class*="field"]') || el.closest('div') || el.parentElement;
      }
    }

    // Strategy 4: Try partial match on last part of path
    const pathParts = fieldPath.split('.');
    const lastPart = pathParts[pathParts.length - 1];

    input = document.querySelector(`input[name*="${lastPart}"], textarea[name*="${lastPart}"]`);
    if (input) {
      return input.closest('[class*="field"]') || input.closest('div') || input.parentElement;
    }

    return null;
  }

  /**
   * Debug: Log all available fields
   */
  function debugFields() {
    console.log('🔍 Available form fields:');
    const inputs = document.querySelectorAll('input[name], textarea[name]');
    inputs.forEach(input => {
      console.log('  -', input.getAttribute('name'), input.type);
    });

    const labels = document.querySelectorAll('label');
    console.log('🏷️ Available labels:');
    labels.forEach(label => {
      console.log('  -', label.textContent.trim());
    });
  }

  /**
   * Highlight a field element with animation
   */
  function highlightField(element) {
    // Add highlight class
    element.style.transition = 'all 0.3s ease';
    element.style.backgroundColor = 'rgba(212, 175, 55, 0.2)'; // Thamizhi gold
    element.style.outline = '3px solid #d4af37';
    element.style.outlineOffset = '2px';

    // Remove highlight after 2 seconds
    setTimeout(() => {
      element.style.backgroundColor = '';
      element.style.outline = '';
      element.style.outlineOffset = '';
    }, 2000);
  }

})();
