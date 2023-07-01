import './index.css';

export default function SearchBar({ Quotes, author, setAuthor }) {
  return (
    <div className="motivate-me-search_bar">
      <div className="motivate-me-Dropdown">
        <div>
          <label className="motivate-me-Dropdown_label">Author</label>
        </div>
        <button className="motivate-me-btn motivate-me-Dropdown_button">
          <span>{author ? author : 'All'}</span>
          <i>
            <svg
              className="feather feather-chevron-down btn__icon"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </i>
        </button>
        <ul className="motivate-me-Dropdown_items">
          <li
            className={`${author === '' && 'motivate-me-selected_author'}`}
            onClick={() => setAuthor('')}
          >
            All
          </li>
          {Object.keys(Quotes).map((name, index) => {
            return (
              <li
                className={`${author === name && 'motivate-me-selected_author'}`}
                key={`${name}${index}`}
                onClick={() => setAuthor(name)}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
