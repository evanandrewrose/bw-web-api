# BW Web API

This package is a typed API wrapper for the undocumented Brood War Remastered API.

When logged in to Starcraft: Remastered, StarCraft.exe creates a local web server that exposes these endpoints. These endpoints are used when
exploring the ladder, viewing profiles, etc.

Below is a table of the known, supported endpoints and the corresponding methods exposed on the `SCApi` class.

| Endpoint                                                                      | API                                                         | Notes      |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------- |
| `/v1/aurora-profile-by-toon/{toon}/{gateway}`                                 | `auroraProfileByToon(toon, gateway)`                        | Deprecated |
| `/v1/file-set/classic.files.global.maps-1v1`                                  | `classicFilesGlobalMaps1v1()`                               |            |
| `/v1/gateway`                                                                 | `gateway()`                                                 |            |
| `/v1/leaderboard/{ladder}?offset={offset}&length={length}`                    | `leaderboardEntity(ladder, offset, length)`                 |            |
| `/v1/leaderboard-name-search/{toon}`                                          | `leaderboardNameSearch(toon)`                               |            |
| `/v1/leaderboard-rank-by-toon/{ladder}/{toon}/{gateway}`                      | `leaderboardRankByToon(ladder, toon, gateway)`              |            |
| `/v1/leaderboard`                                                             | `leaderboard()`                                             |            |
| `/v1/map-stats-by-toon/{toon}/{gateway}`                                      | `mapStatsByToon(toon, gateway)`                             |            |
| `/v1/matchmaker-gameinfo-playerinfo/{matchId}`                                | `matchMakerGameInfoPlayerInfo(matchId)`                     |            |
| `/v2/aurora-profile-by-toon/{toon}/{gateway}?request_flags=scr_mmgameloading` | `auroraProfileByToonv2(toon, gateway, 'scr_mmgameloading')` |            |
| `/v2/aurora-profile-by-toon/{toon}/{gateway}?request_flags=scr_mmtooninfo`    | `auroraProfileByToonv2(toon, gateway, 'scr_mmtooninfo')`    |            |
| `/v2/aurora-profile-by-toon/{toon}/{gateway}?request_flags=scr_profile`       | `auroraProfileByToonv2(toon, gateway, 'scr_profile')`       |            |
| `/v2/aurora-profile-by-toon/{toon}/{gateway}?request_flags=scr_tooninfo`      | `auroraProfileByToonv2(toon, gateway, 'scr_tooninfo')`      |            |