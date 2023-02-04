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
        <div className="leaderboard-table-cell">{name}</div>
      </div>
    );
  };

  return (
    <TableContainer className="leaderboard-container">
      <Table aria-label="leader board">
        <TableHead>
          <TableRow>
            <TableCell align="left" className="leaderboard-table-header">
              Name
            </TableCell>
            <TableCell align="center" className="leaderboard-table-header">
              Number of plays
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topPlayCreators.map((creator) => (
            <TableRow
              key={creator.displayName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" className="leaderboard-table-cell" component="th" scope="row">
                {profilePicture(creator.displayName, creator.avatarUrl)}
              </TableCell>
              <TableCell align="center" className="leaderboard-table-cell">
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
