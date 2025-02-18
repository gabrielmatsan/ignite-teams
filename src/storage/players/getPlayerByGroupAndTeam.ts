import { getPlayersByGroup } from "./getPlayersByGroup";


export async function getPlayerByGroupAndTeam(group: string, team: string){

  try {

    // Get all players from the group
    const storage = await getPlayersByGroup(group);

    // Filter players by team
    const players = storage.filter(player => player.team === team);

    // Return players
    return players
    
  } catch (error) {

    throw error
    
  }
}