import { Headers } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlights } from "@components/Highlights";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {

  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>([]);
  return (
    <Container>
      <Headers showBackButton />

      <Highlights
       title="Nome da turma" subTitle="Adicione a galera e separe os times"
       />

      <Form>
        <Input
          placeholder="Digite o nome do jogador"
          autoCorrect={false}
        />
        <ButtonIcon
        icon="add"
        />
      </Form>

      <HeaderList>
        <FlatList
          data = {["Time A", "Time B", "Time C", "Time D", "Time E"]}
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
        />
      <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard name={item} onRemove={() => {}} />
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

      <Button title="Remover Turma" type="SECONDARY"/>

    </Container>
  )
}