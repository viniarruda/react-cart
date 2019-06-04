import styled from "styled-components";
import theme from "../../../components/layout/theme";

const ContentProduct = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;

  @media (max-width: ${theme.viewports.tablet}) {
    flex-flow: column;
  }
`;

export default ContentProduct;
