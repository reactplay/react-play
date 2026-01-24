import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import './leaderBoard.css';

const TopPlayCreators = ({ topPlayCreators }) => {
  const firstPlace = topPlayCreators.length > 0 ? topPlayCreators[0] : null;
  const secondPlace = topPlayCreators.length > 1 ? topPlayCreators[1] : null;
  const thirdPlace = topPlayCreators.length > 2 ? topPlayCreators[2] : null;

  const renderRankIcon = () => {
    return <TagRoundedIcon className="rank-icon rank-same" />;
  };

  return (
    <div className="leaderboard-wrapper">
      <h2 className="leaderboard-title">Top Play Creators of All Time</h2>

      <div className="podium-container">
        {secondPlace && (
          <div className="podium-card podium-second">
            <img
              alt={secondPlace.displayName}
              className="podium-avatar"
              src={secondPlace.avatarUrl}
            />
            <div className="podium-name">{secondPlace.displayName}</div>
            <div className="podium-rank">2nd</div>
          </div>
        )}
        {firstPlace && (
          <div className="podium-card podium-first">
            <img
              alt={firstPlace.displayName}
              className="podium-avatar"
              src={firstPlace.avatarUrl}
            />
            <div className="podium-name">{firstPlace.displayName}</div>
            <div className="podium-rank">1st</div>
          </div>
        )}
        {thirdPlace && (
          <div className="podium-card podium-third">
            <img
              alt={thirdPlace.displayName}
              className="podium-avatar"
              src={thirdPlace.avatarUrl}
            />
            <div className="podium-name">{thirdPlace.displayName}</div>
            <div className="podium-rank">3rd</div>
          </div>
        )}
      </div>

      <TableContainer className="leaderboard-table-container" component={Paper}>
        <Table aria-label="leaderboard table">
          <TableHead>
            <TableRow>
              <TableCell className="leaderboard-table-header">Place</TableCell>
              <TableCell className="leaderboard-table-header">Creator Name</TableCell>
              <TableCell align="right" className="leaderboard-table-header">
                Number of Plays
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topPlayCreators.map((creator, index) => (
              <TableRow key={creator.displayName}>
                <TableCell className="leaderboard-table-cell rank-cell">
                  {renderRankIcon(index + 1)}
                  {index + 1}
                </TableCell>
                <TableCell className="leaderboard-table-cell">
                  <div className="user-profile">
                    <img
                      alt={creator.displayName}
                      className="table-avatar"
                      src={creator.avatarUrl}
                    />
                    {creator.displayName}
                  </div>
                </TableCell>
                <TableCell align="right" className="leaderboard-table-cell points-cell">
                  {creator.count} Plays
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopPlayCreators;
