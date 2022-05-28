export interface Stats {
  totalPlayed: number;
  totalWon: number;
  triesByGames: Map<number, number>;
}
