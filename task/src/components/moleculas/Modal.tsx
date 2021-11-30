import React from "react";
import { Button } from "../atoms/Button";
import { createPortal } from "react-dom";
import close from "./../../icons/close.svg";

interface ModalProps {
  onModalClose?: () => void;
  className?: string;
  data?: any;
  label?: string;
  props?: any;
}

export const Modal: React.FC<ModalProps> = ({
  className,
  onModalClose,
  data,
  ...props
}) => {
  return createPortal(
    <div className="modal__background">
      <div className={"modal"}>
        <div className="modal__header">{data.name}</div>
        <div className={"modal__body"}>
          <div>{data.office.name}</div>
          <div>{data.contract_type.en}</div>
        </div>
        <div className="modal__foot">
          <Button
            className="button__modal"
            label="Close info"
            onClick={onModalClose}
          ></Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
