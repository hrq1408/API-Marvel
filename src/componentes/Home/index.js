import './Home.css';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../Services/api';
import ButtonMore from '../ButtonMore';
import buttonFavorite from '../../assets/icones/heart/Path.svg';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState({});

  useEffect(() => {
    callCharacter();
  }, []);

  useEffect(() => {
    api
      .get(`/characters?nameStartsWith=${search}`)
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      callCharacter();
    } else {
      setSearch(e.target.value);
    }
  };

  const carregarMais = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get(`characters`, {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

  function handleSearch() {
    const dados = characters;
    const pesquisas = JSON.stringify(dados.map((character) => character.name));

    localStorage.setItem('dados', pesquisas);
  }
  function callCharacter() {
    api
      .get(`/characters`)
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
    return api;
  }

  function botao() {
    return <ButtonMore onClick={carregarMais} />;
  }

  return (
    <>
      <div className="container-personagens">
        <div className="titulo">
          <h1>EXPLORE O UNIVERSO</h1>
          <h3 className="subtitulo">
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve
          </h3>
          <input
            className="search"
            key="search"
            type="search"
            placeholder="Busque aqui o nome do personagem"
            value={searchInput}
            onChange={handleSearchInputChange}
            onClick={handleSearch}
          />
        </div>
        <div className="card-list">
          {characters.map((character) => {
            const urlImg =
              character.thumbnail.path + '.' + character.thumbnail.extension;
            const back = { backgroundImage: `url(${urlImg})` };
            return (
              <div key={character.id}>
                <div className="card">
                  <div className="img" style={back} />
                  <div className="action">
                    <h2>{character.name}</h2>
                    <img src={buttonFavorite} alt="favorite" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {botao()}
      </div>
    </>
  );
};

export default Home;
