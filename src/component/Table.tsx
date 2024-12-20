import { HeadersConfig, TableRowData } from "../types"
import { format } from 'date-fns';

type TableProps = {
  headersConfig: HeadersConfig,
  data: TableRowData[]
}

export const Table = ({ headersConfig, data }: TableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 border-separate rtl:text-right dark:text-gray-400" >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headerGenerator(headersConfig)}
          </tr>
        </thead>
        <tbody>
          {bodyGenerator(data)}
        </tbody>
      </table>
    </div>
  )
}

const headerGenerator = (headersConfig: HeadersConfig) => {
  return headersConfig.map((header, index) => {
    return (
      <th key={index} colSpan={header.colSpan} scope="col" className="px-6 py-3">
        {header.title}
      </th>
    )
  })
}

const bodyGenerator = (data: TableRowData[]) => {
  return data.map((row, index) => {
    return (
      <tr key={index} className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
        {row.map((cell, index) => {
          return (
            <td scope="row" key={index} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {typeof cell === 'object' && cell instanceof Date ? format(cell, "yyyy-MM-dd HH:mm") : cell
              }
            </td>
          )
        })}
      </tr>
    )
  })
}