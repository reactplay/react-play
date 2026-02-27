import DOMPurify from 'dompurify';

/**
 * Sanitizes an HTML string using DOMPurify to prevent XSS attacks.
 * Use this utility whenever you need to render dynamic HTML via dangerouslySetInnerHTML.
 *
 * @param {string} html - The raw HTML string to sanitize.
 * @returns {string} - A sanitized HTML string safe to use with dangerouslySetInnerHTML.
 */
const sanitizeHTML = (html) => DOMPurify.sanitize(html ?? '');

export default sanitizeHTML;
