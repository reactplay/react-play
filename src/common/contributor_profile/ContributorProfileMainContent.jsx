import React, { useState, useMemo, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from './components/Badge';
import Contributions from './components/Contributions';
import PlayThumbnail from 'common/playlists/PlayThumbnail';
import { toSanitized } from 'common/services/string';
import * as all_plays from 'plays';

const ContributorProfileMainContent = ({ plays }) => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState({ propen: 0, prmerged: 0, issueopen: 0, issueclosed: 0 });
  const apiParams = [
    { type: 'pr', state: 'merged', user: 'author' },
    { type: 'pr', state: 'open', user: 'author' },
    { type: 'issue', state: 'open', user: 'assignee' },
    { type: 'issue', state: 'closed', user: 'assignee' }
  ];

  useEffect(() => {
    async function fetchData(type, state, user) {
      const res = await fetch(
        `https://api.github.com/search/issues?q=org:reactplay%20${user}:nagarjunshroff%20type:${type}%20is:${state}`
      );
      const response = await res.json();
      setCount((prev) => {
        return { ...prev, [type + state]: response.total_count };
      });
    }
    apiParams.map((param) => fetchData(param.type, param.state, param.user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playsCount = useMemo(() => {
    const count = plays?.filter((play) => play.component !== null);

    return count?.length;
  }, [plays]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        aria-labelledby={`user-profile-tab-${index}`}
        hidden={value !== index}
        id={`user-profile-tabpanel-${index}`}
        role="tabpanel"
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `user-profile-tab-${index}`,
      'aria-controls': `user-profile-tabpanel-${index}`
    };
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="User profile details" value={value} onChange={handleTabChange}>
          <Tab
            icon={<Badge count={playsCount} />}
            iconPosition="end"
            label="Plays"
            {...a11yProps(0)}
          />
          {/* <Tab
            label="Contents"
            iconPosition="end"
            {...a11yProps(1)}
          /> */}
          <Tab iconPosition="end" label="Contributions" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel index={0} value={value}>
        <ol className="list-plays">
          {plays?.map((play, index) => (
            <React.Fragment key={index}>
              {/* {console.log(play.component)} */}
              {all_plays[play.component ? play.component : toSanitized(play.title_name)] && (
                <PlayThumbnail key={play.id} play={play} />
              )}
            </React.Fragment>
          ))}
        </ol>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        {" "}
        Content{" "}
      </TabPanel> */}
      <TabPanel index={1} value={value}>
        <Contributions count={count} />
      </TabPanel>
    </Box>
  );
};

export default ContributorProfileMainContent;
