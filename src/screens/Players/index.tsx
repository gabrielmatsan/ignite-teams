import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Headers } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getPlayerByGroupAndTeam } from "@storage/players/getPlayerByGroupAndTeam";
import { playersAddByGroup } from "@storage/players/playersAddByGroup";
import { AppError } from "@utils/AppError";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList } from "react-native";

import type { TextInput  } from "react-native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import type { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { removePlayerByGroup } from "@storage/players/removePlayerByGroup";
import { groupRemoveByName } from "@storage/group/removeGroupByName";
import { Loading } from "@components/Loading";

type RouteParams = {
  group: string;
}

export function Players() {

  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0){
      return Alert.alert('Nome da pessoa','Nome do jogador está vazio, preencha o campo')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {

      await playersAddByGroup(group,newPlayer)
      newPlayerNameRef.current?.blur()

      setNewPlayerName("")
      fetchPlayersByTeam()

    } catch (error) {

      if (error instanceof AppError){
        Alert.alert(error.message)

      } else {

        Alert.alert('Erro ao adicionar jogador')
        console.log(error)
      }
    }
  }

  async function fetchPlayersByTeam(){
    try {
      setIsLoading(true)

      const playersByTeam = await getPlayerByGroupAndTeam(group, team);

      setPlayers(playersByTeam)

    } catch (error) {

      if (error instanceof AppError){
        Alert.alert(error.message)
      } else {
        Alert.alert('Erro ao buscar jogadores')
        console.log(error)
      }

    } finally {
      setIsLoading(false)
    }
  }

  async function handleRemovePlayer(playerName: string){
    try {
      console.log(`Removendo jogador: ${playerName}`);
      await removePlayerByGroup(playerName, group)
      fetchPlayersByTeam()
      
    } catch (error) {
      console.log(error)
      Alert.alert('Remover pessoa','Erro ao remover jogador')
    }
  }

  async function groupRemove(){
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
    }catch (error) {
      console.log(error)
      Alert.alert('Remover grupo','Erro ao remover grupo')
    }
  }

  async function handleRemoveGroup(){
    Alert.alert('Remover grupo','Deseja realmente remover a turma?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => groupRemove() }
    ])
  }

  
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
    fetchPlayersByTeam()
  },[team])

  return (
    <Container>
      <Headers showBackButton />

      <Highlights
       title={group} subTitle="Adicione a galera e separe os times"
       />

      <Form>
        <Input
          inputRef={newPlayerNameRef}
          placeholder="Digite o nome do jogador"
          onChangeText={setNewPlayerName}
          autoCorrect={false}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon
        icon="add"
        onPress={handleAddPlayer}
        />
      </Form>

      

      <HeaderList>
        <FlatList
          data = {["Time A", "Time B"]}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Filter
             title={item}
             isActive={item === team}
             onPress={() => setTeam(item)}
             />
          )}
          horizontal
          contentContainerStyle=
          {
            {
              justifyContent: "center",
              flexGrow: 1 
            } 
          }
          showsHorizontalScrollIndicator={false}
        />
      <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>


      {isLoading ?<Loading/> :
      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não existem jogadores nesse time"/>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 80 },
          players.length === 0 && {  flex:1  }
        ]}
      />
      }
      <Button title="Remover turma" type="SECONDARY" onPress={handleRemoveGroup}/>

    </Container>
  )
}