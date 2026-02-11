import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useState, useEffect } from 'react';
import OptimizationPanel from './OptimizationPanel';
import PreviewPanel from './PreviewPanel';

function SVGOptimizer(props) {
  const [svgInput, setSvgInput] = useState('');
  const [optimizedSvg, setOptimizedSvg] = useState('');
  const [originalSize, setOriginalSize] = useState(0);
  const [optimizedSize, setOptimizedSize] = useState(0);
  const [error, setError] = useState('');
  const [optimizationOptions, setOptimizationOptions] = useState({
    removeComments: true,
    removeMetadata: true,
    removeHiddenElements: true,
    removeEmptyAttributes: true,
    minifyColors: true,
    removeDefaultAttributes: true,
    removeXMLNS: false,
    prettify: false
  });

  // Sample SVG for demo
  const sampleSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <!-- This is a sample SVG -->
  <metadata>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <title>Sample SVG Icon</title>
  <desc>A colorful circle and rectangle</desc>
  <defs>
    <style>.hidden { display: none; }</style>
  </defs>
  <circle cx="100" cy="100" r="80" fill="#FF6B6B" stroke="#000000" stroke-width="2" opacity="1.0" />
  <rect x="60" y="60" width="80" height="80" fill="#4ECDC4" stroke="#000000" stroke-width="2" opacity="1.0" />
  <g class="hidden">
    <circle cx="150" cy="150" r="20" fill="red"/>
  </g>
</svg>`;

  useEffect(() => {
    if (svgInput) {
      optimizeSVG();
    } else {
      setOptimizedSvg('');
      setOriginalSize(0);
      setOptimizedSize(0);
    }
  }, [svgInput, optimizationOptions]);

  const calculateSize = (str) => {
    return new Blob([str]).size;
  };


  const getPercentageReduction = () => {
    if (originalSize === 0) return 0;

    return (((originalSize - optimizedSize) / originalSize) * 100).toFixed(2);
  };

  const optimizeSVG = () => {
    try {
      setError('');

      let svg = svgInput.trim();

      if (!svg) {
        setOptimizedSvg('');

        return;
      }

      // Check if it's valid SVG
      if (!svg.includes('<svg')) {
        setError('Invalid SVG: Must contain an <svg> element');

        return;
      }

      setOriginalSize(calculateSize(svg));

      // Remove XML comments
      if (optimizationOptions.removeComments) {
        svg = svg.replace(/<!--[\s\S]*?-->/g, '');
      }

      // Remove metadata tags
      if (optimizationOptions.removeMetadata) {
        svg = svg.replace(/<metadata[\s\S]*?<\/metadata>/gi, '');
        svg = svg.replace(/<title[\s\S]*?<\/title>/gi, '');
        svg = svg.replace(/<desc[\s\S]*?<\/desc>/gi, '');
        svg = svg.replace(/<defs>\s*<\/defs>/gi, '');
      }

      // Remove hidden elements
      if (optimizationOptions.removeHiddenElements) {
        svg = svg.replace(/<g[^>]*class=["']hidden["'][^>]*>[\s\S]*?<\/g>/gi, '');
        svg = svg.replace(
          /<[^>]+(?:display\s*:\s*none|visibility\s*:\s*hidden)[^>]*>[\s\S]*?<\/[^>]+>/gi,
          ''
        );
      }

      // Remove empty attributes
      if (optimizationOptions.removeEmptyAttributes) {
        svg = svg.replace(/\s+[a-zA-Z-]+=""\s*/g, ' ');
      }

      // Minify colors
      if (optimizationOptions.minifyColors) {
        // Convert named colors to hex
        const colorMap = {
          red: '#f00',
          blue: '#00f',
          green: '#0f0',
          white: '#fff',
          black: '#000'
        };
        Object.keys(colorMap).forEach((colorName) => {
          const regex = new RegExp(`(fill|stroke)="${colorName}"`, 'gi');
          svg = svg.replace(regex, `$1="${colorMap[colorName]}"`);
        });

        // Shorten hex colors where possible (#AABBCC -> #ABC)
        svg = svg.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3/gi, '#$1$2$3');
      }

      // Remove default attribute values
      if (optimizationOptions.removeDefaultAttributes) {
        svg = svg.replace(/\s+opacity="1(\.0)?"/g, '');
        svg = svg.replace(/\s+fill-opacity="1(\.0)?"/g, '');
        svg = svg.replace(/\s+stroke-opacity="1(\.0)?"/g, '');
      }

      // Remove xmlns if specified
      if (optimizationOptions.removeXMLNS) {
        svg = svg.replace(/\s+xmlns(:[a-zA-Z]+)?="[^"]*"/g, '');
      }

      // Clean up extra whitespace
      if (!optimizationOptions.prettify) {
        svg = svg.replace(/>\s+</g, '><');
        svg = svg.replace(/\s{2,}/g, ' ');
        svg = svg.trim();
      } else {
        // Simple prettify
        svg = svg.replace(/></g, '>\n<');
        const lines = svg.split('\n');
        let indentLevel = 0;
        svg = lines
          .map((line) => {
            line = line.trim();
            if (line.startsWith('</')) {
              indentLevel = Math.max(0, indentLevel - 1);
            }
            const indented = '  '.repeat(indentLevel) + line;
            if (line.startsWith('<') && !line.startsWith('</') && !line.endsWith('/>')) {
              if (!line.match(/<[^>]+>.*<\/[^>]+>/)) {
                indentLevel++;
              }
            }

            return indented;
          })
          .join('\n');
      }

      setOptimizedSvg(svg);
      setOptimizedSize(calculateSize(svg));
    } catch (err) {
      setError(`Error optimizing SVG: ${err.message}`);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'image/svg+xml' && !file.name.endsWith('.svg')) {
        setError('Please upload a valid SVG file');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setSvgInput(event.target.result);
      };
      reader.onerror = () => {
        setError('Error reading file');
      };

      reader.readAsText(file);
    }
  };

  const handleDownload = () => {
    if (!optimizedSvg) return;
    const blob = new Blob([optimizedSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'optimized.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (!optimizedSvg) return;
    try {
      await navigator.clipboard.writeText(optimizedSvg);
      alert('Copied to clipboard!');
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  const loadSample = () => {
    setSvgInput(sampleSVG);
  };

  const clearAll = () => {
    setSvgInput('');
    setOptimizedSvg('');
    setError('');
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="svg-optimizer-container">
            <div className="svg-optimizer-header">
              <h2>SVG Optimizer</h2>
              <p>Paste or upload your SVG code to optimize and reduce file size</p>
            </div>

            {error && <div className="svg-error-message">{error}</div>}

            <div className="svg-action-buttons">
              <label className="svg-btn svg-btn-secondary" htmlFor="file-upload">
                <input
                  accept=".svg,image/svg+xml"
                  id="file-upload"
                  style={{ display: 'none' }}
                  type="file"
                  onChange={handleFileUpload}
                />
                📁 Upload SVG
              </label>
              <button className="svg-btn svg-btn-secondary" type="button" onClick={loadSample}>
                📋 Load Sample
              </button>
              <button className="svg-btn svg-btn-secondary" type="button" onClick={clearAll}>
                🗑️ Clear All
              </button>
            </div>

            <OptimizationPanel options={optimizationOptions} onChange={setOptimizationOptions} />

            <div className="svg-editor-grid">
              <div className="svg-editor-panel">
                <div className="svg-panel-header">
                  <h3>Input SVG</h3>
                  <span className="svg-size-badge">{originalSize} bytes</span>
                </div>
                <textarea
                  className="svg-code-editor"
                  placeholder="Paste your SVG code here..."
                  value={svgInput}
                  onChange={(e) => setSvgInput(e.target.value)}
                />
              </div>

              <div className="svg-editor-panel">
                <div className="svg-panel-header">
                  <h3>Optimized SVG</h3>
                  <span className="svg-size-badge">
                    {optimizedSize} bytes
                    {originalSize > 0 && (
                      <span className="svg-reduction"> (-{getPercentageReduction()}%)</span>
                    )}
                  </span>
                </div>
                <textarea
                  className="svg-code-editor"
                  placeholder="Optimized SVG will appear here..."
                  readOnly
                  value={optimizedSvg}
                />
                <div className="svg-output-actions">
                  <button
                    className="svg-btn svg-btn-primary"
                    disabled={!optimizedSvg}
                    type="button"
                    onClick={handleCopy}
                  >
                    📋 Copy
                  </button>
                  <button
                    className="svg-btn svg-btn-primary"
                    disabled={!optimizedSvg}
                    type="button"
                    onClick={handleDownload}
                  >
                    💾 Download
                  </button>
                </div>
              </div>
            </div>

            <PreviewPanel optimizedSvg={optimizedSvg} originalSvg={svgInput} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SVGOptimizer;
