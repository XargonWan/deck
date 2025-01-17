import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from "@mui/material/TableBody";
import {Row} from "./Row";

export const Page = ({title, resources}) => {
  const columns = ["Resource", "Watchers", "Forks", "Stars", "Description"];
  const tableRowKey = `${title}-TableRow`;
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650 }}
        size="small"
      >
        <TableHead
          key={`${title}-TableHead`}
        >
          <TableRow key={`${tableRowKey}-header`}>
            {columns.map(
              (c, i) => <TableCell key={`${tableRowKey}-header-${i}`}>
                {c}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {resources.map((r, i) => {
            const currentRowKey = `${tableRowKey}-row-${i}`;
            const props = {rowKey: currentRowKey, ...r}
            return <Row
              key={currentRowKey}
              {...props}
            />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}