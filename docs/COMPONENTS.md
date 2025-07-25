# Components Documentation

This document provides an overview of the components used in the personal website project.

## Layout Components

### Layout (`components/layout.js`)
The main layout component that wraps all pages. It handles:
- Dark mode functionality
- Consistent layout structure
- Analytics integration
- Component composition

### MetaTags (`components/MetaTags.js`)
Centralizes all meta tags and favicon configuration:
- SEO meta tags
- Favicon configuration
- Mobile/desktop icons
- Viewport settings

### Navigation (`components/Navigation.js`)
Handles the main site navigation:
- Animated navigation links
- Responsive design
- Dark mode compatible styling
- Framer Motion integration

### DarkModeToggle (`components/DarkModeToggle.js`)
Manages the dark mode toggle functionality:
- Theme switching
- Local storage persistence
- System preference detection

### SocialIcons (`components/SocialIcons.js`)
Displays social media links:
- FontAwesome integration
- Hover animations
- Dark mode compatible

## Component Best Practices

1. **Modularity**
   - Each component has a single responsibility
   - Components are kept under 100 lines where possible
   - Logic is separated from presentation

2. **Documentation**
   - Each component includes JSDoc documentation
   - Props are clearly documented
   - Complex logic includes inline comments

3. **Styling**
   - TailwindCSS classes are used consistently
   - Dark mode is supported throughout
   - Responsive design principles are followed

4. **Performance**
   - Components are optimized for static export
   - Images are properly configured for static hosting
   - Analytics is loaded with defer 