import { Layout, Table } from "./component"
import tableData from './data/table-data.json';
import { tableHandler } from "./utils";


function App() {
  const { headerConfig, tableValues } = tableHandler(tableData)
  return (<Layout>
    <Table headersConfig={headerConfig} data={tableValues} />
  </Layout>)
}

export default App
