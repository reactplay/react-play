import Card from '../components/cards';
import SearchBar from '../components/search-bar';
import './motivational_quote_card_container_main.css';

export default function Container({ Quotes, handleAuthorChange, author }) {
  return (
    <div className="card-main-container">
      <SearchBar Quotes={Quotes} author={author} setAuthor={handleAuthorChange} />
      {author === ''
        ? Object.keys(Quotes).map((name) => {
            return Quotes[name].map((quote, index) => {
              return <Card author={name} index={index} key={index} quote={quote} />;
            });
          })
        : Quotes[author].map((quote, index) => {
            return <Card author={author} index={index} key={index} quote={quote} />;
          })}
    </div>
  );
}
