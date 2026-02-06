# SVG Optimizer Tool

I built this SVG optimizer because I was tired of manually cleaning up SVG files for my web projects. As a developer, I often get SVGs from designers or download them from icon libraries, and they're usually bloated with unnecessary code. This tool solves that problem.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: Manu S
- GitHub Link: https://github.com/Manu77211


## Implementation Details

I created this tool using React because I wanted to practice my React skills while solving a real problem I face in my development workflow. Here's what it does:

**Main Features:**
- Upload SVG files or paste code directly
- Removes junk like XML declarations, comments, and empty tags
- Shows you exactly how much space you saved
- Let's you compare before/after visually
- Download the cleaned file or copy the code

**What gets optimized:**
- XML declarations (usually not needed for web)
- HTML comments from design tools
- Empty `<g>` and `<defs>` tags
- Extra whitespace and line breaks
- Unused attributes like `xmlns:xlink`

I used React hooks (useState, useCallback) for state management and the File API for handling uploads. The clipboard functionality uses the modern Clipboard API.

## Why I built this

Working on web projects, I noticed SVG files from tools like Illustrator or Sketch come with tons of unnecessary code. A simple icon might be 5KB when it could be 2KB. That adds up when you have lots of icons on a page.

I tried online tools but they either didn't work well or I didn't trust them with client work. So I decided to build my own that I could run locally and customize as needed.

## How to use it

1. Either upload an SVG file or paste your SVG code in the text area
2. Hit "Optimize SVG" - it takes like a second
3. Check the stats to see how much space you saved
4. Compare the before/after preview to make sure it looks the same
5. Download the optimized file or copy the code

## What I learned

This project helped me get better with:
- React functional components and hooks
- File handling in JavaScript
- Working with the Clipboard API
- CSS Grid and Flexbox for responsive design
- Error handling and user feedback

## Considerations

The tool is pretty conservative - it only removes stuff that's definitely safe. I've tested it with hundreds of SVGs and haven't seen any visual changes. But like with any tool, test your results before using in production.

It doesn't handle super complex SVGs with animations or scripts yet, but for regular icons and graphics it works great.

## Future ideas

If I have time, I might add:
- Batch processing multiple files
- More aggressive optimization options
- Better handling of gradients and patterns