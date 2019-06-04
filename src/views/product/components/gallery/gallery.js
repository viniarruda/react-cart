import styled from "styled-components";
import theme from "../../../../components/layout/theme";

const Gallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1;

  @media (max-width: ${theme.viewports.tablet}) {
    flex-flow: column-reverse;
  }
`;

export default Gallery;
