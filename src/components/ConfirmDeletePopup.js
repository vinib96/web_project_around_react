import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";

function ConfirmDeletePopup({ isOpen, onClose, onCardDelete, card }) {
  console.log(card);
  return (
    <>
      <PopupWithForm
        name={"erase"}
        title={"Tem certeza?"}
        buttonName={"Sim"}
        isOpen={isOpen}
        onClose={onClose}
        onClick={() => onCardDelete(card)}
      ></PopupWithForm>
    </>
  );
}

export default ConfirmDeletePopup;
