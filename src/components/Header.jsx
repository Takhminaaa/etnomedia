import { MyButton } from "./uiButton/MyButton";
import styled from "styled-components";

function Header({ openAndCloseModalHandler, handleVariantStyles }) {
  return (
    <Container>
      <Logo src="https://shorturl.at/TjVav" alt="logo" />
      <Navigator>
        <a href="#">Фильмы</a>
        <a href="#">Сериалы</a>
        <a href="#">Мультфильмы</a>
        <a href="#">Windows</a>
        <a href="#">Календарь</a>
      </Navigator>
      <div>
        <MyButton variant="contained" onClick={handleVariantStyles}>
          Смотреть 30 дней за 1с
        </MyButton>
      </div>
      <div>
        <MyButton variant="warning" onClick={openAndCloseModalHandler}>
          Добавить
        </MyButton>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const Logo = styled.img`
  width: 130px;
`;
const Navigator = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: white;
    font-weight: 900;
  }
`;
