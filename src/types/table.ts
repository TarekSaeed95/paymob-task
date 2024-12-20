export type HeadersConfig = {
  title: string,
  type: string,
  colSpan?: number
}[]
export type TableRowData = (string | Date | number)[]
export type Direction = 'ascending' | 'descending'
export type SortConfig = {
  key: string,
  direction: Direction
}