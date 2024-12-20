import { HeadersConfig, SortConfig, TableRowData } from "../types"
import { format } from 'date-fns';
import { TableVirtuoso } from 'react-virtuoso'
import { FaSort } from "react-icons/fa";

type TableProps = {
  headersConfig: HeadersConfig,
  data: TableRowData[]
  sortConfig?: SortConfig
  setSortConfig: React.Dispatch<React.SetStateAction<SortConfig | undefined>>
}

export const Table = ({ headersConfig, data, sortConfig, setSortConfig }: TableProps) => {
  const setSortConfigHandler = (key: string) => {
    if (key === sortConfig?.key) {
      return setSortConfig(prev => ({
        key,
        direction: prev?.direction === 'ascending' ? 'descending' : 'ascending'
      }))
    }
    setSortConfig({
      key,
      direction: 'ascending'
    })
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <TableVirtuoso
        className="!min-h-screen [&_table]:w-full [&_table]:border-separate [&_table]:!border-spacing-0.5 [&_tbody_tr]:border-b  [&_tbody_tr]:odd:dark:bg-gray-900  [&_tbody_tr]:even:dark:bg-gray-800 [&_tbody_tr]:dark:border-gray-700"
        data={data}
        fixedHeaderContent={() =>
          <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headerGenerator(headersConfig, setSortConfigHandler)}
          </tr>
        }
        itemContent={(index, row) => (
          bodyGenerator(row)
        )}
      />
    </div>
  )
}

const headerGenerator = (headersConfig: HeadersConfig, setSortConfigHandler: (key: string) => void) => {
  return headersConfig.map((header, index) => {
    return (
      <th key={index} colSpan={header.colSpan} scope="col" className="px-6 py-3 ">
        <div className="flex items-center justify-center gap-2">
          <p>{header.title}</p>
          <FaSort className="cursor-pointer" onClick={() => setSortConfigHandler(header.title)} />
        </div>
      </th>
    )
  })
}

const bodyGenerator = (data: TableRowData) => {
  return data.map((cell, index) => {
    return (
      <td scope="row" key={index} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {typeof cell === 'object' && cell instanceof Date ? format(cell, "yyyy-MM-dd HH:mm") : cell
        }
      </td>
    )
  })
}
