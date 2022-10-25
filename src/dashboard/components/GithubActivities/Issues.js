import '../../style/githubActivities.scss';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getIssues } from 'common/services/dashboard/fetch-github-stats';
import moment from 'moment';
import Loader from 'common/spinner/spinner';

const Issues = () => {
  const [pageCount, setPageCount] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const openIssueCount = localStorage.getItem("open-issue-count");
  const style = {
    fontWeight: "bold",
    color: "#000000"
  }

  useEffect(() => {
    async function getViewData() {
      const res = await getIssues(pageCount, 10);
      setTableData(await res);
      setLoading(false);
    }
    getViewData();
  }, [pageCount])
  return (
    <div className="px-4 pt-5 pb-10 ">
      <h1 className="mb-1 col-span-1 text-center md:text-left text-xl font-bold">Github Issues</h1>
      <div className=' headerBreakerLine border-b-4'></div>
      {
        loading ?
          <div className=" min-h-screen flex items-center justify-center">
            <Loader subtitle={"Issues are on the way"} />
          </div>
          : (
            <>
              <TableContainer component={Paper} className=" shadow mt-5">
                <Table sx={{ minWidth: 650 }} aria-label="tabel consisiting of issues">
                  <TableHead>
                    <TableRow className=" border-b-2 tableHeader">
                      <TableCell style={style}>
                        Number
                      </TableCell>
                      <TableCell style={style} align='left'>
                        Title
                      </TableCell>

                      <TableCell style={style} align='left'>
                        Created by
                      </TableCell>
                      <TableCell style={style} align='left'>
                        Created at
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      tableData.map((value) => (
                        <TableRow
                          onClick={() => window.open(value.html_url)}
                          key={value.id}
                          className=" hover:cursor-pointer "
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {value.number}
                          </TableCell>
                          <TableCell>
                            {value.title}
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
              <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={Number(openIssueCount) + 1}
                rowsPerPage={10}
                page={pageCount - 1}
                onPageChange={(event, page) => {
                  setLoading(true);
                  setPageCount(page + 1);
                }}

              />
            </>
          )
      }

    </div>
  );
}
export default Issues;