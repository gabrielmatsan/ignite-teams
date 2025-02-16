import styled, {css} from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Form = styled.View`
  width: 90%; /* Faz com que o Form ocupe 90% da largura, deixando espaço nas laterais */
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: 16px auto; /* Aplica espaçamento uniforme nas laterais */
`;


export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Distribui os elementos corretamente */
  margin: 10px 0 12px;
  padding: 0 40px;
`;


export const NumberOfPlayers = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SMALL};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
