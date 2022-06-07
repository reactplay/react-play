import moduleClass from "./ErrorModal.module.css";
import { VscChromeClose } from "react-icons/vsc";

export default function ErrorModal(props) {
	return (
		<div>
			<div className={moduleClass.modal} onClick={props.errorHandler}></div>
			<div className={moduleClass.modal_box}>
				<div className={moduleClass.modal_header}>
					<h4>{props.errorTitle}</h4>
					<VscChromeClose
						size="1.5rem"
						className={moduleClass.closeBtn}
						onClick={props.errorHandler}
					/>
				</div>
				<div className={moduleClass.modal_content}>{props.errorMessage}</div>
			</div>
		</div>
	);
}
