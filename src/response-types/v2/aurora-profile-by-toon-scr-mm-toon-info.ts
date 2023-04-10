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
  toons: true,
};

export const AuroraProfileByToonScrMmToonInfoResponsePlayerFoundSchema =
  AuroraProfileByToonSupersetResponseSchema.pick(subset);

export const AuroraProfileByToonScrMmToonInfoResponsePlayerNotFoundSchema =
  AuroraProfileByToonSupersetNoResultResponseSchema.pick(subset);

export const AuroraProfileByToonScrMmToonInfoResponseSchema = z.union([
  AuroraProfileByToonScrMmToonInfoResponsePlayerFoundSchema,
  AuroraProfileByToonScrMmToonInfoResponsePlayerNotFoundSchema,
]);

export type AuroraProfileByToonScrMmToonInfoResponsePlayerFound = z.infer<
  typeof AuroraProfileByToonScrMmToonInfoResponsePlayerFoundSchema
>;

export type AuroraProfileByToonScrMmToonInfoResponsePlayerNotFound = z.infer<
  typeof AuroraProfileByToonScrMmToonInfoResponsePlayerNotFoundSchema
>;

export type AuroraProfileByToonScrMmToonInfoResponse = z.infer<
  typeof AuroraProfileByToonScrMmToonInfoResponseSchema
>;
