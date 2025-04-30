import styled from "styled-components";
import { Title } from "../../shared/ui";

export const Wrapper = styled.div`
  max-width: 900px;
  max-height: 600px;
  margin: auto;
  background: ${({ theme }) => theme.dark.colors.blockBackground};
`;

export const DatesWrapper = styled.div`
  display: flex;
  max-width: 980px;
`;

export const DatesTitle = styled(Title)`
  color: ${({ theme }) => theme.dark.colors.blockTitle};
  margin-left: ${({ theme }) => theme.sizes.x8};
`;
