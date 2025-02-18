import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { getAllGroups } from "./getAllGroups";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storagedGroup = await getAllGroups();

    const getOutGroup = storagedGroup.filter(group => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(getOutGroup));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);

  } catch (error) {
    console.error("Ocorreu um erro:", error);
    throw error;
  }
}