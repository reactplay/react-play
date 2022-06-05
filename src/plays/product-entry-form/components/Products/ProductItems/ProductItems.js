import ProductsList from "../ProductsList";

export default function ProductItems(props) {

	const filterProducts = props.productListItems.filter(products =>{
		return products.date.getFullYear().toString() === props.checkFilterYear;
	})

	return (
		<div className="productItemsWrapper">	
			<ProductsList productItemList={filterProducts}/>
		</div>
	);
}
