import { useState } from 'react';
import { quotes as Quotes } from './data';
import Header from './components/header';
import './index.css';
import Container from './container';
import Footer from './components/footer';
function GetMotivated() {
	const [author, setAuthor] = useState('');
	return (
		<div className="main">
			<Header />
			<Container author={author} setAuthor={setAuthor} Quotes={Quotes} />
			<Footer />
		</div>
	);
}

export default GetMotivated;
