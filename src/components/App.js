import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { UserContext } from "../contexts/CurrentUserContext";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then((name, avatar, about) => {
      setCurrentUser(name, avatar, about);
    });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="page">
        <UserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onEditAvatarClick={handleEditAvatarClick}
            onAddPlaceClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
          ></Main>
          <PopupWithForm
            name={"profile"}
            title={"Editar Perfil"}
            buttonName={"Enviar"}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            {" "}
            <label>
              <input
                type="text"
                name="name"
                id="name-input"
                className="popup__input popup__input_type_name"
                placeholder="Nome"
                minLength="2"
                maxLength="40"
                required
              />

              <span className="name-input-error"></span>
            </label>
            <label>
              <input
                type="text"
                name="about"
                id="about-input"
                className="popup__input popup__input_type_about"
                placeholder="Sobre mim"
                minLength="2"
                maxLength="200"
                required
              />

              <span className="about-input-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            name={"add-cards"}
            title={"Novo local"}
            buttonName={"Criar"}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            {" "}
            <label>
              <input
                type="text"
                name="title"
                id="title-input"
                className="popup__input popup__input_type_title"
                placeholder="Título"
                required
                minLength={2}
                maxLength={30}
              />
              <span className="title-input-error" />
            </label>
            <label>
              <input
                type="url"
                name="image"
                id="image-input"
                className="popup__input popup__input_type_image"
                placeholder="Link de imagem"
                required
              />
              <span className="image-input-error" />
            </label>
          </PopupWithForm>
          <PopupWithForm
            name={"erase"}
            title={"Tem certeza?"}
            buttonName={"Sim"}
            onClose={closeAllPopups}
          ></PopupWithForm>
          <PopupWithForm
            name={"changepic"}
            title={"Alterar a foto de perfil"}
            buttonName={"Salvar"}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label>
              <input
                type="url"
                name="image"
                id="pic-input"
                className="popup__input popup__input_type_picture"
                placeholder="Link de imagem"
                required
              />

              <span className="pic-input-error"></span>
            </label>
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <Footer />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
