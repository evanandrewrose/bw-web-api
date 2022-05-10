import { z } from "zod";

// This API is dead as of 2023-03-20, no useful data is returned.

export const AuroraProfileByToonResponseSchema = z.object({
  aurora_id: z.number(),
  avatars: z.record(z.string(), z.string()),
  avatars_framed: z.record(
    z.string(),
    z.object({
      level: z.number(),
      stat: z.string(),
      url: z.string(),
    })
  ),
  avatars_unlocked: z.record(
    z.string(),
    z.object({
      level: z.number(),
      stat: z.string(),
      url: z.string(),
    })
  ),
  game_results: z.array(z.unknown()).length(0),
  maps: z.array(z.unknown()).length(0),
  matchmaked_current_season: z.number(),
  matchmaked_current_season_buckets: z.array(z.number()),
  matchmaked_games: z.array(z.unknown()).length(0),
  matchmaked_stats: z.array(z.unknown()).length(0),
  profiles: z.array(z.unknown()).length(0),
  program_id: z.string(),
  replays: z.array(z.unknown()).length(0),
  stats: z.array(z.unknown()).length(0),
  toon_guid_by_gateway: z.object({}),
  toons: z.array(z.unknown()).length(0),
});

export type AuroraProfileByToonResponse = z.infer<
  typeof AuroraProfileByToonResponseSchema
>;
