import React from "react";
import { Button } from "../atoms/Button";
import { createPortal } from "react-dom";
// import {  useGetPokemonQuery } from "../../api/pokemons";

interface ModalProps {
  onModalClose?: () => void;
  className?: string;
  data?: any;
  label?: string;
}

export const Modal: React.FC<ModalProps> = ({ onModalClose, data }) => {


  
  return createPortal(
    <div className="modal__background">
      <div className={"modal"}>
        {data && (
          <>
            <div className="modal__header">{data.name}</div>
            <div className={"modal__body"}>
              <div>
                <div>Types:</div>
                <div className={"modal__types"}>
                  {data?.types?.map((el: any) => (
                    <div>{el.type.name}</div>
                  ))}
                </div>
              </div>
              <div>
                <div>Abilities:</div>
                <div className={"modal__types"}>
                  {data?.abilities?.map((el: any) => (
                    <div key={el.ability.name}>{el.ability.name}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal__foot">
              <Button
                className="button__modal"
                label="Close info"
                onClick={onModalClose}
              ></Button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};
