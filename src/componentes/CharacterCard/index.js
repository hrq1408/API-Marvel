import React from 'react';
import botaoFavorito from '../../assets/icones/heart/Path Copy 2@1,5x.svg';
import './CharacterCard.css';

const CharacterCard = ({ personagem }) => {
  const urlImg =
    personagem.thumbnail.path + '.' + personagem.thumbnail.extension;
  const estiloDeFundo = { backgroundImage: `url(${urlImg})` };

  return (
    <div>
      <div className="card">
        <div className="img" style={estiloDeFundo} />
        <div className="action">
          <h2>{personagem.name}</h2>
          <img src={botaoFavorito} alt="favorito" />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
