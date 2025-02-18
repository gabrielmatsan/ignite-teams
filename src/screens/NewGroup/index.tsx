import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Headers } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./style";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";


export function NewGroup() {

  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNew(){
    try{
      
      if (group.trim().length === 0){
        throw new AppError('Nome da turma está vazio, preencha o campo')
      }

      await groupCreate(group)
    // {group: group} == {group}
      navigation.navigate('players',{ group })

    } catch(error){

      if (error instanceof AppError){
        Alert.alert(error.message)
      } else {
        Alert.alert('Erro ao criar a turma')
        console.log(error)
      }

    }
  }
  
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
          onChangeText={(text) => setGroup(text)}
        />

        <Button 
        title="Criar turma"
        style={{ marginTop: 20 }}
        onPress={handleNew}
        />

      </Content>

    </Container>
  )
}