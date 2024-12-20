import { Direction, HeadersConfig, TableRowData } from "../types";
type TableHandler = { tableData: Record<string, string | number | Date>[], key?: string, direction?: Direction }
export const tableHandler = ({ tableData, key, direction = 'ascending' }: TableHandler
) => {
  let headerConfig: HeadersConfig = []
  let tableValues: TableRowData[] = []
  
  //sorting logic
  if (key) {
    tableData = [...tableData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === 'ascending'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (aValue instanceof Date || bValue instanceof Date) {
        return direction === 'ascending'
          ? new Date(aValue as string).getTime() - new Date(bValue as string).getTime()
          : new Date(bValue as string).getTime() - new Date(aValue as string).getTime();
      } else {
        return direction === 'ascending'
          ? (aValue as number) - (bValue as number)
          : (bValue as number) - (aValue as number);
      }
    });
  }

  tableData?.forEach((element, index) => {
    const row: TableRowData = [];
    for (const key in element) {
      if (index === 0) headerConfig.push({ title: key, type: typeof element[key as keyof typeof element] })
      row.push(element[key as keyof typeof element]);
    }
    tableValues.push(row);
  })
  return { headerConfig, tableValues }
}
