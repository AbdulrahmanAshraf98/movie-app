import React from "react";
import styles from "./Overlay.module.css";
function Overlay({
	children,
	className,
	openModalHandler,
	closeModalHandler,
	closeBtnClassName,
}) {
	return (
		<div className={`${styles.overlay} ${className}`}>
			<a
				className={`${styles.closeModal} ${closeBtnClassName}`}
				onClick={closeModalHandler}>
				x
			</a>
			{children}
		</div>
	);
}

export default Overlay;
