import { useState } from "react";
import QuoteContainer from "./component/QuoteContainer";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <QuoteContainer />
      <Footer />
    </div>
  );
}

export default App;
