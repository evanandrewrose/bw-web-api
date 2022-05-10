import { z } from "zod";

export const LeaderboardEntityResponseSchema = z.object({
  columns: z.tuple([
    z.literal("rank"),
    z.literal("last_rank"),
    z.literal("gateway_id"),
    z.literal("points"),
    z.literal("wins"),
    z.literal("losses"),
    z.literal("disconnects"),
    z.literal("toon"),
    z.literal("battletag"),
    z.literal("avatar"),
    z.literal("feature_stat"),
    z.literal("rating"),
    z.literal("bucket"),
  ]),
  rows: z.array(
    z.tuple([
      z.number().int(),
      z.number().int(),
      z.number().int(),
      z.number().int(),
      z.number().int(),
      z.number().int(),
      z.number().int(),
      z.string(),
      z.string(),
      z.string(),
      z.string(),
      z.number().int(),
      z.number().int(),
    ])
  ),
});

export type LeaderboardEntityResponse = z.infer<
  typeof LeaderboardEntityResponseSchema
>;
