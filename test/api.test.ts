import { SCApi } from "@/api";
import { vi, describe, it } from "vitest";
import { readFile } from "fs/promises";

vi.stubGlobal("fetch", async (path: string) => ({
  json: async () => {
    const response = await readFile(`./test/data/${path}.json`, "utf8");

    return JSON.parse(response);
  },
}));

describe("SCApi", () => {
  const api = new SCApi("");

  it("can fetch and parse the v1 aurora profile by toon API response", async () => {
    await api.auroraProfileByToon("bob", 10);
  });

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
    await api.leaderboardNameSearch("bob");
  });

  it("can fetch and parse the leaderboard rank by toon API response", async () => {
    await api.leaderboardRankByToon(1, "bob", 10);
  });

  it("can fetch and parse the leaderboard API response", async () => {
    await api.leaderboard();
  });

  it("can fetch and parse the map stats by toon API response", async () => {
    await api.mapStatsByToon("bob", 10);
  });

  it("can fetch and parse the match maker game info by toon API response", async () => {
    await api.matchMakerGameInfoByToon("bob", 10, 1, 1);
  });

  it("can fetch and parse the match maker player info API response", async () => {
    await api.matchMakerGameInfoPlayerInfo("mm-test");
  });

  it("can fetch and parse the aurora profile by toon with scr_mmgameloading mask API response", async () => {
    await api.auroraProfileByToonv2("bob", 10, "scr_mmgameloading");
  });

  it("can fetch and parse the aurora profile by toon with scr_mmtooninfo mask API response", async () => {
    await api.auroraProfileByToonv2("bob", 10, "scr_mmtooninfo");
  });

  it("can fetch and parse the aurora profile by toon with scr_profile mask API response", async () => {
    await api.auroraProfileByToonv2("bob", 10, "scr_profile");
  });

  it("can fetch and parse the aurora profile by toon with scr_tooninfo mask API response", async () => {
    await api.auroraProfileByToonv2("bob", 10, "scr_tooninfo");
  });
});
