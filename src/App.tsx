import { useState } from "react";
import { Layout, Table } from "./component"
import tableData from './data/table-data.json';
import { tableHandler } from "./utils";
import { SortConfig } from "./types";


function App() {
  const [sortConfig, setSortConfig] = useState<SortConfig>()
  const { headerConfig, tableValues } = tableHandler({ tableData, ...sortConfig })
  return (<Layout>
    <Table headersConfig={headerConfig} data={tableValues} setSortConfig={setSortConfig} sortConfig={sortConfig} />
  </Layout>)
}

export default App
