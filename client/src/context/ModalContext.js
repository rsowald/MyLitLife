import React, { useState, useContext } from "react";

const ModalContext = React.createContext();

export function useBookModal() {
    return useContext(ModalContext);
}

export function ModalProvider({ children }) {
    const [bookModalInfo, setBookModalInfo] = useState();

    const showModal = (isCompleted, bookId) => {
        setBookModalInfo({
            isCompleted,
            bookId
        });
    };

    const hideModal = () => {
        setBookModalInfo(undefined);
    };

    return (
        <ModalContext.Provider value={{
            showModal,
            hideModal,
            bookModalInfo
        }} >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;