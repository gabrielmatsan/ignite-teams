import { Container } from "./styles"
import { TextInputProps, type TextInput } from "react-native"
import { useTheme } from "styled-components/native"


type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({inputRef,...rest}: Props) {
  const {COLORS} = useTheme()

  return (
    <Container
      ref={inputRef}
     {...rest}
      placeholderTextColor={COLORS.GRAY_300}
     />
  )
}