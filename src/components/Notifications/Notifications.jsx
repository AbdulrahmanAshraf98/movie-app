import React from "react";
import { Toaster } from "react-hot-toast";

const Notifications = () => {
	return (
		<Toaster
			position="bottom-center"
			reverseOrder={false}
			gutter={8}
			containerClassName=""
			containerStyle={{}}
			toastOptions={{
				// Define default options
				duration: 2000,
				style: {
					background: "var(--black-color)",
					color: "var(--grey-color)",
				},
				loading: {
					duration: 500,
				},
				// Default options for specific types
				success: {
					duration: 1000,
					// position: "bottom-center",
				},
			}}
		/>
	);
};

export default Notifications;
