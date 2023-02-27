import React, { useEffect } from 'react';
import Editor from './EditorLayout';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button, FormControl, Grid, IconButton, TextField } from '@mui/material';
import { loader } from '@monaco-editor/react';
import monacoThemes from 'monaco-themes/themes/themelist';
import Collapse from '@mui/material/Collapse';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Alert from '@mui/material/Alert';
import { LANGUAGES } from '../../Others/Editor/constants';
import { useParams } from 'react-router-dom';
import { SnippetsData } from '../../CodeSnips.js';

const CodeSnippetLayout = () => {
  // getting Context Reference
  const { snipData, updateSnip } = React.useContext(SnippetsData);

  // getting ID
  const ID = useParams();

  // get Exsiting or new
  const currentSnippet = snipData.filter((snippet) => snippet.id === ID.param2)[0] || {};

  // console.log(currentSnippet);

  const [language, setLanguage] = React.useState(currentSnippet.language);
  const [theme, setTheme] = React.useState(currentSnippet.theme);
  const [code, setCode] = React.useState(currentSnippet.code);
  const [name, setName] = React.useState(currentSnippet.name);
  const [description, setDescription] = React.useState(currentSnippet.description);

  const [alertOpen, setAlertOpen] = React.useState(false);

  useEffect(() => {
    handleThemeChange(currentSnippet.theme);
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  let newTheme = (themeKey, themeVal) => {
    return new Promise((res) => {
      Promise.all([loader.init(), import(`monaco-themes/themes/${themeKey}.json`)]).then(
        ([monaco, themeData]) => {
          monaco.editor.defineTheme(themeVal, themeData);
          res();
        }
      );
    });
  };

  const handleThemeChange = (value) => {
    const val = value;
    const key = monacoThemes[val];

    if (['light', 'vs-dark'].includes(val)) {
      setTheme(val);
    } else {
      newTheme(key, val).then(() => setTheme(val));
    }
  };

  const commitChanges = () => {
    const newSnippets = snipData.map((snip) => {
      if (snip.id === ID.param2) {
        setAlertOpen(true);

        return {
          ...snip,
          name: name,
          language: language,
          code: code,
          theme: theme,
          description: description
        };
      }

      return snip;
    });

    // console.log(newSnippets,updateSnip)
    updateSnip(newSnippets);
  };

  return (
    <>
      <div style={{ padding: '8px' }}>
        <Grid container justifyContent="space-around" spacing={2} sx={{}}>
          <Grid item md={8} order={{ xs: 2, md: 1 }} xs={12}>
            <Editor code={code} language={language} setCode={setCode} theme={theme} />
          </Grid>

          <Grid item md={4} order={{ xs: 1, md: 2 }} xs={12}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={0}
              sx={{ height: '60%' }}
            >
              {/* language DropDown */}
              <Grid
                item
                alignItems="center"
                justifyContent="center"
                sx={{ height: '10%', display: 'flex' }}
                xs={6}
              >
                <FormControl sx={{ m: 1, minWidth: 120, color: 'black' }}>
                  <InputLabel id="language-label">Language</InputLabel>
                  <Select
                    id="lang"
                    label="Language"
                    labelId="language-label"
                    value={language}
                    onChange={handleLanguageChange}
                  >
                    {LANGUAGES.map((language, i) => (
                      <MenuItem key={language + String(i)} value={language}>
                        {language}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Themes Dropdown */}
              <Grid item alignItems="center" sx={{ height: '10%', display: 'flex' }} xs={6}>
                <FormControl sx={{ m: 1, minWidth: 120, color: 'black' }}>
                  <InputLabel id="theme-label">Themes</InputLabel>
                  <Select
                    id="theme"
                    label="Theme"
                    labelId="theme-label"
                    value={theme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                  >
                    <MenuItem key="light001" value="light">
                      light
                    </MenuItem>
                    <MenuItem key="dark001" value="vs-dark">
                      Dark
                    </MenuItem>
                    {Object.entries(monacoThemes).map((theme, i) => (
                      <MenuItem key={theme[1] + String(i)} value={theme[0]}>
                        {theme[1]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ height: '30%', display: 'flex' }}
              >
                <TextField
                  multiline
                  label="Snippet Name"
                  placeholder="Enter Snippet Name"
                  sx={{ width: 450 }}
                  value={name}
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ height: '30%', display: 'flex' }}
              >
                <TextField
                  multiline
                  label="Description"
                  placeholder="Enter description for snippet"
                  rows={3}
                  sx={{ width: 450 }}
                  value={description}
                  variant="outlined"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{
                height: '10%',
                marginTop: '5%',
                '@media (max-width: 900px)': {
                  marginTop: '8%',
                  '@media (max-width: 550px)': {
                    marginTop: '15%'
                  }
                }
              }}
              textAlign="center"
            >
              <Button
                sx={{
                  color: '#013A63',
                  fontWeight: 700,
                  '&:hover': { background: '#013A63', color: 'white' }
                }}
                variant="outlined"
                onClick={commitChanges}
              >
                {' '}
                save{' '}
              </Button>
            </Grid>
            <Collapse in={alertOpen}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    sx={{
                      fontSize: '2rem'
                    }}
                    onClick={() => {
                      setAlertOpen(false);
                    }}
                  >
                    <AiOutlineCloseCircle />
                  </IconButton>
                }
                sx={{ margin: '0rem' }}
              >
                Changes are Saved!
              </Alert>
            </Collapse>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CodeSnippetLayout;
