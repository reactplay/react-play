import Card from '../components/cards';
import SearchBar from '../components/search-bar';
import './motivational_quote_card_container_main.css';
export default function Container({ Quotes, handleAuthorChange, author }) {
  return (
    <div className="card-main-container">
      <SearchBar author={author} setAuthor={handleAuthorChange} Quotes={Quotes} />
      {author === ''
        ? Object.keys(Quotes).map((name) => {
            return Quotes[name].map((quote, index) => {
              return <Card key={index} index={index} quote={quote} author={name} />;
            });
          })
        : Quotes[author].map((quote, index) => {
            return <Card key={index} index={index} quote={quote} author={author} />;
          })}
    </div>
  );
}
