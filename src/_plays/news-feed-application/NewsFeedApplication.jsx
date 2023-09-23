import PlayHeader from 'common/playlists/PlayHeader';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { countries } from './countriesAndCategories';
import NewsCard from './component/NewsCard';
import CustomToggleButtonGroup from './component/CustomToggleButtonGroup';
import './styles.css';

function NewsFeedApplication(props) {
  const [newsData, setNewsData] = useState([]);
  const [selectedCountry, updateSelectedCountry] = useState('IN');
  const [selectedCategory, updateSelectedCategory] = useState('general');

  useEffect(() => {
    async function fetchData() {
      const { articles } = await fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/${selectedCategory}/${selectedCountry.toLowerCase()}.json`
      ).then((res) => res.json());
      setNewsData(articles);
    }
    fetchData();
  }, [selectedCountry, selectedCategory]);

  const handleCategoryChange = (event) => {
    updateSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body" style={{ padding: 0 }}>
          <div>
            <div className="header-panel">
              <div className="app-title">News Feed</div>
              <div className="header-panel-inputs">
                <div>
                  <FormControl className="menu-form-control" size="small">
                    <InputLabel id="country-select-label">Country</InputLabel>
                    <Select
                      defaultValue="IN"
                      id="country-select"
                      label="Country"
                      labelId="country-select-label"
                      value={selectedCountry}
                      onChange={(e) => {
                        updateSelectedCountry(e.target.value);
                      }}
                    >
                      {countries.map(({ name, code }) => (
                        <MenuItem key={name} value={code}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <CustomToggleButtonGroup
                  handleCategoryChange={handleCategoryChange}
                  selectedCategory={selectedCategory}
                />
              </div>
            </div>
            <div className="card-container">
              {newsData.length > 0 ? (
                newsData.map((news, i) => <NewsCard key={i} news={news} />)
              ) : (
                <CircularProgress />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeedApplication;
