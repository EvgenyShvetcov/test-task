import React from "react";
import { Button } from "../atoms/Button";
import { createPortal } from "react-dom";
import close from "./../../icons/close.svg";

export const Modal = ({
  className,
  onModalClose,
  buttonLabel,
  text,
  header,
  centralPosition,
  small,
  ...props
}) => {
  return createPortal(
    <div className="modal__background">
      <div className={"modal " + (small ? "-small" : "-big")}>
        <Button
          className="modal__close"
          onClick={onModalClose}
          icon={<img src={close} alt="Закрыть" />}
        />

        <div className={small ? "modal__headersmall" : "modal__header"}>
          {header}
        </div>
        <div className={small ? "modal__bodysmall" : "modal__body"}>{text}</div>
        <div className="modal__foot">
          <Button
            className="button__modal"
            label={<div style={{ color: "#FFFFFF" }}>{buttonLabel}</div>}
            onClick={onModalClose}
          ></Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
