import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { UserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Card from "./Card";

function Main({
  onClick,
  onEditProfileClick,
  onEditAvatarClick,
  onAddPlaceClick,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const [cardsApp, setCards] = useState([]);
  const userData = useContext(UserContext);

  useEffect(() => {
    api.getInitialCards().then((apiCards) => setCards(apiCards));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === userData._id);

    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(cardId) {
    api.removeCard(cardId).then(() => {
      setCards(cardsApp.filter((card) => card._id !== cardId));
    });
  }

  return (
    <>
      <section className="profile" onClick={onClick}>
        <div className="profile__container">
          <button onClick={onEditAvatarClick} className="profile__pic-button">
            <img
              src={userData.avatar}
              alt="Imagem de perfil do usuário"
              className="profile__picture"
            />
          </button>
          <div className="profile__input">
            <div className="profile__text-button">
              <h1 className="profile__name block">{userData.name}</h1>
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
            <h2 className="profile__about block">{userData.about}</h2>
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
            <Card
              cardData={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Main;
