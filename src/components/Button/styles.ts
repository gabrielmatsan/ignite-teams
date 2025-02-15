import { TouchableOpacity } from 'react-native';
import styled, {css} from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps;
}


export const Container = styled(TouchableOpacity)<Props>`
  min-height: 56px;
  max-height: 56px;
  width: 90%; /* Margem: top 0px | left & right 25px | bottom 25px */

  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Title = styled.Text`
${({ theme}) => css`
  font-size: ${theme.FONT_SIZE.MEDIUM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
  `};
`;