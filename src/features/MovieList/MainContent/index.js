import poster from "./poster.png";
import {
  Content,
  SectionTile,
  Wrapper,
  MovieWrapper,
  Picture,
  Tile,
  Date,
  TypesWrapper,
  Type,
  Rating,
  Information,
  Rate,
  Votes,
} from "./styled";
import { ReactComponent as RateIcon } from "./rate.svg";

export const MainContent = () => {
  return (
    <Content>
      <SectionTile>Popular movies</SectionTile>
      <Wrapper>
        <MovieWrapper>
          <Picture src={poster} />
          <Information>
            <Tile>Mulan</Tile>
            <Date>2020</Date>
          </Information>
          <TypesWrapper>
            <Type>Action</Type>
            <Type>Adventure</Type>
            <Type>Drama</Type>
          </TypesWrapper>
          <Rating>
            <RateIcon />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </MovieWrapper>
        <MovieWrapper>
          <Picture src={poster} />
          <Information>
            <Tile>Mulan</Tile>
            <Date>2020</Date>
          </Information>
          <TypesWrapper>
            <Type>Action</Type>
            <Type>Adventure</Type>
            <Type>Drama</Type>
          </TypesWrapper>
          <Rating>
            <RateIcon />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </MovieWrapper>
        <MovieWrapper>
          <Picture src={poster} />
          <Information>
            <Tile>Mulan</Tile>
            <Date>2020</Date>
          </Information>
          <TypesWrapper>
            <Type>Action</Type>
            <Type>Adventure</Type>
            <Type>Drama</Type>
          </TypesWrapper>
          <Rating>
            <RateIcon />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </MovieWrapper>
        <MovieWrapper>
          <Picture src={poster} />
          <Information>
            <Tile>Mulan</Tile>
            <Date>2020</Date>
          </Information>
          <TypesWrapper>
            <Type>Action</Type>
            <Type>Adventure</Type>
            <Type>Drama</Type>
          </TypesWrapper>
          <Rating>
            <RateIcon />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </MovieWrapper>
        <MovieWrapper>
          <Picture src={poster} />
          <Information>
            <Tile>Mulan</Tile>
            <Date>2020</Date>
          </Information>
          <TypesWrapper>
            <Type>Action</Type>
            <Type>Adventure</Type>
            <Type>Drama</Type>
          </TypesWrapper>
          <Rating>
            <RateIcon />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </MovieWrapper>
        <MovieWrapper>
          <Picture src={poster} />
          <Information>
            <Tile>Mulan</Tile>
            <Date>2020</Date>
          </Information>
          <TypesWrapper>
            <Type>Action</Type>
            <Type>Adventure</Type>
            <Type>Drama</Type>
          </TypesWrapper>
          <Rating>
            <RateIcon />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </MovieWrapper>
        <MovieWrapper>
          <Picture src={poster} />
          <Information>
            <Tile>Mulan</Tile>
            <Date>2020</Date>
          </Information>
          <TypesWrapper>
            <Type>Action</Type>
            <Type>Adventure</Type>
            <Type>Drama</Type>
          </TypesWrapper>
          <Rating>
            <RateIcon />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </MovieWrapper>
        <MovieWrapper>
          <Picture src={poster} />
          <Information>
            <Tile>Mulan</Tile>
            <Date>2020</Date>
          </Information>
          <TypesWrapper>
            <Type>Action</Type>
            <Type>Adventure</Type>
            <Type>Drama</Type>
          </TypesWrapper>
          <Rating>
            <RateIcon />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </MovieWrapper>
      </Wrapper>
    </Content>
  );
};
