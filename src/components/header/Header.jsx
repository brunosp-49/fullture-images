import { MainContainer } from "./HeaderStyle";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useGlobal, useInput } from "../../assets/global/context/globalState";
import { getImages } from "../../assets/api/req";

export const Header = () => {
  const { states, setters } = useGlobal();
  const { input } = states;
  const { setInput } = setters;
  const { images } = states;
  const { setImages } = setters;
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
    getImages(setImages, input);
  };

  return (
    <MainContainer onSubmit={onSearch}>
      <Link to={"/"}>
        <img src={logo} alt="logo" id="logo" />
      </Link>
      <input
        type="text"
        placeholder="Procurar imagens"
        required
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button>Buscar</button>
    </MainContainer>
  );
};
