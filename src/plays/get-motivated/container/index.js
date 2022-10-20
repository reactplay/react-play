import Card from '../components/cards';
import SearchBar from '../components/search-bar';
import './index.css';
export default function Container({ Quotes, setAuthor, author }) {
	console.log(Quotes, author);
	return (
		<div className="card-main-container">
			<SearchBar author={author} setAuthor={setAuthor} Quotes={Quotes} />
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
