import { z } from "zod";

export const MapStatsByToonResponseSchema = z.object({
  current_season: z.number(),
  map_stat: z.record(
    z.string().regex(/^\d+$/), // game mode
    z.record(
      z.string().regex(/^\d+$/), // season
      z.record(
        z.string(), // map md5
        z.object({
          Protoss: z.object({
            total_games: z.number(),
            total_global_games: z.number(),
            total_global_wins: z.number(),
            total_wins: z.number(),
          }),
          Random: z.object({
            total_games: z.number(),
            total_global_games: z.number(),
            total_global_wins: z.number(),
            total_wins: z.number(),
          }),
          Terran: z.object({
            total_games: z.number(),
            total_global_games: z.number(),
            total_global_wins: z.number(),
            total_wins: z.number(),
          }),
          Zerg: z.object({
            total_games: z.number(),
            total_global_games: z.number(),
            total_global_wins: z.number(),
            total_wins: z.number(),
          }),
        })
      )
    )
  ),
});

export type MapStatsByToonResponse = z.infer<
  typeof MapStatsByToonResponseSchema
>;
