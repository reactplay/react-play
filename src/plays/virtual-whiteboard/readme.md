# Virtual Whiteboard

A powerful virtual whiteboard with real-time drawing capabilities, layer management, and export functionality. Perfect for brainstorming, teaching, or collaborative design work.

## Play Demographic

- Language: js
- Level: Advanced

## Creator Information

- User: Abhrxdip
- Github Link: https://github.com/Abhrxdip
- Blog: 
- Video:

## Features

### 🎨 Drawing Tools
- **Pen Tool**: Freehand drawing with customizable colors and widths
- **Eraser**: Remove unwanted strokes
- **Line Tool**: Draw straight lines
- **Rectangle Tool**: Create rectangles with fill options
- **Circle Tool**: Draw circles with customizable appearance
- **Text Tool**: Add text with custom font sizes

### 🎯 Advanced Features
- **Layer Management**: 
  - Create multiple layers for organized drawing
  - Show/hide layers individually
  - Lock layers to prevent accidental edits
  - Rename layers for better organization
  - Delete unnecessary layers
  - See object count per layer

- **Undo/Redo**: 
  - Full history tracking
  - Unlimited undo/redo steps
  - Keyboard shortcuts (Ctrl+Z, Ctrl+Y)

- **Export Options**:
  - Export as PNG image
  - Export as PDF (print-friendly)
  - High-quality output

- **Customization**:
  - Adjustable stroke colors
  - Fill colors for shapes
  - Line width control (1-20px)
  - Font size control (12-72px)

## Implementation Details

### React Concepts Used
- **useState**: Managing drawing state, tool selection, colors, and layers
- **useRef**: Canvas reference for drawing operations
- **useCallback**: Optimizing undo/redo functions
- **useEffect**: Canvas rendering and keyboard event handling
- **forwardRef**: Canvas component ref forwarding

### Technical Implementation
- **Canvas API**: HTML5 Canvas for all drawing operations
- **Layer System**: Array-based layer management with visibility and lock states
- **History Management**: JSON-based state snapshots for undo/redo
- **Event Handling**: Mouse events for drawing interactions
- **Export Functionality**: Canvas.toDataURL() for image export

### Architecture
```
VirtualWhiteboard (Parent)
├── Toolbar (Tool selection & controls)
├── Canvas (Drawing surface)
└── LayerPanel (Layer management)
```

## Usage Instructions

1. **Select a Tool**: Click on pen, eraser, line, rectangle, circle, or text tool
2. **Customize**: Adjust colors, line width, or font size as needed
3. **Draw**: Click and drag on the canvas to create your artwork
4. **Manage Layers**: 
   - Click "+" to add a new layer
   - Click on a layer to make it active
   - Use eye icon to show/hide
   - Use lock icon to prevent editing
5. **Undo/Redo**: Use toolbar buttons or keyboard shortcuts
6. **Export**: Click PNG or PDF to save your work

## Keyboard Shortcuts
- `Ctrl+Z` - Undo
- `Ctrl+Y` - Redo
- `Del` - Clear all (with confirmation)

## Potential Enhancements
- WebSocket integration for real-time collaboration
- Cloud save/load functionality
- More shape tools (triangle, polygon, etc.)
- Background image support
- Grid/ruler overlay
- Color palette presets
- Brush texture options
- Layer opacity control
- Transform tools (rotate, scale)

## Considerations
- Canvas size is fixed at 1200x700px for optimal performance
- History is stored in memory (cleared on page refresh)
- Export quality depends on canvas resolution
- Locked layers prevent all editing operations
- At least one layer must exist at all times

## Resources
- [HTML5 Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Canvas Drawing Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

---

<sub><sub><sup>[@Abhrxdip](https://github.com/Abhrxdip)</sup></sub></sub>
