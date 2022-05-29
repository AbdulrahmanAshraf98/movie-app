import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ModalContext from "./ModalContext";

function ModalContextProvider({ children }) {
	const [videoModuleIsOpen, setVideoModuleIsOpen] = useState(false);
	const [SearchModuleIsOpen, setSearchModuleIsOpen] = useState(false);
	const [videoModuleId, setVideoModuleId] = useState(null);
	const [SearchModelQuery, setSearchModelQuery] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const videoModuleOpenHandler = () => {
		setVideoModuleIsOpen((prevState) => true);
	};
	const videoModuleCloseHandler = () => {
		setVideoModuleIsOpen((prevState) => false);
	};
	const SearchModuleOpenOpenHandler = () => {
		setSearchModuleIsOpen((prevState) => true);
	};
	const SearchModuleCloseHandler = () => {
		setSearchModuleIsOpen((prevState) => false);
	};
	const setSearchParamsHandler = (searchParamsObject) => {
		setSearchParams(searchParamsObject);
	};
	const resetSearchParamsHandler = () => {
		setSearchParams();
	};
	const getSearchParamsHandler = (paramsName) => {
		return searchParams.get(paramsName);
	};

	const setVideoModuleIdHandler = (id) => {
		setVideoModuleId((prevState) => id);
	};
	const setSearchModelQueryHandlers = (query) => {
		setSearchModelQuery(query);
	};
	const modalContext = {
		videoModuleIsOpen: videoModuleIsOpen,
		SearchModuleIsOpen: SearchModuleIsOpen,
		videoModuleOpenHandler: videoModuleOpenHandler,
		videoModuleCloseHandler: videoModuleCloseHandler,
		SearchModuleOpenOpenHandler: SearchModuleOpenOpenHandler,
		SearchModuleCloseHandler: SearchModuleCloseHandler,
		setSearchParams: setSearchParams,
		resetSearchParamsHandler: resetSearchParamsHandler,
		getSearchParamsHandler: getSearchParamsHandler,
		setVideoModuleIdHandler: setVideoModuleIdHandler,
		setSearchModelQueryHandlers: setSearchModelQueryHandlers,
	};
	return (
		<ModalContext.Provider value={modalContext}>
			{children}
		</ModalContext.Provider>
	);
}

export default ModalContextProvider;
