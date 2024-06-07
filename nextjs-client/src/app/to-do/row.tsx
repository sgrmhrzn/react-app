export const Row = ({ entries }: any) => {
  return (<>
    {entries.map((x: any, i: number) =>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {x.API}
        </td>
        <td className="px-6 py-4">
          {x.Category}
        </td>
        <td className="px-6 py-4">
          {x.Description}
        </td>
        {/* <td className="px-6 py-4">
          {x.HTTPS}
        </td> */}
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
    )
    }
  </>)
}