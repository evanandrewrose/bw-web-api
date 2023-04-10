import { z } from "zod";

import { BroodWarApiPath, BroodWarConnection } from "@/bw-connection";
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
import { InvalidInputError } from "../errors";

export type AuroraProfileByToonV2FieldMask =
  | "scr_mmgameloading"
  | "scr_mmtooninfo"
  | "scr_tooninfo"
  | "scr_profile";

export interface ISCApi {
  auroraProfileByToon: (
    toon: string,
    gateway: number
  ) => Promise<AuroraProfileByToonResponse>;
  classicFilesGlobalMaps1v1: () => Promise<ClassicFilesGlobalMaps1v1Response>;
  gateway: () => Promise<GatewayResponse>;
  leaderboard: () => Promise<LeaderboardResponse>;
  leaderboardEntity: (
    leaderboardId: number,
    offset: number,
    length: number
  ) => Promise<LeaderboardEntityResponse>;
  leaderboardNameSearch: (
    toon: string
  ) => Promise<LeaderboardNameSearchResponse>;
  leaderboardRankByToon: (
    ladder: number,
    toon: string,
    gateway: number
  ) => Promise<LeaderboardRankByToonResponse>;
  mapStatsByToon: (
    toon: string,
    gateway: number
  ) => Promise<MapStatsByToonResponse>;
  matchMakerGameInfoByToon: (
    toon: string,
    gateway: number,
    gameMode: number,
    season: number,
    offset: number,
    limit: number
  ) => Promise<MatchMakerGameInfoByToonResponse>;
  matchMakerGameInfoPlayerInfo: (
    matchId: string
  ) => Promise<MatchMakerGameInfoPlayerInfoResponse>;
  auroraProfileByToonV2: (
    toon: string,
    gateway: number,
    mask: AuroraProfileByToonV2FieldMask
  ) => Promise<
    | AuroraProfileByToonScrMmGameLoadingResponse
    | AuroraProfileByToonScrMmToonInfoResponse
    | AuroraProfileByToonScrToonInfoResponse
    | AuroraProfileByToonScrProfileResponse
  >;
}

export class SCApi implements ISCApi {
  constructor(private bwConnection: BroodWarConnection) {}

  private schemaFetch = async <T extends z.Schema>(
    schema: T,
    path: BroodWarApiPath
  ): Promise<z.infer<T>> => {
    const fetchResult = await this.bwConnection.fetch(path);

    try {
      const json = await fetchResult.json();
      return schema.parse(json);
    } catch (e) {
      console.error(`SCApi.schemaFetch error for path ${path}`);
      throw e;
    }
  };

  // @deprecated as of 2023-03-20, no useful data is returned from here
  auroraProfileByToon = async (
    toon: string,
    gateway: number
  ): Promise<AuroraProfileByToonResponse> =>
    await this.schemaFetch(
      AuroraProfileByToonResponseSchema,
      `web-api/v1/aurora-profile-by-toon/${toon}/${gateway}`
    );

  classicFilesGlobalMaps1v1 =
    async (): Promise<ClassicFilesGlobalMaps1v1Response> =>
      await this.schemaFetch(
        ClassicFilesGlobalMaps1v1ResponseSchema,
        `web-api/v1/file-set/classic.files.global.maps-1v1`
      );

  gateway = async (): Promise<GatewayResponse> =>
    await this.schemaFetch(GatewayResponseSchema, `web-api/v1/gateway`);

  leaderboardEntity = async (
    leaderboardId: number,
    offset = 0,
    length = 100
  ): Promise<LeaderboardEntityResponse> => {
    if (offset < 0) throw new InvalidInputError("offset must be >= 0");
    if (length > 100) throw new InvalidInputError("length must be <= 100");

    return await this.schemaFetch(
      LeaderboardEntityResponseSchema,
      `web-api/v1/leaderboard/${leaderboardId}?offset=${offset}&length=${length}`
    );
  };

  leaderboardNameSearch = async (
    toon: string
  ): Promise<LeaderboardNameSearchResponse> =>
    await this.schemaFetch(
      LeaderboardNameSearchResponseSchema,
      `web-api/v1/leaderboard-name-search/${toon}`
    );

  leaderboardRankByToon = async (
    ladder: number,
    toon: string,
    gateway: number
  ): Promise<LeaderboardRankByToonResponse> =>
    await this.schemaFetch(
      LeaderboardRankByToonResponseSchema,
      `web-api/v1/leaderboard-rank-by-toon/${ladder}/${toon}/${gateway}`
    );

  leaderboard = async (): Promise<LeaderboardResponse> =>
    await this.schemaFetch(LeaderboardResponseSchema, `web-api/v1/leaderboard`);

  mapStatsByToon = async (
    toon: string,
    gateway: number
  ): Promise<MapStatsByToonResponse> =>
    await this.schemaFetch(
      MapStatsByToonResponseSchema,
      `web-api/v1/map-stats-by-toon/${toon}/${gateway}`
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
      `web-api/v1/matchmaker-gameinfo-by-toon/${toon}/${gateway}/${gameMode}/${season}?offset=${offset}&limit=${limit}`
    );

  matchMakerGameInfoPlayerInfo = async (
    matchId: string
  ): Promise<MatchMakerGameInfoPlayerInfoResponse> =>
    await this.schemaFetch(
      MatchMakerGameInfoPlayerInfoResponseSchema,
      `web-api/v1/matchmaker-gameinfo-playerinfo/${matchId}`
    );

  auroraProfileByToonV2 = async (
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
          `web-api/v2/aurora-profile-by-toon/${toon}/${gateway}?request_flags=${mask}`
        );
      case "scr_mmtooninfo":
        return await this.schemaFetch(
          AuroraProfileByToonScrMmToonInfoResponseSchema,
          `web-api/v2/aurora-profile-by-toon/${toon}/${gateway}?request_flags=${mask}`
        );
      case "scr_profile":
        return await this.schemaFetch(
          AuroraProfileByToonScrProfileResponseSchema,
          `web-api/v2/aurora-profile-by-toon/${toon}/${gateway}?request_flags=${mask}`
        );
      case "scr_tooninfo":
        return await this.schemaFetch(
          AuroraProfileByToonScrToonInfoResponseSchema,
          `web-api/v2/aurora-profile-by-toon/${toon}/${gateway}?request_flags=${mask}`
        );
    }
  };
}
