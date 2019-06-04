import styled from "styled-components";
import theme from "../../../../components/layout/theme";

const Image = styled.img`
  width: 400px;
  height: 100%;

  @media (max-width: ${theme.viewports.tablet}) {
    width: 100%;
  }
`;

export default Image;
