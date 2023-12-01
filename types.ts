export type Page = {
  key?: string,
  color?: string,
  dontShift?: boolean,
  circle?: {
    color?: string,
    position?: {
      left: string,
      top: string
    },
    size?: string
  }
}
