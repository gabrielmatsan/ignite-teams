import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { getPlayersByGroup } from "./getPlayersByGroup";



export async function removePlayerByGroup(playerName: string, group: string) {

  try {
    const storage = await getPlayersByGroup(group);
    console.log('Jogadores:', storage);  // Verifique se os jogadores estão sendo listados corretamente

    const filteredPlayers = storage.filter((player) => player.name !== playerName);

    console.log('Jogadores por time:', filteredPlayers);  // Verifique se os jogadores estão sendo filtrados corretamente

    const playersStorage = JSON.stringify(filteredPlayers);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, playersStorage);

  } catch (error) {
    
    throw error 
  }
}