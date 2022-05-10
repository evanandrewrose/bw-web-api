import { z } from "zod";
import { AuroraProfileByToonSupersetResponseSchema } from "@/response-types/v2/aurora-profile-by-toon-superset";

export const AuroraProfileByToonScrProfileResponseSchema =
  AuroraProfileByToonSupersetResponseSchema.pick({
    account_flags: true,
    aurora_id: true,
    avatars: true,
    avatars_framed: true,
    avatars_unlocked: true,
    battle_tag: true,
    country_code: true,
    game_results: true,
    matchmaked_current_season: true,
    matchmaked_current_season_buckets: true,
    matchmaked_stats: true,
    profiles: true,
    program_id: true,
    replays: true,
    stats: true,
    toon_guid_by_gateway: true,
    toons: true,
  });

export type AuroraProfileByToonScrProfileResponse = z.infer<
  typeof AuroraProfileByToonScrProfileResponseSchema
>;
