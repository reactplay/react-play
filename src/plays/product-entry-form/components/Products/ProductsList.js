import Items from './ProductItems/Items';

export default function ProductsList(props) {

	if(props.productItemList.length === 0){
		return <h2 className='noData'>No Product Found</h2>
	}

    return <div>
        {props.productItemList.map(function (items) {
			return (
				<Items						
					productName={items.name}
					productDescription={items.des}
					productPrice={items.price}
					productDate={items.date}
					productImage={items.image}
					key={items.id}
				/>
			);
		})}
    </div>
}