import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";

function ConfirmDeletePopup({ cardId, onClose, onCardDelete, card }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(cardId);
  }
  return (
    <>
      <PopupWithForm
        name={"erase"}
        title={"Tem certeza?"}
        buttonName={"Sim"}
        isOpen={cardId}
        onClose={onClose}
        onSubmit={handleSubmit}
      ></PopupWithForm>
    </>
  );
}

export default ConfirmDeletePopup;
