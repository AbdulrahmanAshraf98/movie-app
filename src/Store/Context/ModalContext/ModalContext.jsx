import { createContext } from "react";

const ModalContext = createContext({
	videoModuleIsOpen: false,
	SearchModuleIsOpen: false,
	videoModuleOpenHandler: (id) => {},
	videoModuleCloseHandler: () => {},
	SearchModuleOpenHandler: (query) => {},
	SearchModuleCloseHandler: () => {},
});

export default ModalContext;
