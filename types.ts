export type Page = {
  id: number,
  key?: string,
  color?: string,
  dontShift?: boolean,
  circle?: {
    text?: string,
    color?: string,
    position?: {
      left: string,
      top: string
    },
    size?: string
  }
}
