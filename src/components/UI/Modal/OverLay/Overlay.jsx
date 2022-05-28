import React from "react";
import styles from "./Overlay.module.css";
function Overlay({ children, className, openModalHandler }) {
	return (
		<div className={`${styles.overlay} ${className}`}>
			<a className={styles.closeModal} onClick={openModalHandler}>
				x
			</a>
			{children}
		</div>
	);
}

export default Overlay;
