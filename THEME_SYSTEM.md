# Theme System Documentation

## Overview

The NoSh website now supports two themes:
- **Default Theme**: The original pink/peach background (`#f7e6e6`)
- **Light Theme**: Clean white background (`#ffffff`)

## How It Works

### Theme Context
- Created `src/contexts/ThemeContext.tsx` to manage theme state
- Uses React Context API to provide theme state throughout the app
- Persists theme preference in localStorage
- Applies theme class to document root for CSS targeting

### Theme Switching
- Theme switcher is located in the footer
- Shows appropriate icon (Sun for light theme, Moon for default theme)
- Clicking the button toggles between themes
- Theme preference is saved and restored on page reload

### Implementation Details

#### Theme Provider
```tsx
<ThemeProvider>
  <Router>
    <Layout>
      {/* App content */}
    </Layout>
  </Router>
</ThemeProvider>
```

#### Theme Usage in Components
```tsx
const { theme, toggleTheme } = useTheme();

// Conditional styling
<div className={theme === 'light' ? 'bg-white' : 'bg-background'}>
```

#### CSS Variables
The light theme uses CSS custom properties for consistent theming:
```css
[data-theme="light"] {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --primary-color: #b64646;
  --secondary-color: #DFA0A2;
}
```

### Files Modified

1. **New Files:**
   - `src/contexts/ThemeContext.tsx` - Theme context and provider

2. **Updated Files:**
   - `src/App.tsx` - Added ThemeProvider wrapper
   - `src/components/Layout.tsx` - Added theme switcher in footer
   - `src/pages/Home.tsx` - Made theme-aware
   - `src/pages/About.tsx` - Made theme-aware
   - `src/pages/Articles.tsx` - Made theme-aware
   - `src/pages/Contact.tsx` - Made theme-aware
   - `src/pages/ArticleDetail.tsx` - Made theme-aware
   - `src/index.css` - Added light theme styles
   - `tailwind.config.js` - Added dark mode configuration

### Theme Behavior

- **Main backgrounds**: Change between pink (`#f7e6e6`) and white (`#ffffff`)
- **Content cards**: Remain white in both themes for readability
- **Text colors**: Remain consistent (primary red `#b64646`)
- **Navigation**: Adapts background to match theme
- **Footer**: Adapts background to match theme

### User Experience

- Theme preference is remembered across sessions
- Smooth transitions between themes
- Accessible theme switcher with proper ARIA labels
- Consistent visual hierarchy in both themes
