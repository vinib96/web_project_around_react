import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onEditAvatarClick={handleEditAvatarClick}
          onAddPlaceClick={handleAddPlaceClick}
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
        <ImagePopup />

        <Footer />
      </div>
    </div>
  );
}

export default App;
