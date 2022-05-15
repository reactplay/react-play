import ItemDate from "./ItemDate";

export default function Items(props){        

    return(    
        <div className='productItem'>
            <div className='productImage'>
                <img src={props.productImage} />
            </div>
            <div className='productDes'>
                <div className='productTopBar'>
                    <h3>{props.productName}</h3>
                    <ItemDate itemDate={props.productDate}/>                                          
                </div>
                <div className='productBottomBar'>
                    <p>{props.productDescription}</p>
                    <div className='price'>
                        <span>&#8377; </span>{props.productPrice}
                    </div>
                </div>
            </div>
        </div>          
    );
}