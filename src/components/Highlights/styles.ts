import styled, {css} from "styled-components/native";


export const Container = styled.View`
  margin: 30px 0;
`

export const Title = styled.Text`
  text-align: center;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XLARGE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    `};

`

export const SubTitle = styled.Text`
  text-align: center;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`