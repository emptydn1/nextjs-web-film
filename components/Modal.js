import React from "react";
import ReactDOM from "react-dom";

const portalModal = document.querySelector("#modal");

const ModalOverlay = ({ children }) => {
    return (
        <>
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 px-[0.9375rem]" />
            <div className="fixed mx-[0.9375rem] z-50 top-1/2 right-0 left-0 -translate-y-1/2 h-[90vh] xl:h-auto overflow-y-scroll xl:overflow-y-hidden">
                {children}
            </div>
        </>
    );
};

const Modal = ({ children, onShowModal }) => {
    return (
        <>
            {/* {ReactDOM.createPortal(<Overlay />, portalModal)} */}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalModal
            )}
        </>
    );
};

export default Modal;
