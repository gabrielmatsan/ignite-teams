import { Highlights } from "@components/Highlights";
import { Container, Title } from "./styles";
import { Headers } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {

  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>

      <Headers/>

      <Highlights title="Turmas" subTitle="jogue com sua turma"/>

      <FlatList
        data = {groups}
        keyExtractor={item => item}
        renderItem={({item}) => ( 
          <GroupCard 
            title={item}
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
      />

      <Button title="Criar nova turma"/>

    </Container>
  )
}
