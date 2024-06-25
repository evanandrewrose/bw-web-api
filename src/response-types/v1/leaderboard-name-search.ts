import { z } from "zod";

export const LeaderboardNameSearchResponseSchema = z
  .object({
    avatar: z.string(),
    battletag: z.string(),
    gateway_id: z.number(),
    last_rank: z.number(),
    name: z.string(),
    points: z.number(),
    rank: z.number(),
  })
  .array();

export type LeaderboardNameSearchResponse = z.infer<
  typeof LeaderboardNameSearchResponseSchema
>;
