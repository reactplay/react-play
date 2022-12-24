import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './leaderBoard.css';

const TopPlayCreators = ({ topPlayCreators }) => {
  const profilePicture = (name, avatarUrl) => {
    return (
      <div className="flex flex-row items-center gap-4">
        <img
          alt={name}
          className="rounded-full border-solid h-8 w-8"
          src={avatarUrl}
          title={name}
        />
        <div className="table-cell">{name}</div>
      </div>
    );
  };

  return (
    <TableContainer>
      <Table aria-label="leader board" sx={{ minWidth: 430 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left" className="table-header">
              Name
            </TableCell>
            <TableCell align="center" className="table-header">
              Number of plays
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topPlayCreators.map((creator) => (
            <TableRow key={creator.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left" className="table-cell" component="th" scope="row">
                {profilePicture(creator.displayName, creator.avatarUrl)}
              </TableCell>
              <TableCell align="center" className="table-cell">
                {creator.count}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopPlayCreators;
