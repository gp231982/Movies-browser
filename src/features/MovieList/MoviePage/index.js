import { BigPoster, MainInfo, Raiting, SmallerValue, Star, StyledMoviePage, Title, Value, Votes } from "./styled"

export const MoviePage = () => {
  return (
    <StyledMoviePage>
      <BigPoster>
        <img src />
        <MainInfo>
          <Title>
            { }
          </Title>
          <Raiting>
            <Star>
              <img src />
            </Star>
            <Value>
              { }
              <SmallerValue> /10</SmallerValue>
            </Value>
          </Raiting>
          <Votes>
            { }
          </Votes>
        </MainInfo>
      </BigPoster>
    </StyledMoviePage>
  )
}