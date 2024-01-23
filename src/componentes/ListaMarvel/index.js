import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarvelCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const publicKey = '67e4a399fb5dc04f90f035299bc4a07b';
        const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}`;

        const response = await axios.get(apiUrl);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Erro ao buscar personagens da Marvel:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Personagens da Marvel</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarvelCharacters;
