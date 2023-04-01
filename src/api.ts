import { z } from "zod";

import {
  AuroraProfileByToonResponse,
  AuroraProfileByToonResponseSchema,
} from "@/response-types/v1/aurora-profile-by-toon";
import {
  ClassicFilesGlobalMaps1v1Response,
  ClassicFilesGlobalMaps1v1ResponseSchema,
} from "@/response-types/v1/classic-files-global-maps-1v1";
import {
  GatewayResponse,
  GatewayResponseSchema,
} from "@/response-types/v1/gateway";
import {
  LeaderboardResponse,
  LeaderboardResponseSchema,
} from "@/response-types/v1/leaderboard";
import {
  LeaderboardEntityResponse,
  LeaderboardEntityResponseSchema,
} from "@/response-types/v1/leaderboard-entity";
import {
  LeaderboardNameSearchResponse,
  LeaderboardNameSearchResponseSchema,
} from "@/response-types/v1/leaderboard-name-search";
import {
  LeaderboardRankByToonResponse,
  LeaderboardRankByToonResponseSchema,
} from "@/response-types/v1/leaderboard-rank-by-toon";
import {
  MapStatsByToonResponse,
  MapStatsByToonResponseSchema,
} from "@/response-types/v1/map-stats-by-toon";
import {
  MatchMakerGameInfoByToonResponse,
  MatchMakerGameInfoByToonResponseSchema,
} from "@/response-types/v1/matchmaker-gameinfo-by-toon";
import {
  MatchMakerGameInfoPlayerInfoResponse,
  MatchMakerGameInfoPlayerInfoResponseSchema,
} from "@/response-types/v1/matchmaker-gameinfo-playerinfo";
import {
  AuroraProfileByToonScrMmGameLoadingResponse,
  AuroraProfileByToonScrMmGameLoadingResponseSchema,
} from "@/response-types/v2/aurora-profile-by-toon-scr-mm-game-loading";
import {
  AuroraProfileByToonScrMmToonInfoResponse,
  AuroraProfileByToonScrMmToonInfoResponseSchema,
} from "@/response-types/v2/aurora-profile-by-toon-scr-mm-toon-info";
import {
  AuroraProfileByToonScrProfileResponse,
  AuroraProfileByToonScrProfileResponseSchema,
} from "@/response-types/v2/aurora-profile-by-toon-scr-profile";
import {
  AuroraProfileByToonScrToonInfoResponse,
  AuroraProfileByToonScrToonInfoResponseSchema,
} from "@/response-types/v2/aurora-profile-by-toon-scr-toon-info";
import { InvalidInputError } from "./errors";

export type AuroraProfileByToonV2FieldMask =
  | "scr_mmgameloading"
  | "scr_mmtooninfo"
  | "scr_tooninfo"
  | "scr_profile";

export class SCApi {
  constructor(private server: string) {}

  private apiRoot = () => `${this.server}/web-api`;

  private schemaFetch = async <T extends z.Schema>(
    schema: T,
    path: string
  ): Promise<z.infer<T>> => {
    const fetchResult = await fetch(`${this.apiRoot()}/${path}`);
    return schema.parse(await fetchResult.json());
  };

  // @deprecated as of 2023-03-20, no useful data is returned from here
  auroraProfileByToon = async (
    toon: string,
    gateway: number
  ): Promise<AuroraProfileByToonResponse> =>
    await this.schemaFetch(
      AuroraProfileByToonResponseSchema,
      `v1/aurora-profile-by-toon/${toon}/${gateway}`
    );

  classicFilesGlobalMaps1v1 =
    async (): Promise<ClassicFilesGlobalMaps1v1Response> =>
      await this.schemaFetch(
        ClassicFilesGlobalMaps1v1ResponseSchema,
        `v1/file-set/classic.files.global.maps-1v1`
      );

  gateway = async (): Promise<GatewayResponse> =>
    await this.schemaFetch(GatewayResponseSchema, `v1/gateway`);

  leaderboardEntity = async (
    ladder: number,
    offset = 0,
    length = 100
  ): Promise<LeaderboardEntityResponse> => {
    if (offset < 0) throw new InvalidInputError("offset must be >= 0");
    if (length > 100) throw new InvalidInputError("length must be <= 100");

    return await this.schemaFetch(
      LeaderboardEntityResponseSchema,
      `v1/leaderboard/${ladder}?offset=${offset}&length=${length}`
    );
  };

  leaderboardNameSearch = async (
    toon: string
  ): Promise<LeaderboardNameSearchResponse> =>
    await this.schemaFetch(
      LeaderboardNameSearchResponseSchema,
      `v1/leaderboard-name-search/${toon}`
    );

  leaderboardRankByToon = async (
    ladder: number,
    toon: string,
    gateway: number
  ): Promise<LeaderboardRankByToonResponse> =>
    await this.schemaFetch(
      LeaderboardRankByToonResponseSchema,
      `v1/leaderboard-rank-by-toon/${ladder}/${toon}/${gateway}`
    );

  leaderboard = async (): Promise<LeaderboardResponse> =>
    await this.schemaFetch(LeaderboardResponseSchema, `v1/leaderboard`);

  mapStatsByToon = async (
    toon: string,
    gateway: number
  ): Promise<MapStatsByToonResponse> =>
    await this.schemaFetch(
      MapStatsByToonResponseSchema,
      `v1/map-stats-by-toon/${toon}/${gateway}`
    );

  matchMakerGameInfoByToon = async (
    toon: string,
    gateway: number,
    gameMode: number,
    season: number,
    offset = 0,
    limit = 15
  ): Promise<MatchMakerGameInfoByToonResponse> =>
    await this.schemaFetch(
      MatchMakerGameInfoByToonResponseSchema,
      `v1/matchmaker-gameinfo-by-toon/${toon}/${gateway}/${gameMode}/${season}?offset=${offset}&limit=${limit}`
    );

  matchMakerGameInfoPlayerInfo = async (
    matchId: string
  ): Promise<MatchMakerGameInfoPlayerInfoResponse> =>
    await this.schemaFetch(
      MatchMakerGameInfoPlayerInfoResponseSchema,
      `v1/matchmaker-gameinfo-playerinfo/${matchId}`
    );

  auroraProfileByToonv2 = async (
    toon: string,
    gateway: number,
    mask: AuroraProfileByToonV2FieldMask
  ): Promise<
    | AuroraProfileByToonScrMmGameLoadingResponse
    | AuroraProfileByToonScrMmToonInfoResponse
    | AuroraProfileByToonScrProfileResponse
    | AuroraProfileByToonScrToonInfoResponse
  > => {
    switch (mask) {
      case "scr_mmgameloading":
        return await this.schemaFetch(
          AuroraProfileByToonScrMmGameLoadingResponseSchema,
          `v2/aurora-profile-by-toon/${toon}/${gateway}?request_flags=${mask}`
        );
      case "scr_mmtooninfo":
        return await this.schemaFetch(
          AuroraProfileByToonScrMmToonInfoResponseSchema,
          `v2/aurora-profile-by-toon/${toon}/${gateway}?request_flags=${mask}`
        );
      case "scr_profile":
        return await this.schemaFetch(
          AuroraProfileByToonScrProfileResponseSchema,
          `v2/aurora-profile-by-toon/${toon}/${gateway}?request_flags=${mask}`
        );
      case "scr_tooninfo":
        return await this.schemaFetch(
          AuroraProfileByToonScrToonInfoResponseSchema,
          `v2/aurora-profile-by-toon/${toon}/${gateway}?request_flags=${mask}`
        );
    }
  };
}
