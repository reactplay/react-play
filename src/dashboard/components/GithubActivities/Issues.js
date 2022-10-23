import '../../style/githubActivities.scss';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getIssues } from 'common/services/dashboard/fetch-github-stats';
import moment from 'moment';

const Issues = () => {
  const [pageCount, setPageCount] = useState(1);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function getViewData() {
      const res = await getIssues(pageCount, 10);
      setTableData(await res);
    }
    getViewData();
  })
  return (
    <div className="px-4 pt-5 pb-10 ">
      <h1 className="mb-1 col-span-1 text-center md:text-left text-xl font-bold">Github Issues</h1>
      <div className=' headerBreakerLine border-b-4'></div>
      <TableContainer component={Paper} className="mt-5">
        <Table sx={{ minWidth: 650 }} aria-label="tabel consisiting of issues">
          <TableHead>
            <TableRow>
              <TableCell>
                Number
              </TableCell>
              <TableCell align='left'>
                Title
              </TableCell>
              <TableCell align='left'>
                Description
              </TableCell>
              <TableCell align='left'>
                Created by
              </TableCell>
              <TableCell align='left'>
                Created at
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tableData.map((value) => (
                <TableRow
                  key={value.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {value.number}
                  </TableCell>
                  <TableCell>
                    {value.title}
                  </TableCell>
                  <TableCell >
                    <div dangerouslySetInnerHTML={{ __html: value.body }} />
                  </TableCell>
                  <TableCell>
                    {value.user.login}
                  </TableCell>
                  <TableCell>
                    {moment(value.created_at).utc().format('MMM Do YYYY')}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Issues;