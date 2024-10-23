import { BILLION, MILLION, SECONDS_IN_HOUR, SECONDS_IN_MINUTE, THOUSAND } from './utilsConstants';

/**
 * Formats a duration in seconds into a string representation of hours, minutes, and seconds.
 *
 * @param {number} duration - The duration in seconds to format.
 * @returns {string} - The formatted duration as a string in the format "HH:MM:SS" or "MM:SS".
 */
export const formatDurationCount = (duration: number): string => {
  const hours = Math.floor(duration / SECONDS_IN_HOUR);
  const minutes = Math.floor((duration % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = Math.floor(duration % 60);

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return hours > 0
    ? `${hours}:${formattedMinutes}:${formattedSeconds}`
    : `${formattedMinutes}:${formattedSeconds}`;
};

/**
 * Formats the view count into a more readable string representation with suffixes.
 *
 * @param {string} viewCount - The view count as a string.
 * @returns {string} - The formatted view count with appropriate suffix (B, M, K) or the original count if below 1000.
 */
export const formatViewCount = (viewCount: string): string => {
  const count = parseInt(viewCount);

  if (count >= BILLION) return (count / BILLION).toFixed(1) + 'B';
  if (count >= MILLION) return (count / MILLION).toFixed(1) + 'M';
  if (count >= THOUSAND) return (count / THOUSAND).toFixed(1) + 'K';

  return viewCount; // Return the original count if below 1000
};
