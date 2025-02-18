import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Headers } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllGroups } from "@storage/group/getAllGroups";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";

import { Container, Title } from "./styles";

export function Groups() {

  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()


  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)

      const data = await getAllGroups();

      setGroups(data)

    }catch(error) {

      Alert.alert('Erro ao buscar turmas', 'Não foi possível buscar as turmas')
      throw error

    } finally {
      setIsLoading(false)
    }
  }

  function openGroup(group: string) {
    navigation.navigate('players', {group})
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>

      <Headers/>

      <Highlights title="Turmas" subTitle="jogue com sua turma"/>

      { isLoading ? <Loading/> :
      <FlatList
        data = {groups}
        keyExtractor={item => item}
        renderItem={({item}) => ( 
          <GroupCard 
            title={item}
            onPress={() => openGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && {
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          }
        }
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal adicionar a primeira turma?"/>
        )}
        showsVerticalScrollIndicator={false}
      />
      }
      <Button
       title="Criar nova turma"
       onPress={handleNewGroup}
       />

    </Container>
  )
}
