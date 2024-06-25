import { Region, SCApi } from "@/api";
import { BroodWarConnection } from "@/bw-connection";
import { readFile } from "fs/promises";
import { assert, describe, it, vi } from "vitest";

const encodeURIByParts = (parts: string) =>
  parts.split("/").map(encodeURIComponent).join("/");

vi.stubGlobal("fetch", async (path: string) => ({
  text: async () => {
    const response = await readFile(
      `./test/data/${encodeURIByParts(path)}.json`,
      "utf8"
    );

    return response;
  },
}));

describe("SCApi", () => {
  const api = new SCApi(new BroodWarConnection(""));

  it("can fetch and parse the classic files global maps 1v1 API response", async () => {
    await api.classicFilesGlobalMaps1v1();
  });

  it("can fetch and parse the gateway API response", async () => {
    await api.gateway();
  });

  it("can fetch and parse the leaderboard entity API response", async () => {
    await api.leaderboardEntity(1);
  });

  it("can fetch and parse the leaderboard name search API response", async () => {
    await api.leaderboardNameSearch(1, "bob");
  });

  it("can fetch and parse the leaderboard rank by toon API response", async () => {
    await api.leaderboardRankByToon(1, "bob", Region.USWest);
  });

  it("can fetch and parse the leaderboard API response", async () => {
    await api.leaderboard();
  });

  it("can fetch and parse the map stats by toon API response", async () => {
    const stats = await api.mapStatsByToon("bob", Region.USWest);
    assert(stats.map_stat);
  });

  it("can fetch and parse the match maker game info by toon API response", async () => {
    await api.matchMakerGameInfoByToon("bob", Region.USWest, 1, 1);
  });

  it("can fetch and parse the match maker player info API response", async () => {
    await api.matchMakerGameInfoPlayerInfo("mm-test");
  });

  it("can fetch and parse the aurora profile by toon with scr_mmgameloading mask API response", async () => {
    await api.auroraProfileByToon("bob", Region.USWest, "scr_mmgameloading");
  });

  it("can fetch and parse the aurora profile by toon with scr_mmtooninfo mask API response", async () => {
    await api.auroraProfileByToon("bob", Region.USWest, "scr_mmtooninfo");
  });

  it("can fetch and parse the aurora profile by toon with scr_profile mask API response", async () => {
    await api.auroraProfileByToon("bob", Region.USWest, "scr_profile");
  });

  it("can fetch and parse the aurora profile by toon with scr_tooninfo mask API response", async () => {
    await api.auroraProfileByToon("bob", Region.USWest, "scr_tooninfo");
  });
});
