import PlayHeader from "common/playlists/PlayHeader";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { countries } from "./countriesAndCategories";
import NewsCard from "./component/Card";
import CustomToggleButtonGroup from "./component/CustomToggleButtonGroup";
import "./styles.css";

function NewsFeedApplication(props) {
  const [newsData, setNewsData] = useState();
  const [selectedCountry, updateSelectedCountry] = useState("IN");
  const [selectedCategory, updateSelectedCategory] = useState("general");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${selectedCountry.toLowerCase()}&category=${selectedCategory}&pageSize=100&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      ).then((data) => data.json());
      setNewsData(res.articles);
    }
    fetchData();
  }, [selectedCountry, selectedCategory]);

  const handleCountryChange = (event) => {
    updateSelectedCountry(event.target.value);
  };

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
                  <FormControl size="small" className="menu-form-control">
                    <InputLabel id="country-select-label">Country</InputLabel>
                    <Select
                      labelId="country-select-label"
                      id="country-select"
                      defaultValue={"IN"}
                      value={selectedCountry}
                      label="Country"
                      onChange={(e) => {
                        handleCountryChange(e);
                      }}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.name} value={country.code}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <CustomToggleButtonGroup
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                />
              </div>
            </div>
            <div className="card-container">
              {newsData ? (
                newsData.map((news, i) => <NewsCard news={news} key={i} />)
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
