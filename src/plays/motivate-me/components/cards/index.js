import React from 'react';
import './index.css'
export default function Card ({index,author,quote}) {
    return(
        <div className='card-container-main' key={index}>
            <div className={`Question__tag ${index % 2 === 0?'even_div':'odd_div'}`}></div>
            <p className="quote">
                {quote}
            </p>
            <div className="author-name">
                {author}
            </div>
            
        </div>
    )
}