import './Home.css';
import React, { useEffect, useState } from 'react';
import api from '../Services/api';

import CharacterCard from '../CharacterCard';
import SearchBar from '../SearchBar'; // Supondo que você tenha um componente SearchBar

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState({});

  useEffect(() => {
    carregarPersonagens();
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
      carregarPersonagens();
    } else {
      setSearch(e.target.value);
    }
  };

  const handleSearch = () => {
    const dados = characters;
    const pesquisas = JSON.stringify(
      dados.map((personagem) => personagem.name),
    );

    localStorage.setItem('dados', pesquisas);
  };

  const carregarPersonagens = () => {
    api
      .get(`/characters`)
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  const inverterCards = () => {
    console.log(characters);
    const invertido = [...characters].reverse();
    setCharacters(invertido);
    console.log(invertido);
  };

  return (
    <>
      <div className="container-personagens">
        <div className="titulo">
          <h1>EXPLORE O UNIVERSO</h1>
          <h3 className="subtitulo">
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve
          </h3>
          <SearchBar
            value={searchInput}
            onChange={handleSearchInputChange}
            onClick={handleSearch}
          />
        </div>
        <div className="actions-bar">
          <h3 className="subtitulo">Encontrados {characters.length} heróis</h3>

          <h3 className="textorange">
            Ordenar por nome - A/Z
            <input
              className="switch"
              key="checkbox"
              type="checkbox"
              onClick={inverterCards}
            />
          </h3>

          <h3 className="textorange">Somente Favorito</h3>
        </div>
        <div className="card-list">
          {characters.map((personagem) => (
            <CharacterCard key={personagem.id} personagem={personagem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
