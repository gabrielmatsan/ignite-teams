import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
`


export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700, // Corrigido para acessar o tema dentro do .attrs
}))``;