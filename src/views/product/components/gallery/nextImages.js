import styled from "styled-components";
import theme from "../../../../components/layout/theme";

const NextImages = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  max-width: 25%;

  @media (max-width: ${theme.viewports.tablet}) {
    flex-flow: row wrap;
    max-width: 100%;
  }
`;

export default NextImages;
