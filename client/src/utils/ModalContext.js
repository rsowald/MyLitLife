import React from "react";

const ModalContext = React.createContext({
    showModal: () => { },
    hideModal: () => { },
    store: {}
});

export default ModalContext;