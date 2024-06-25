# BW Web API

This package serves as both a typed API wrapper and documentation for the otherwise undocumented Brood War Remastered API.

When logged in to Starcraft: Remastered, StarCraft.exe creates a local web server that exposes these endpoints. These endpoints are used when
exploring the ladder, viewing profiles, etc.

Below is a table of the known, supported endpoints and the corresponding methods exposed on the `SCApi` class.

| Endpoint                                                                      | `SCApi` method                                              | Notes                                        |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------- |
| `/v1/aurora-profile-by-toon/{toon}/{gateway}`                                 | `auroraProfileByToon(toon, gateway)`                        | Deprecated, useless now                      |
| `/v1/file-set/classic.files.global.maps-1v1`                                  | `classicFilesGlobalMaps1v1()`                               | List of ladder maps by season                |
| `/v1/gateway`                                                                 | `gateway()`                                                 | Gateways, ids, online player counts          |
| `/v1/leaderboard/{ladder}?offset={offset}&length={length}`                    | `leaderboardEntity(ladder, offset, length)`                 | Paginated player rankings                    |
| `/v1/leaderboard-name-search/{ladder}/{toon}`                                 | `leaderboardNameSearch(toon)`                               | Name search of ranked players                |
| `/v1/leaderboard-rank-by-toon/{ladder}/{toon}/{gateway}`                      | `leaderboardRankByToon(ladder, toon, gateway)`              | Ranked data for a given profile              |
| `/v1/leaderboard`                                                             | `leaderboard()`                                             | List of all leaderboards                     |
| `/v1/map-stats-by-toon/{toon}/{gateway}`                                      | `mapStatsByToon(toon, gateway)`                             | Win rate by map and season                   |
| `/v1/matchmaker-gameinfo-playerinfo/{matchId}`                                | `matchMakerGameInfoPlayerInfo(matchId)`                     | Ranked match info and link to replay         |
| `/v2/aurora-profile-by-toon/{toon}/{gateway}?request_flags=scr_mmgameloading` | `auroraProfileByToonv2(toon, gateway, 'scr_mmgameloading')` | Minimal acct info                            |
| `/v2/aurora-profile-by-toon/{toon}/{gateway}?request_flags=scr_mmtooninfo`    | `auroraProfileByToonv2(toon, gateway, 'scr_mmtooninfo')`    | Minimal acct info + recent game played count |
| `/v2/aurora-profile-by-toon/{toon}/{gateway}?request_flags=scr_profile`       | `auroraProfileByToonv2(toon, gateway, 'scr_profile')`       | Full acct info                               |
| `/v2/aurora-profile-by-toon/{toon}/{gateway}?request_flags=scr_tooninfo`      | `auroraProfileByToonv2(toon, gateway, 'scr_tooninfo')`      | Full acct info minus game history            |

# Installation

`npm i --save bw-web-api`

# Usage

```
import { SCApi, BroodWarConnection } from 'bw-web-api';

const sc = new SCApi(new BroodWarConnection(`localhost:50250`));

const profile = sc.auroraProfileByToon('By.SnOw1', 30);
```

# StarCraft Port

You can determine the port StarCraft opens for the web API via:

(as administrator)

```
(Get-NetTCPConnection -OwningProcess (Get-Process -Name StarCraft | Select-Object -ExpandProperty Id) | Where-Object {$_.State -eq "Listen"} | Sort-Object -Property LocalPort | Select-Object -First 1).LocalPort
```

# Notes

## Zod

I've done my best to represent the various response types as [Zod](https://github.com/colinhacks/zod) typings, which means that if the response doesn't match the expected shape,
the API will throw a `ZodError`. Conversely, if no error is thrown, you can be confident that the typings are correct.

Be sure to catch `ZodError`s when invoking `SCApi` methods, log them, and, if possible, contribute the shape deviation back to this library.

## Providing an alternative fetch, passing headers, etc.

The `BroodWarConnection` is just as pass-through to `fetch` (requires Node 18 or browser fetch, though you can probably inject `cross-fetch` pre-18). If you need to pass headers
or use a different fetch, provide your own `IBroodWarConnection` imlementation to `SCApi`.

# Testing

`test/data` contains the expected shapes for various response types. Unfortunately, the response shape is volatile, so more test data is definitely needed for full coverage. For now,
the tests just ensure that the Zod parsing is successful.
