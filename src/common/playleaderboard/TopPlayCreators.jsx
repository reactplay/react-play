import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import './leaderBoard.css';

const TopPlayCreators = ({ topPlayCreators }) => {
  const getRankIcon = (rank) => {
    if (rank === 1) {
      return <EmojiEventsIcon className="gold-trophy" fontSize="small" />;
    }

    if (rank === 2) {
      return <EmojiEventsIcon className="silver-trophy" fontSize="small" />;
    }

    if (rank === 3) {
      return <EmojiEventsIcon className="bronze-trophy" fontSize="small" />;
    }

    return null;
  };

  const profilePicture = (name, avatarUrl, rank) => (
    <div className="flex flex-row items-center gap-3">
      {getRankIcon(rank)}
      <img
        alt={name}
        className="h-8 w-8 rounded-full border-solid rank-avatar"
        src={avatarUrl}
        title={name}
      />
      <div className="leaderboard-table-cell">{name}</div>
    </div>
  );

  return (
    <TableContainer className="leaderboard-container">
      <Table aria-label="leader board">
        <TableHead>
          <TableRow>
            <TableCell align="left" className="leaderboard-table-header">
              Name
            </TableCell>
            <TableCell align="center" className="leaderboard-table-header">
              Number of Plays
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topPlayCreators.map((creator, index) => {
            const rank = index + 1;

            return (
              <TableRow
                className={`rank-${rank}`}
                key={creator.displayName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  align="left"
                  className="leaderboard-table-cell"
                  component="th"
                  scope="row"
                >
                  {profilePicture(creator.displayName, creator.avatarUrl, rank)}
                </TableCell>
                <TableCell align="center" className="leaderboard-table-cell">
                  {creator.count}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopPlayCreators;
