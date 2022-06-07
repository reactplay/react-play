import { getPlayById } from "meta/play-meta-util";
import PlayHeader from "common/playlists/PlayHeader";
import "./productEntryForm.css";
import AddProduct from "./components/AddProduct/AddProducts";
import ProductItems from "./components/Products/ProductItems/ProductItems";
import ItemDateFilter from "./components/ItemDateFilter";
import { useState } from "react";

function ProductEntryForm(props) {
	const { id } = props;
	const play = getPlayById(id);

	// Your Code Start below.
	const ALL_PRODUCTS = [
		{
			name: "Shampoo",
			des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
			date: new Date(2021, 8, 8),
			price: 360,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPW0JWRn_LE3AZKpOx_LMWMkhNnijfMcdirA&usqp=CAU",
			id: Math.random().toString(),
		},
		{
			name: "Chair",
			des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag",
			date: new Date(2019, 1, 30),
			price: 1400,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMe7yY267GFqs-Bm_igjtTEtCC_4lcapcgIw&usqp=CAU",
			id: Math.random().toString(),
		},
		{
			name: "Watch",
			des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
			date: new Date(2022, 5, 8),
			price: 4800,
			image:
				"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
			id: Math.random().toString(),
		},
	];

	const [productLists, setProductList] = useState(ALL_PRODUCTS);

	const newProductAdded = function (productLists) {
		setProductList((demoFunc) => [productLists, ...demoFunc]);
	};
	const [filterYear, setFilterYear] = useState("2022");

	const filteredYear = (newFilterYear) => {
		setFilterYear(newFilterYear);
	};

	return (
		<>
			<div className="play-details">
				<PlayHeader play={play} />
				<div className="play-details-body product-entry-form">
					{/* Your Code Starts Here */}
					<div>
						<div className="productsMainWrap">
							<div className="productsItems">
								<div className="topBar">
									<h2>Products</h2>
									<ItemDateFilter
										selectedYear={filterYear}
										onFilterYearHandler={filteredYear}
									/>
								</div>
								<ProductItems
									productListItems={productLists}
									checkFilterYear={filterYear}
								/>
							</div>
							<div className="productsEnteryWrapper">
								<AddProduct onNewProductAdded={newProductAdded} />
							</div>
						</div>
					</div>
					{/* Your Code Ends Here */}
				</div>
			</div>
		</>
	);
}

export default ProductEntryForm;
