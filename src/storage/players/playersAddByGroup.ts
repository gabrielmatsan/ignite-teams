import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { getPlayersByGroup } from "./getPlayersByGroup";


export async function playersAddByGroup(group: string, newPlayer: PlayerStorageDTO) {

  try {

    const storagePlayers = await getPlayersByGroup(group);

    const playerAlreadyExists = storagePlayers.filter(player => player.name === newPlayer.name);

    if(playerAlreadyExists.length > 0){
      throw new AppError('Essa pessoa já foi adicionada');
    }

    const storage = JSON.stringify([...storagePlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

  } catch(error) {
    throw (error)
  }
}