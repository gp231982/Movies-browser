import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

export const SpinnerIcon = styled(Spinner)`
  margin-top: 120px;
  animation: ${rotate} 1s linear infinite;
  height: auto;
`;
