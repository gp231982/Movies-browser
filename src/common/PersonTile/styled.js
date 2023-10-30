import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.white};
  padding: 16px;
  margin: auto;
  align-items: baseline;
  -webkit-box-align: baseline;
  min-height: 340px;
  max-width: 208px;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 194.56/291.83;
`;

export const PersonName = styled.p`
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin: 0px;
`;

export const CharacterName = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0px;
`;

export const Job = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0px;
`;
