function PopupWithForm(props) {
  return (
    <>
      <section className="popup  popup_type_${props.name}">
        <div className="popup__container">
          <button type="button" className="popup__close-button">
            <img
              src={require("../styles/images/Close__Icon.png")}
              alt="Botão
              de fechar"
            />
          </button>
          <div className="popup__form-container">
            <h3 className="popup__title">{props.title}</h3>
            <form className="popup__form" noValidate>
              <fieldset className="popup__formset">
                {props.children}
                <button
                  type="submit"
                  className="popup__submit-button popup__button"
                ></button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;
