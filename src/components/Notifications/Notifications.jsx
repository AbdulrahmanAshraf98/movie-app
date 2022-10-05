import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Notifications = () => {
	return (
		<ToastContainer
			position="top-center"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			draggablePercent={50}
		/>
		// <Toaster
		// 	position="bottom-center"
		// 	reverseOrder={false}
		// 	gutter={8}
		// 	containerClassName=""
		// 	containerStyle={{}}
		// 	toastOptions={{
		// 		// Define default options
		// 		duration: 2000,
		// 		style: {
		// 			background: "var(--black-color)",
		// 			color: "var(--grey-color)",
		// 		},
		// 		loading: {
		// 			duration: 500,
		// 		},
		// 		// Default options for specific types
		// 		success: {
		// 			duration: 1000,
		// 			// position: "bottom-center",
		// 		},
		// 	}}
		// />
	);
};

export default Notifications;
