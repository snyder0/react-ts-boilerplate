type Layout = boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined

export interface ILayoutSize {
  xs: Layout
  sm: Layout
  md: Layout
  lg: Layout
  xl: Layout
}

export interface ILayoutConfig {
  L6: ILayoutSize
  L12: ILayoutSize
}

export const layoutConfig: ILayoutConfig = Object.freeze({
  L6: {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    xl: 4
  },
  L12: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
  }
})