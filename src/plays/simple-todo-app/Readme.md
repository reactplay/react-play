# Simple Todo App

A productivity-focused Todo app built with React + TypeScript. Capture tasks, keep them synced with local storage, edit inline, filter by status, and use bulk actions to stay tidy.

## Play Demographic

- Language: ts
- Level: Beginner

## Creator Information

- User: efebaslilar
- Gihub Link: https://github.com/efebaslilar
- Blog: 
- Video: 

## Implementation Details

- Core state is handled with `useState`, fed by a lazy initializer that restores the last session from `localStorage`, falling back to seed data for new visitors.
- `useMemo` derives the filtered + sorted list, overall stats, and completion ratios without recomputing on every render.
- Inline editing keeps focus management tight via refs, keyboard shortcuts (Enter to save, Esc to cancel), and blur handling to commit changes.
- Bulk controls (mark all, clear completed, clear all) provide quick-maintenance options that stay disabled until relevant, keeping the UI calm.
- Styling focuses on approachability with card-like elevation, responsive grid tooling, and subtle affordances for hover/focus states.

## Consideration

- Because todos persist locally, clearing the browser’s storage (or the “Clear all” action) is the quickest way to start fresh.
- The seed data auto-populates for newcomers; subsequent visits will hydrate from the saved list instead.

## Resources

- [React Docs – Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [MDN – KeyboardEvent reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent)
