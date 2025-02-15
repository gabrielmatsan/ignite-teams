// src/screens/Groups/index.tsx
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`;