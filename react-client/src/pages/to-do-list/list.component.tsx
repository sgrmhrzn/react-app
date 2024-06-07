import { TableRow, TableCell, TableCellLayout, Avatar, PresenceBadgeStatus } from "@fluentui/react-components";
import {
  EditRegular,
} from "@fluentui/react-icons";
export interface IListProp {
  items: any;
}

const ListView = ({ items }: IListProp) => {
  return (<>{items?.map((item: any, index: number) => (
    <TableRow key={index}>
      <TableCell>
        <TableCellLayout media={item.file.icon}>
          {item.file.label}
        </TableCellLayout>
      </TableCell>
      <TableCell>
        <TableCellLayout
          media={
            <Avatar
              aria-label={item.author.label}
              name={item.author.label}
              badge={{
                status: item.author.status as PresenceBadgeStatus,
              }}
            />
          }
        >
          {item.author.label}
        </TableCellLayout>
      </TableCell>
      <TableCell>{item.lastUpdated.label}</TableCell>
      <TableCell>
        <TableCellLayout media={<EditRegular />}>
          {/* {item.lastUpdate.label} */}
        </TableCellLayout>
      </TableCell>
    </TableRow>
  ))}
  </>
  )
}

export default ListView;