import React, { useState, useCallback } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import { toast } from 'react-toastify';

const SvgOptimizer = (props) => {
  const [inputSvg, setInputSvg] = useState('');
  const [outputSvg, setOutputSvg] = useState('');
  const [optimizationStats, setOptimizationStats] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const optimizeSvg = (svgContent) => {
    try {
      let optimized = svgContent;
      
      optimized = optimized.replace(/<\?xml[^>]*\?>/gi, '');
      optimized = optimized.replace(/<!DOCTYPE[^>]*>/gi, '');

      optimized = optimized.replace(/<!--[\s\S]*?-->/g, '');

      optimized = optimized.replace(/>\s+</g, '><');

      optimized = optimized.replace(/<g[^>]*>\s*<\/g>/g, '');
      optimized = optimized.replace(/<defs[^>]*>\s*<\/defs>/g, '');


      const unnecessaryAttrs = [
        'xmlns:xlink="http://www.w3.org/1999/xlink"',
        'xml:space="preserve"',
        'enable-background="[^"]*"',
        'version="[^"]*"'
      ];

      unnecessaryAttrs.forEach(attr => {
        const regex = new RegExp(attr.replace(/"/g, '"'), 'gi');
        optimized = optimized.replace(regex, '');
      });

      optimized = optimized.replace(/\s+/g, ' ').trim();
      optimized = optimized.replace(/\s*style=""\s*/g, ' ');
      optimized = optimized.replace(/\s+/g, ' ');

      return optimized;
    } catch (error) {
      throw new Error('Failed to optimize SVG: Invalid SVG format');
    }
  };

  const handleOptimize = useCallback(() => {
    if (!inputSvg.trim()) {
      toast.error('Please enter SVG content to optimize');
      return;
    }

    setIsProcessing(true);
    
    try {
      if (!inputSvg.includes('<svg')) {
        throw new Error('Invalid SVG format - no <svg> tag found');
      }

      const originalSize = new Blob([inputSvg]).size;
      const optimized = optimizeSvg(inputSvg);
      const optimizedSize = new Blob([optimized]).size;

      setOutputSvg(optimized);
      setOptimizationStats({
        originalSize,
        optimizedSize,
        reduction: ((originalSize - optimizedSize) / originalSize * 100).toFixed(2)
      });

      toast.success('SVG optimized successfully!');
    } catch (error) {
      toast.error(error.message);
      setOutputSvg('');
      setOptimizationStats(null);
    } finally {
      setIsProcessing(false);
    }
  }, [inputSvg]);

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'image/svg+xml' && !file.name.endsWith('.svg')) {
      toast.error('Please select a valid SVG file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setInputSvg(e.target.result);
    };
    reader.onerror = () => {
      toast.error('Error reading file');
    };
    reader.readAsText(file);
  }, []);

  const handleDownload = useCallback(() => {
    if (!outputSvg) return;

    const blob = new Blob([outputSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'optimized.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('SVG downloaded successfully!');
  }, [outputSvg]);

  const handleCopyToClipboard = useCallback(async () => {
    if (!outputSvg) return;

    try {
      await navigator.clipboard.writeText(outputSvg);
      toast.success('SVG copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  }, [outputSvg]);

  const handleClear = () => {
    setInputSvg('');
    setOutputSvg('');
    setOptimizationStats(null);
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <PlayHeader play={props} />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-purple-100">
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-12 text-white">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold mb-4">⚡ SVG Optimizer & Cleaner</h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                🚀 Optimize your SVG files by removing unnecessary code, comments, and redundant elements.
                Reduce file size while maintaining perfect visual quality.
              </p>
            </div>
          </div>


          <div className="p-8 lg:p-12">

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg">📥</span>
                Upload or Input SVG
              </h3>
              

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border-2 border-dashed border-blue-300 hover:border-blue-500 transition-all duration-300 mb-8 group">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📁</div>
                  <input
                    type="file"
                    accept=".svg,image/svg+xml"
                    onChange={handleFileUpload}
                    id="svg-file"
                    className="hidden"
                  />
                  <label 
                    htmlFor="svg-file" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg cursor-pointer hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Choose SVG File
                  </label>
                  <p className="text-gray-600 mt-4 text-lg">or drag and drop your SVG file here</p>
                </div>
              </div>
            

              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-4">Or paste SVG content directly:</label>
                <textarea
                  value={inputSvg}
                  onChange={(e) => setInputSvg(e.target.value)}
                  placeholder="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>...paste your SVG content here...</svg>"
                  className="w-full h-48 p-6 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 resize-none font-mono text-sm transition-all duration-300 bg-gray-50 hover:bg-white"
                  rows={8}
                />
              </div>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleOptimize}
                  disabled={isProcessing || !inputSvg.trim()}
                  className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isProcessing || !inputSvg.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Optimizing...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xl">⚡</span>
                      <span>Optimize SVG</span>
                    </>
                  )}
                </button>
                <button 
                  onClick={handleClear} 
                  className="px-10 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <span className="text-xl">🗑️</span>
                  <span>Clear</span>
                </button>
              </div>
            </div>


            {optimizationStats && (
              <div className="mb-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
                  <span className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg">🎯</span>
                  Optimization Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-3">📊</div>
                    <h4 className="font-semibold text-gray-600 mb-2">Original Size</h4>
                    <p className="text-3xl font-bold text-gray-800">{formatBytes(optimizationStats.originalSize)}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-3">⚡</div>
                    <h4 className="font-semibold text-gray-600 mb-2">Optimized Size</h4>
                    <p className="text-3xl font-bold text-green-600">{formatBytes(optimizationStats.optimizedSize)}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-3">🚀</div>
                    <h4 className="font-semibold text-gray-600 mb-2">Size Reduction</h4>
                    <p className="text-3xl font-bold text-purple-600">{optimizationStats.reduction}%</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Saved: {formatBytes(optimizationStats.originalSize - optimizationStats.optimizedSize)}
                    </p>
                  </div>
                </div>
              </div>
            )}


            {outputSvg && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg">📤</span>
                  Optimized SVG Output
                </h3>
                

                <div className="mb-8">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden">
                    <div className="bg-gray-800 px-6 py-3 flex items-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300 ml-4 font-mono text-sm">optimized.svg</span>
                    </div>
                    <textarea
                      value={outputSvg}
                      readOnly
                      className="w-full h-48 p-6 bg-gray-900 text-green-400 font-mono text-sm border-none resize-none focus:outline-none"
                      rows={8}
                    />
                  </div>
                </div>
                

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button 
                    onClick={handleDownload} 
                    className="px-10 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    <span className="text-xl">💾</span>
                    <span>Download SVG</span>
                  </button>
                  <button 
                    onClick={handleCopyToClipboard} 
                    className="px-10 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    <span className="text-xl">📋</span>
                    <span>Copy to Clipboard</span>
                  </button>
                </div>


                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200">
                  <h4 className="text-xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center">
                    <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">👀</span>
                    Visual Comparison
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-gray-700 text-center flex items-center justify-center">
                        <span className="w-4 h-4 bg-red-400 rounded-full mr-3"></span>
                        Original
                      </h5>
                      <div className="bg-white rounded-2xl p-8 min-h-48 flex items-center justify-center shadow-lg border-2 border-red-200">
                        <div dangerouslySetInnerHTML={{ __html: inputSvg }} />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-gray-700 text-center flex items-center justify-center">
                        <span className="w-4 h-4 bg-green-400 rounded-full mr-3"></span>
                        Optimized
                      </h5>
                      <div className="bg-white rounded-2xl p-8 min-h-48 flex items-center justify-center shadow-lg border-2 border-green-200">
                        <div dangerouslySetInnerHTML={{ __html: outputSvg }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgOptimizer;