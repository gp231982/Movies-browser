import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #fff;
  width: 208px;
  height: 339px;
  outline: 1px solid grey;
`;

export const Img = styled.img`
  width: 175.99px;
  height: 231px;
  border-radius: 5px;
`;

export const PersonName = styled.p`
  width: 176px;
  color: var(--Black, #18181b);
  text-align: center;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 28.6px */
  height: 29px;
  margin: 0px;
`;

export const CharacterName = styled.p`
  color: var(--Darker-grey, #7e839a);
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  height: 29px;
  margin: 0px;
`;
