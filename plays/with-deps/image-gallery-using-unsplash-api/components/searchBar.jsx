import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
  const { onFormSubmit, setQuery } = props;

  return (
    <>
      <form className="searchBar" onSubmit={onFormSubmit}>
        <input
          className="searchBarInput"
          placeholder="Search for an image"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="submitButton" type="submit" value="Search">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
