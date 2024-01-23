import './ButtonMore.css';

const ButtonMore = ({ onClick }) => {
  return (
    <div className="botao-container">
      <button className="botao-mais" onClick={onClick}>
        Carregar mais
      </button>
    </div>
  );
};

export default ButtonMore;
