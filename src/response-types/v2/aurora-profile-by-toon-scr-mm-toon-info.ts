import { z } from "zod";
import { AuroraProfileByToonSupersetResponseSchema } from "@/response-types/v2/aurora-profile-by-toon-superset";

export const AuroraProfileByToonScrMmToonInfoResponseSchema =
  AuroraProfileByToonSupersetResponseSchema.pick({
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
  });

export type AuroraProfileByToonScrMmToonInfoResponse = z.infer<
  typeof AuroraProfileByToonScrMmToonInfoResponseSchema
>;
