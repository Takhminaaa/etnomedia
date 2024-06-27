import { MyButton } from "./uiButton/MyButton";
import styled from "styled-components";

export function Main({ movie, deleteMovieHandler, openAndCloseModalHandler }) {
  return (
    <MainComponent>
      <h2>АКЫРКЫ ЧЫККАН ТАСМАЛАР</h2>
      <MoviesContainer>
        {movie.map((item) => (
          <MovieBlock key={item.movieId}>
            <img src={item.movieImage} alt="Чон кыз" />
            <WrapperInfo>
              <ContainerText>
                <h4>{item.movieTitle}</h4>
                <p>{item.movieStatus}</p>
              </ContainerText>
              <WrapperBtn>
                <MyButton
                  variant="warning"
                  onClick={() => deleteMovieHandler(item.movieId)}
                >
                  Удалить
                </MyButton>
                <MyButton
                  variant="danger"
                  onClick={() => openAndCloseModalHandler(item)}
                >
                  Изменить
                </MyButton>
              </WrapperBtn>
            </WrapperInfo>
          </MovieBlock>
        ))}
      </MoviesContainer>
    </MainComponent>
  );
}

export default Main;

const MainComponent = styled.main`
  padding: 30px;
`;
const MoviesContainer = styled.section`
  margin-top: 30px;
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
`;
const WrapperInfo = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const MovieBlock = styled.div`
  border: 1px solid white;
  padding: 10px 20px 6px 20px;
  border-radius: 10px;

  img {
    width: 250px;
  }

  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;
const ContainerText = styled.div`
  h4 {
    font-size: larger;
  }
  p {
    color: green;
    font-weight: 500;
  }
`;

const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
