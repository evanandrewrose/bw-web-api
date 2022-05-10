import { z } from "zod";

export const LeaderboardRankByToonResponseSchema = z.object({
  aurora_id: z.number().optional(),
  gateway_id: z.number().optional(),
  leaderboard_id: z.number(),
  matchmaked_current_season: z.number(),
  matchmaked_current_season_buckets: z.array(z.number()),
  mingames: z.number().optional(),
  toons: z.array(
    z.object({
      avatar: z.string(),
      battletag: z.string(),
      bucket: z.number(),
      disconnects: z.number(),
      feature_stat: z.string(),
      gateway_id: z.number(),
      last_rank: z.number(),
      losses: z.number(),
      name: z.string(),
      points: z.number(),
      rank: z.number(),
      wins: z.number(),
    })
  ),
  total_rows: z.number().optional(),
});

export type LeaderboardRankByToonResponse = z.infer<
  typeof LeaderboardRankByToonResponseSchema
>;
