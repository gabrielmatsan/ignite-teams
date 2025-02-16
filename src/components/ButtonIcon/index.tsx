import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
 type?: 'PRIMARY' | 'SECONDARY';
 icon: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ type = 'PRIMARY', icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type}/>
    </Container>
  )
}