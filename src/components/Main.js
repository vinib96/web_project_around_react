function Main() {
  function handleEditAvatarClick() {
    document.getElementById("pic").classList.add("popup__opened");
  }
  function handleEditProfileClick() {
    document.getElementById("pop").classList.add("popup__opened");
  }
  function handleAddPlaceClick() {
    document.getElementById("popCard").classList.add("popup__opened");
  }
  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <button
            onClick={handleEditAvatarClick}
            className="profile__pic-button"
          >
            <img
              src={require("../styles/images/profile-pic.png")}
              alt="Imagem de perfil do usuário"
              className="profile__picture"
            />
          </button>
          <div className="profile__input">
            <div className="profile__text-button">
              <h1 className="profile__name block">Jacques Cousteau</h1>
              <button
                type="button"
                onClick={handleEditProfileClick}
                className="profile__edit-button"
              >
                <img
                  src={require("../styles/images/edit__button.png")}
                  alt="Botão de editar perfil"
                />
              </button>
            </div>
            <h2 className="profile__about block">Explorar</h2>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={handleAddPlaceClick}
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
        <ul className="elements__container" />
      </section>
      <section className="popup popup_profile" id="pop">
        <div className="popup__container">
          <button type="button" className="popup__close-button">
            <img
              src={require("../styles/images/Close__Icon.png")}
              alt="Botão
              de fechar"
            />
          </button>
          <div className="popup__form-container">
            <h3 className="popup__title">Editar perfil</h3>
            <form
              className="popup__form popup__form_profile"
              name="profile"
              noValidate
            >
              <fieldset className="popup__formset">
                <label>
                  <input
                    type="text"
                    name="name"
                    id="name-input"
                    className="popup__input popup__input_type_name"
                    placeholder="Nome"
                    minLength={2}
                    maxLength={40}
                    required
                  />
                  <span className="name-input-error" />
                </label>
                <label>
                  <input
                    type="text"
                    name="about"
                    id="about-input"
                    className="popup__input popup__input_type_about"
                    placeholder="Sobre mim"
                    minLength={2}
                    maxLength={200}
                    required
                  />
                  <span className="about-input-error" />
                </label>
                <button
                  type="submit"
                  className="popup__submit-button popup__button"
                >
                  Salvar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <section className="popup popup_add-cards" id="popCard">
        <div className="popup__container" id="cards-form">
          <button
            type="button"
            className="popup__close-button popup__close-add"
          >
            <img
              src={require("../styles/images/Close__Icon.png")}
              alt="Botão
              de fechar"
            />
          </button>
          <div className="popup__form-container">
            <h3 className="popup__title">Novo local</h3>
            <form
              className="popup__form"
              name="add-card"
              id="add-card"
              noValidate
            >
              <fieldset className="popup__formset">
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
                <button
                  type="submit"
                  className="popup__submit-button popup__button"
                >
                  Criar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <section className="popup popup_full">
        <div className="popup__container popup__container_image" id="image">
          <button
            type="button"
            className="popup__close-button"
            id="close-image"
          >
            <img
              src={require("../styles/images/Close__Icon.png")}
              alt="Botão
              de fechar"
            />
          </button>
          <img src=" " alt=" " className="popup__image-large" />
          <p className="popup__text-sub" />
        </div>
      </section>
      <section className="popup popup_erase">
        <div className="popup__container" id="erase-form">
          <button
            type="button"
            className="popup__close-button popup__close-add"
          >
            <img
              src={require("../styles/images/Close__Icon.png")}
              alt="Botão
              de fechar"
            />
          </button>
          <div className="popup__form-container">
            <h3 className="popup__title popup__title_erase">Tem certeza?</h3>
            <form className="popup__form" name="remove" id="remove" noValidate>
              <fieldset className="popup__formset">
                <button
                  type="submit"
                  className="popup__submit-button popup__button popup__erase-button"
                >
                  Sim
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <section className="popup popup_changepic" id="pic">
        <div className="popup__container" id="change-pic">
          <button
            type="button"
            className="popup__close-button popup__close-add"
          >
            <img
              src={require("../styles/images/Close__Icon.png")}
              alt="Botão
              de fechar"
            />
          </button>
          <div className="popup__form-container">
            <h3 className="popup__title popup__title_erase">
              Alterar a foto de perfil
            </h3>
            <form className="popup__form" name="change" id="change" noValidate>
              <fieldset className="popup__formset">
                <label>
                  <input
                    type="url"
                    name="image"
                    id="pic-input"
                    className="popup__input popup__input_type_picture"
                    placeholder="Link de imagem"
                    required
                  />
                  <span className="pic-input-error" />
                </label>
                <button
                  type="submit"
                  className="popup__submit-button popup__button"
                >
                  Salvar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
