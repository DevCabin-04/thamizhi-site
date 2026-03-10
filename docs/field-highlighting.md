# TinaCMS Field Highlighting Feature

## Overview
The field highlighting feature allows you to click on any editable content in the TinaCMS preview panel, and the corresponding field will automatically be highlighted and scrolled into view in the editor panel.

## How It Works

### 1. Visual Indicators
When you're in TinaCMS admin (development mode), editable content in the preview will:
- Show a dashed gold outline when you hover over it
- Display a small "✏️ Click to edit" tooltip on hover
- Briefly flash with a gold highlight when clicked

### 2. Clicking Content
1. Open TinaCMS admin: `http://localhost:4321/admin`
2. Select any page to edit (Homepage, About, Blog Post, etc.)
3. In the preview panel (right side), hover over any editable text
4. Click on the content you want to edit
5. The editor panel (left side) will automatically scroll to and highlight that field

### 3. Supported Content

Currently implemented on:
- **Homepage** (`Homepage.jsx`):
  - Hero title and description
  - Hero CTA buttons
  - Mission statement
  - Announcements (title and content)
  - Statistics (number and label)
  - Featured departments (name and description)
  - Recent events (date, title, description)
  - Newsletter (title and description)

- **Blog Posts** (`BlogPost.jsx`):
  - Title
  - Category
  - Author info (name, role, image)
  - Published date
  - Featured image
  - Excerpt
  - Content (full rich text)
  - Tags

## Technical Implementation

### Files Modified/Created

1. **`src/utils/tinaFieldHighlight.js`** - Core utility
   - Listens for clicks on elements with `data-tina-field` attribute
   - Sends postMessage to parent TinaCMS admin frame
   - Provides `useFieldHighlighting()` React hook

2. **`src/styles/tina-field-highlight.css`** - Visual styles
   - Hover effects for editable content
   - Tooltip styling
   - Click feedback animations

3. **`public/tina-field-focus-listener.js`** - Admin side listener
   - Receives postMessage from preview iframe
   - Finds and highlights the corresponding field
   - Scrolls field into view
   - Auto-focuses input if possible

4. **`public/admin/index.html`** - TinaCMS admin entry point
   - Loads the field focus listener script

5. **Component Updates**:
   - `src/layouts/Layout.astro` - Imports field highlight CSS
   - `src/components/Homepage.jsx` - Added hook + data attributes
   - `src/components/BlogPost.jsx` - Added hook + data attributes

### How to Add to New Components

1. Import the hook:
```jsx
import { useFieldHighlighting } from "../utils/tinaFieldHighlight.js";
```

2. Call the hook in your component:
```jsx
export default function MyComponent({ props, lang }) {
  const { data } = useTina({ ... });

  // Enable field highlighting
  useFieldHighlighting();

  // ... rest of component
}
```

3. Add `data-tina-field` attributes to editable elements:
```jsx
<h1 data-tina-field="hero.title">
  {content.hero?.title}
</h1>

<p data-tina-field="hero.description">
  {content.hero?.description}
</p>

{/* For lists, use template literals with index */}
{items.map((item, index) => (
  <div key={index}>
    <h3 data-tina-field={`items.${index}.title`}>
      {item.title}
    </h3>
  </div>
))}
```

## Troubleshooting

### Field not highlighting
- Check browser console for messages
- Verify the `data-tina-field` attribute matches the exact field path in TinaCMS
- Ensure you're running in development mode
- Check that the field focus listener script loaded (view page source in admin)

### Field path format
The field path should match the structure in your TinaCMS data:
- Simple field: `title`
- Nested field: `hero.title`
- Array item: `events.0.title`
- Deep nesting: `hero.cta_primary.text`

### Hover effect not showing
- Clear browser cache
- Verify `tina-field-highlight.css` is loaded
- Check browser dev tools for CSS conflicts

## Future Enhancements

Potential improvements:
- Add field highlighting to remaining page components (About, Events, etc.)
- Improve field path detection in admin listener
- Add visual preview of field changes before clicking
- Support for image fields with inline editing overlay
- Keyboard shortcuts for field navigation

## Related Features

- **Edit Button** (`src/components/EditButton.astro`) - Floating button to open TinaCMS admin for current page
- **Visual Editing Mode** - Both features work together for seamless content editing workflow
