import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CodeSnippetLayout from './Components/Editor/CodeSnippetLayout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { defaultSnippets } from './Others/Editor/demoData';
import HomePage from './Components/Home/HomePage';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Drawer
} from '@mui/material';

// WARNING: Do not change the entry componenet name

export const SnippetsData = React.createContext({ snip: {}, updateSnip: () => {} });
SnippetsData.displayName = 'CodeSnippets';

function CodeSnips(props) {
  // Your Code Start below.

  const [showHome, setHome] = useState(true);
  const parameter = useParams();
  useEffect(() => {
    if (parameter.param1 && parameter.param2) {
      setHome(false);
    } else {
      setHome(true);
    }
  }, [parameter]);

  const getSnippets = () => {
    if (localStorage.getItem('snips') === null) {
      localStorage.setItem('snips', JSON.stringify(defaultSnippets));
    }
    const snips = JSON.parse(localStorage.getItem('snips'));

    return snips;
  };

  const [snipData, setSnipData] = React.useState(getSnippets());
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const updateSnip = useCallback((data) => {
    setSnipData(data);
    localStorage.setItem('snips', JSON.stringify(data));
  }, []);

  const contextValue = useMemo(() => ({ snipData, updateSnip }), [snipData, updateSnip]);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <SnippetsData.Provider value={contextValue}>
            <AppBar
              component="nav"
              sx={{ position: 'relative', marginBottom: '1%', background: '#01497C' }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  edge="start"
                  sx={{ mr: 2, display: { sm: 'none' } }}
                  onClick={handleDrawerToggle}
                >
                  <img
                    alt="Hamburger Menu"
                    height="25"
                    src="/menu.png"
                    style={{ fontSize: '10px' }}
                    width="25"
                  />{' '}
                  &ensp; Code Snips
                </IconButton>
                <Typography
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  variant="h6"
                >
                  Code Snips
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {/* <Button key="home" sx={{ color: '#fff' }} onClick={() => navigate('/')}>
                    Home
                  </Button> */}
                  <Link to="/plays/abdulmuheeth/code-snips">Home</Link>
                </Box>
              </Toolbar>
            </AppBar>
            <Box component="nav" sx={{ position: 'relative', marginBottom: '' }}>
              <Drawer
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
                container={window !== undefined ? () => window.document.body : undefined}
                open={mobileOpen}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240,
                    background: '#014f86',
                    color: 'white'
                  }
                }}
                variant="temporary"
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{ textAlign: 'center', background: '#014f86' }}
                  onClick={handleDrawerToggle}
                >
                  <Typography sx={{ my: 2 }} variant="h6">
                    Code Snippets
                  </Typography>
                  <Divider sx={{ color: 'white' }} />
                  <List>
                    <ListItem disablePadding key="home">
                      <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate('/')}>
                        <ListItemText primary="Home" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </Box>
            {showHome ? <HomePage /> : <CodeSnippetLayout />}
            {/* <Routes>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/snippet/:id'} element={<CodeSnippetLayout />} />
            </Routes> */}
          </SnippetsData.Provider>
        </div>
      </div>
    </>
  );
}

export default CodeSnips;
