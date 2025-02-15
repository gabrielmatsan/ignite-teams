import { Headers } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Highlights } from "@components/Highlights";
import { Button } from "@components/Button";
import { Input } from "@components/Input";


export function NewGroup() {
  return (
    <Container>
      <Headers showBackButton/>

      <Content>

        <Icon/>

        <Highlights
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
        />

        <Button 
        title="Criar turma"
        style={{ marginTop: 20 }}
        />

      </Content>

    </Container>
  )
}