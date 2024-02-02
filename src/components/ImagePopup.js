function ImagePopup() {
  return (
    <>
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
    </>
  );
}

export default ImagePopup;
