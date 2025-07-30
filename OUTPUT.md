## Changes Made
### Folder Structure
- Refactored the project structure to separate concerns and improve readability.
- Created individual files for the landing page components: 'Header', 'TagList', and 'Hero' (renamed from the previous 'BoxArea97' for clarity).
- Removed the obsolete 'BoxArea108' component
- Created a 'types' folder for TypeScript interfaces  
- Created a 'constants' folder for TypeScript interfaces  


### Reusable Components
- Introduced a reusable 'Searchbar' component.


### App Component
1. Static tags stored in the useState
   - Issue: Used `useState` for static tags data.
   - Fix: Moved tags array to the 'constants' folder and imported in the App component.

2. Duplicated max-width styling and missing responsive margins
   - Issue: Duplicated `max-w-5xl mx-auto` classes across components, no responsive margins.
   - Fix: Centralized container styling in App.tsx with responsive padding (px-4 mobile; px-8, max-w-5xl desktop).


### Header Component
1. Reusable SearchBar integration
   - Issue: The search input was implemented directly in the header causing code duplication.
   - Fix: Refactored the header to use the new reusable SearchBar component.

2. Accessibility improvements
   - Issue: Poor alt text, missing ARIA labels, no semantic navigation structure.
   - Fix: Added semantic nav element, improved alt text, added ARIA labels for better screen reader support.


### TagList Component
1. Missing TypeScript interface for TagList props
   - Issue: TagList props were not typed, missing TypeScript interface.
   - Fix: Added a TagListProps TypeScript interface for the title and tags props.

2. Duplicated container styling
   - Issue: Duplicated `max-w-5xl mx-auto` classes.
   - Fix: Removed duplicated styling, now handled by parent container.

3. Accessibility improvements
   - Issue: Missing semantic structure, no ARIA labels, improper list structure.
   - Fix: Added semantic section and h2 elements, ARIA labels, and proper list roles for better screen reader support.


### SearchBar Component
1. Missing TypeScript interface for SearchBar props
   - Issue: SearchBar props were not typed, missing TypeScript interface.
   - Fix: Added a SearchBarProps TypeScript interface for the component props.

2. Debounced onSearch calls
   - Issue: onSearch is called on every keystroke.
   - Fix: Added debounce logic to delay onSearch execution by 300ms.

3. Accessibility improvements
   - Issue: Missing ARIA labels, poor focus management, no search icon accessibility.
   - Fix: Added role="search", ARIA labels, proper focus styles, and aria-hidden for decorative icon.


### Sidebar Component
1. Type-only import for VariantProps line 6
   - Issue: 'VariantProps' was not imported as a type, causing a TypeScript error.
   - Fix: Used 'import type { VariantProps }' to resolve the error.

### Sonner Component
1. Type-only import for ToasterProps line 2
   - Issue: 'ToasterProps' was not imported as a type, causing a TypeScript error.
   - Fix: Used 'import type { ToasterProps }' to resolve the error.

### Hero Component
1. Duplicated container styling
   - Issue: Duplicated `max-w-5xl mx-auto` classes.
   - Fix: Removed duplicated styling, now handled by parent container.

2. Accessibility improvements
   - Issue: Poor alt text, missing semantic HTML, no ARIA labels, insufficient color contrast.
   - Fix: Added semantic `<section>` element, improved alt text, added aria-labelledby, increased overlay opacity for better contrast.

3. Code cleanup and documentation
   - Issue: Console.log statement and unclear comment in onSearch function.
   - Fix: Removed onSearch function implementation, added clear TODO comment for future implementation.




