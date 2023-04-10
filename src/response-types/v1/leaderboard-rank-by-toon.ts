import { z } from "zod";

const ToonsSchema = z.array(
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
);

const NoResultResponseSchema = z.object({
  leaderboard_id: z.number(),
  matchmaked_current_season: z.number(),
  matchmaked_current_season_buckets: z.array(z.number()),
  toons: ToonsSchema.length(0),
});

export const LeaderboardRankByToonResponseSchema = z.union([
  z.object({
    aurora_id: z.number().optional(),
    gateway_id: z.number().optional(),
    leaderboard_id: z.number(),
    matchmaked_current_season: z.number(),
    matchmaked_current_season_buckets: z.array(z.number()),
    mingames: z.number().optional(),
    total_rows: z.number().optional(),
    toons: ToonsSchema,
  }),
  NoResultResponseSchema,
]);

export type LeaderboardRankByToonResponse = z.infer<
  typeof LeaderboardRankByToonResponseSchema
>;
