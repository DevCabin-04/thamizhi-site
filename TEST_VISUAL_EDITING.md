# TinaCMS Visual Editing Test Guide

## Testing Automatic Panel Switching

Follow these steps to verify automatic panel switching works:

### 1. Start Development Server
```bash
npm run dev
```

### 2. Access TinaCMS Admin
Navigate to: `http://localhost:4321/admin/index.html`

### 3. Test Visual Editing Mode

#### Test Contact Page:
1. In the left sidebar, click on **"Contact Page Content (EN)"**
2. This opens visual editing mode with the Contact page preview on the right
3. You should see contact page fields in the left editing panel

#### Test Navigation:
1. While viewing Contact page, look for navigation menu in the preview (right side)
2. Click on **"Events"** link in the preview navigation
3. **Expected Result**: The left editing panel should automatically switch to show Events page fields
4. Click on **"Gallery"** link
5. **Expected Result**: The panel switches to Gallery page fields
6. Click on **"Contact"** link
7. **Expected Result**: The panel switches back to Contact page fields

### 4. Verify Real-Time Editing

With any page selected:
1. Edit a field in the left panel (e.g., change a title)
2. **Expected Result**: The preview updates in real-time as you type
3. The visual editing highlights should appear when hovering over content

### 5. Test Multi-Language Support

1. Navigate to a Tamil page (e.g., `/ta/contact`)
2. The editing panel should load **"Contact Page Content (TA)"**
3. Fields show Tamil-specific content
4. Navigate to English version (`/en/contact`)
5. Panel automatically switches to **"Contact Page Content (EN)"**

## Common Issues & Solutions

### Issue: Panel doesn't switch when navigating
**Solution**: Ensure all pages have:
- `client:load` directive on React components
- Correct `useTina` hook with tinaProps
- Router configured in collection schema

### Issue: Preview doesn't load
**Solution**: Check that:
- Development server is running
- TinaCMS admin is accessible at `/admin`
- Environment variables are set (TINA_TOKEN, etc.)

### Issue: Changes don't appear in real-time
**Solution**: Verify:
- `data-tina-field` attributes are present on elements
- `tinaField()` function is called with correct parameters
- React component is properly hydrated with `client:load`

## What Should Work Now

✅ Click a document in collection list → Opens visual editor
✅ Navigate in preview → Panel automatically switches
✅ Edit fields → Preview updates in real-time
✅ Hover over content → Visual editing highlights appear
✅ Multi-language pages → Correct language collection loads
✅ All pages → Contact, Events, Gallery, About, Publications, etc.

## Technical Details

### How It Works:
1. **Router Configuration**: Each collection's `ui.router` tells TinaCMS which URL corresponds to that collection
2. **URL Detection**: When you navigate in the preview, TinaCMS detects the URL change
3. **Collection Matching**: TinaCMS matches the URL to a collection using the router function
4. **Panel Update**: The editing panel loads the matched collection's schema and data
5. **useTina Hook**: The page component uses `useTina` to receive live data updates

### Architecture:
```
TinaCMS Admin (iframe) → Contains your site preview
├── URL Change Detection
├── Router Matching (ui.router functions)
├── Collection Selection
└── Form Panel Update

Your Page Component
├── useTina hook → Receives CMS data
├── tinaField → Marks editable elements
└── Real-time Updates → Re-renders on change
```

## Next Steps

If everything works:
- ✅ Your TinaCMS visual editing is fully functional!
- ✅ Automatic panel switching is enabled
- ✅ All pages are editable with live preview

If issues persist:
1. Check browser console for errors
2. Verify TinaCMS version compatibility
3. Ensure all dependencies are installed
4. Check that content files exist for all languages
