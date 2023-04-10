import {
  AuroraProfileByToonSupersetNoResultResponseSchema,
  AuroraProfileByToonSupersetResponseSchema,
} from "@/response-types/v2/aurora-profile-by-toon-superset";
import { z } from "zod";

const subset: Record<string, boolean> = {
  account_flags: true,
  aurora_id: true,
  battle_tag: true,
  country_code: true,
  matchmaked_current_season: true,
  matchmaked_current_season_buckets: true,
  matchmaked_stats: true,
  program_id: true,
  toon_guid_by_gateway: true,
};

export const AuroraProfileByToonScrMmGameLoadingResponsePlayerFoundSchema =
  AuroraProfileByToonSupersetResponseSchema.pick(subset);

export const AuroraProfileByToonScrMmGameLoadingResponsePlayerNotFoundSchema =
  AuroraProfileByToonSupersetNoResultResponseSchema.pick(subset);

export const AuroraProfileByToonScrMmGameLoadingResponseSchema = z.union([
  AuroraProfileByToonScrMmGameLoadingResponsePlayerFoundSchema,
  AuroraProfileByToonScrMmGameLoadingResponsePlayerNotFoundSchema,
]);

export type AuroraProfileByToonScrMmGameLoadingResponsePlayerFound = z.infer<
  typeof AuroraProfileByToonScrMmGameLoadingResponsePlayerFoundSchema
>;

export type AuroraProfileByToonScrMmGameLoadingResponsePlayerNotFound = z.infer<
  typeof AuroraProfileByToonScrMmGameLoadingResponsePlayerNotFoundSchema
>;

export type AuroraProfileByToonScrMmGameLoadingResponse = z.infer<
  typeof AuroraProfileByToonScrMmGameLoadingResponseSchema
>;
