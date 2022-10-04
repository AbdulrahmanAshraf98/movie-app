import React from "react";
import { Toaster } from "react-hot-toast";

const Notifications = () => {
	return (
		<Toaster
			position="top-right"
			reverseOrder={false}
			gutter={8}
			containerClassName=""
			containerStyle={{}}
			toastOptions={{
				// Define default options
				duration: 500,
				style: {
					background: "#363636",
					color: "#fff",
				},
				// Default options for specific types
				success: {
					duration: 1000,
				},
			}}
		/>
	);
};

export default Notifications;
