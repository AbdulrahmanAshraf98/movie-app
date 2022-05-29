import React, { Fragment } from "react";
import * as ReactDOM from "react-dom";
import Backdrop from "./BackDrop/Backdrop";

import Overlay from "./OverLay/Overlay";

function Modal({ children, className, openModalHandler, closeModalHandler }) {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
			{ReactDOM.createPortal(
				<Overlay
					className={className}
					openModalHandler={openModalHandler}
					closeModalHandler={closeModalHandler}>
					{children}
				</Overlay>,
				document.getElementById("overlays"),
			)}
		</Fragment>
	);
}

export default Modal;
