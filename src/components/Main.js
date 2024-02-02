import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import Card from "./Card";

function Main({
  onEditProfileClick = { onEditProfileClick },
  onEditAvatarClick = { onEditAvatarClick },
  onAddPlaceClick = { onAddPlaceClick },
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cardsApp, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((name) => {
      setUserName(name);
    });
  }, []);

  useEffect(() => {
    api.getUserInfo().then((about) => {
      setUserDescription(about);
    });
  }, []);

  useEffect(() => {
    api.getUserInfo().then((avatar) => {
      setUserAvatar(avatar);
    });
  }, []);

  useEffect(() => {
    api.getInitialCards().then((apiCards) => setCards(apiCards));
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <button onClick={onEditAvatarClick} className="profile__pic-button">
            <img
              src={userAvatar.avatar}
              alt="Imagem de perfil do usuário"
              className="profile__picture"
            />
          </button>
          <div className="profile__input">
            <div className="profile__text-button">
              <h1 className="profile__name block">{userName.name}</h1>
              <button
                type="button"
                onClick={onEditProfileClick}
                className="profile__edit-button"
              >
                <img
                  src={require("../styles/images/edit__button.png")}
                  alt="Botão de editar perfil"
                />
              </button>
            </div>
            <h2 className="profile__about block">{userDescription.about}</h2>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlaceClick}
        >
          <img
            className="profile__add-image"
            src={require("../styles/images/Add__button.png")}
            alt="Botão de adicionar"
          />
        </button>
      </section>
      <section className="elements">
        <template id="cards" />
        <ul className="elements__container">
          {cardsApp.map((card) => (
            <Card cardData={card} key={card._id} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Main;
