import { z } from "zod";

export const LeaderboardNameSearchResponseSchema = z.object({
  gamemodes: z.object({ 1: z.object({ name: z.string() }) }),
  gateways: z.record(
    z.string().regex(/^\d+$/),
    z.object({
      is_official: z.boolean(),
      name: z.string(),
      region: z.string(),
    })
  ),
  leaderboards: z.record(
    z.string().regex(/^\d+$/),
    z.object({
      benefactor_id: z.string(),
      gamemode_id: z.number(),
      gateway_id: z.number(),
      id: z.number(),
      last_update_time: z.string(),
      name: z.string(),
      next_update_time: z.string(),
      program_id: z.string(),
      season_id: z.number(),
      season_name: z.string(),
    })
  ),
  matchmaked_current_season: z.number(),
  team_leaderboard_info: z.object({}),
});

export type LeaderboardNameSearchResponse = z.infer<
  typeof LeaderboardNameSearchResponseSchema
>;
