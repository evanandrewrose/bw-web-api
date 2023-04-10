import {
  AuroraProfileByToonSupersetNoResultResponseSchema,
  AuroraProfileByToonSupersetResponseSchema,
} from "@/response-types/v2/aurora-profile-by-toon-superset";
import { z } from "zod";

const subset: Record<string, boolean> = {
  account_flags: true,
  aurora_id: true,
  avatars: true,
  avatars_framed: true,
  avatars_unlocked: true,
  battle_tag: true,
  country_code: true,
  matchmaked_current_season: true,
  matchmaked_current_season_buckets: true,
  matchmaked_stats: true,
  profiles: true,
  program_id: true,
  stats: true,
  toon_guid_by_gateway: true,
  toons: true,
};

export const AuroraProfileByToonScrToonInfoResponsePlayerFoundSchema =
  AuroraProfileByToonSupersetResponseSchema.pick(subset);

export const AuroraProfileByToonScrToonInfoResponsePlayerNotFoundSchema =
  AuroraProfileByToonSupersetNoResultResponseSchema.pick(subset);

export const AuroraProfileByToonScrToonInfoResponseSchema = z.union([
  AuroraProfileByToonScrToonInfoResponsePlayerFoundSchema,
  AuroraProfileByToonScrToonInfoResponsePlayerNotFoundSchema,
]);

export type AuroraProfileByToonScrToonInfoResponsePlayerFound = z.infer<
  typeof AuroraProfileByToonScrToonInfoResponsePlayerFoundSchema
>;

export type AuroraProfileByToonScrToonInfoResponsePlayerNotFound = z.infer<
  typeof AuroraProfileByToonScrToonInfoResponsePlayerNotFoundSchema
>;

export type AuroraProfileByToonScrToonInfoResponse = z.infer<
  typeof AuroraProfileByToonScrToonInfoResponseSchema
>;
