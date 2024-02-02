function Card({ cardData }) {
  const { link, name } = cardData;

  return (
    <>
      <li className="elements__cards">
        <div className="elements__figure-container">
          <button type="button" className="elements__trash">
            <img src={require("../styles/images/Trash.png")} alt="Lixo" />
          </button>
          <figure className="elements__figure">
            <img src={link} alt={name} className="elements__card-image" />
          </figure>
        </div>
        <div className="elements__content">
          <p className="elements__text block">{name}</p>
          <div className="elements__like">
            <button
              type="button"
              className="elements__like-button"
              name="like"
            ></button>
            <p className="elements__like-counter"></p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
