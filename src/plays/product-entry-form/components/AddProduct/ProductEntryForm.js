import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

export default function ProductEntryForm(props) {
	const [inputName, setInputName] = useState("");
	const [inputDescription, setInputDescription] = useState("");
	const [inputPrice, setInputPrice] = useState("");
	const [inputDate, setInputDate] = useState("");
	const [inputImage, setInputImage] = useState("");
	const [error, setError] = useState();

	function itemInputName(event) {
		setInputName(event.target.value);
	}
	function itemInputDescription(event) {
		setInputDescription(event.target.value);
	}
	function itemInputPrice(event) {
		setInputPrice(event.target.value);
	}
	function itemInputDate(event) {
		setInputDate(event.target.value);
	}
	function itemInputImage(event) {
		setInputImage(event.target.value);
	}

	const submitProductEntryForm = function (event) {
		event.preventDefault();
		const productAllData = {
			name: inputName,
			des: inputDescription,
			price: inputPrice,
			date: new Date(inputDate),
			image: inputImage,
		};
		const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

		if (
			inputName.trim().length === 0 ||
			inputDate.length === 0 ||
			inputDescription.trim().length === 0 ||
			inputImage.trim().length === 0
		) {
			setError({
				errTitle: "Empty Value",
				errMessage: "Please fill all the inputs",
			});
			return;
		}
		if (
			parseInt(inputPrice) < 1 ||
			inputPrice.match(/[a-z]/i) ||
			format.test(inputPrice)
		) {
			setError({
				errTitle: "Invalid Price",
				errMessage: "Please enter valid price",
			});
			return;
		}

		props.onNewProductSubmit(productAllData);
		setInputName("");
		setInputDescription("");
		setInputImage("");
		setInputPrice("");
		setInputDate("");
	};
	const errHandle = function () {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					errorTitle={error.errTitle}
					errorMessage={error.errMessage}
					errorHandler={errHandle}
				/>
			)}
			<form onSubmit={submitProductEntryForm}>
				<div className="form-group">
					<input
						type="text"
						name="product-name"
						placeholder="Product name"
						onChange={itemInputName}
						value={inputName}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="product-image"
						placeholder="Image URL https://image.com"
						value={inputImage}
						onChange={itemInputImage}
					/>
				</div>
				<div className="form-group">
					<textarea
						rows="3"
						name="product-description"
						placeholder="Product description"
						onChange={itemInputDescription}
						value={inputDescription}
					></textarea>
				</div>
				<div className="form-group">
					<input
						type="tel"
						name="product-price"
						placeholder="Enter price"
						onChange={itemInputPrice}
						value={inputPrice}
					/>
				</div>
				<div className="form-group">
					<input
						type="date"
						name="product-date"
						min="2019-01-01"
						onChange={itemInputDate}
						value={inputDate}
					/>
				</div>
				<div className="form-group btnWrap">
					<input
						type="button"
						className="cancelBtn"
						value="Cancel"
						onClick={props.onCancel}
					/>
					<input type="submit" name="submit" value="Add product" />
				</div>
			</form>
		</div>
	);
}