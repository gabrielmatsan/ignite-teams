import { MaterialIcons } from '@expo/vector-icons';
import styled, {css} from "styled-components/native";


export const Container = styled.View`
  width: 90%; /* O PlayerCard não ocupará 100% da tela */
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  margin-left: auto; /* Centraliza o card */
  margin-right: auto;
  padding: 0 16px; /* Espaço interno para evitar que o conteúdo fique colado */
  justify-content: space-between;
`;


export const Name = styled.Text`
${({theme})=> css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MEDIUM};
  color: ${theme.COLORS.GRAY_200};
  `}
`

export const Icon = styled(MaterialIcons).attrs(({theme})=>({
  size:24,
  color: theme.COLORS.GRAY_200
}))`
  margin-right: 4px;
  margin-left: 16px;
`
