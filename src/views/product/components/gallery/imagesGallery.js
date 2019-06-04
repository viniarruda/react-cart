import styled from "styled-components";
import theme from "../../../../components/layout/theme";

const ImagesGallery = styled.img`
  width: auto;
  flex: 1;

  @media (max-width: ${theme.viewports.tablet}) {
    margin: 5px;
  }
`;

export default ImagesGallery;
