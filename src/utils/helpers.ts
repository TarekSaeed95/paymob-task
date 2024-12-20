import { HeadersConfig, MyData, TableRowData } from "../types";

export const tableHandler = (tableData: MyData[]) => {
    let headerConfig: HeadersConfig = []
    let tableValues: TableRowData[] = []
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