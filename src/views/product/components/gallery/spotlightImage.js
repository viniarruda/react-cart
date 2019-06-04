import styled from "styled-components";
import theme from "../../../../components/layout/theme";

const SpotlightImage = styled.div`
  flex: 1;
  max-width: 75%;
  height: 100%;

  @media (max-width: ${theme.viewports.tablet}) {
    max-width: 100%;
  }
`;

export default SpotlightImage;
