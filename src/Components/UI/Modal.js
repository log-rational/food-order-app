import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => <div className={classes.backdrop} />;
const ModalOverlay = (props) => (
  <div className={classes.modal}>{props.children}</div>
);

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop></Backdrop>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
