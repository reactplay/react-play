

const Footer = () => {

  return (
    <footer className="app-footer">
      <p>
        ReactPlay&copy; {new Date().getFullYear()} by {' '} is an open-source project developed by <a 
          href="https://tapasadhikary.com" 
          target="_blank" 
          rel="noopener noreferrer">Tapas Adhikary</a> and friends.
      </p>
    </footer>
  );
};

export default Footer;
