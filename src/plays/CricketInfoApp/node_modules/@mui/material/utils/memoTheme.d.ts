import { CSSInterpolation } from '@mui/system';
import { Theme } from '../styles/createTheme';
type ThemeStyleFunction = (props: {
    theme: Theme;
}) => CSSInterpolation;
/**
 * Memoize style function on theme.
 * Intended to be used in styled() calls that only need access to the theme.
 */
export default function memoTheme(styleFn: ThemeStyleFunction): (props: {
    theme: Theme;
}) => CSSInterpolation;
export {};
