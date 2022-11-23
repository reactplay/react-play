import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Badge from "./components/Badge";
import PlayThumbnail from "common/playlists/PlayThumbnail";
import { toSanitized } from "common/services/string";
import * as all_plays from "plays";

const ContributorProfileMainContent = ({ plays }) => {
  const [value, setValue] = useState(0);
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
        role="tabpanel"
        hidden={value !== index}
        id={`user-profile-tabpanel-${index}`}
        aria-labelledby={`user-profile-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `user-profile-tab-${index}`,
      "aria-controls": `user-profile-tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="User profile details"
        >
          <Tab
            icon={<Badge count={playsCount} />}
            iconPosition="end"
            label="Plays"
            {...a11yProps(0)}
          />
          <Tab
            label="Contents"
            icon={<Badge />}
            iconPosition="end"
            {...a11yProps(1)}
          />
          <Tab
            label="Contributions"
            icon={<Badge />}
            iconPosition="end"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ol className="list-plays">
          {plays?.map((play, index) => (
            <React.Fragment key={index}>
              {all_plays[
                play.component ? play.component : toSanitized(play.title_name)
              ] && <PlayThumbnail key={play.id} play={play} />}
            </React.Fragment>
          ))}
        </ol>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {" "}
        Content{" "}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Contributions
      </TabPanel>
    </Box>
  );
};

export default ContributorProfileMainContent;
