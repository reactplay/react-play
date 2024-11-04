// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
// TypeScript Version: 3.2

import { Theme } from '@emotion/react'
import { CreateStyled as BaseCreateStyled, CreateStyledComponent } from "./base.js"
import { ReactJSXIntrinsicElements } from "./jsx-namespace.js"

export {
  ArrayInterpolation,
  ComponentSelector,
  CSSObject,
  FunctionInterpolation,
  Interpolation,
  StyledComponent,
  StyledOptions,
  FilteringStyledOptions,
  CreateStyledComponent
} from "./base.js"

export type StyledTags = {
  [Tag in keyof ReactJSXIntrinsicElements]: CreateStyledComponent<
    {
      theme?: Theme
      as?: React.ElementType
    },
    ReactJSXIntrinsicElements[Tag]
  >
}

export interface CreateStyled extends BaseCreateStyled, StyledTags {}

declare const styled: CreateStyled
export default styled
