import './index.css'
export default function SearchBar ({Quotes,author,setAuthor}) {
    return (
        <div className="motivate-me-search_bar">
            <div className="motivate-me-Dropdown">
            <div>
                <label className="motivate-me-Dropdown_label">Author</label>
            </div>
            <button className="motivate-me-btn motivate-me-Dropdown_button">
                <span>All</span>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down btn__icon"><polyline points="6 9 12 15 18 9"></polyline></svg></i>
            </button>
            <ul className="motivate-me-Dropdown_items">
                {
                    Object.keys(Quotes).map((name,index)=>{
                    return(
                        <li key={`${name}${index}`} onClick={()=>setAuthor(name)} className={`${author === name&&"motivate-me-selected_author"}`}>{name}</li>
                    )
                    })
                }
                </ul>
            </div>
        </div>
    )
}