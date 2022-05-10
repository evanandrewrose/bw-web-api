import { z } from "zod";

export const MatchMakerGameInfoPlayerInfoResponseSchema = z.object({
  avatars: z.record(z.string(), z.string()),
  avatars_awards: z.record(z.string(), z.number()),
  avatars_locked: z.record(
    z.object({
      level: z.number(),
      stat: z.string(),
      url: z.string(),
    })
  ),
  avatars_stats: z.record(z.string(), z.record(z.string(), z.number())),
  maps: z.array(z.unknown()),
  matchmaked_season_buckets: z.record(z.string(), z.array(z.number())),
  player_stats: z.array(z.unknown()),
  players: z.record(
    z.string(),
    z.object({
      aurora_id: z.number(),
      benefactor_id: z.string(),
      game_info: z.object({
        attributes: z.object({
          closed_slots: z.string().optional(),
          flags: z.string().optional(),
          game_speed: z.string().optional(),
          host_name: z.string().optional(),
          is_replay: z.string().optional(),
          map_crc: z.string().optional(),
          map_file_name: z.string().optional(),
          map_file_size: z.string().optional(),
          map_height: z.string().optional(),
          map_md5: z.string().optional(),
          map_name: z.string().optional(),
          map_tile_set: z.string().optional(),
          map_width: z.string().optional(),
          net_turn_rate: z.string().optional(),
          observers_current: z.string().optional(),
          observers_max: z.string().optional(),
          players_ai: z.string().optional(),
          players_current: z.string().optional(),
          players_max: z.string().optional(),
          proxy: z.string().optional(),
          rank: z.string().optional(),
          save_game_id: z.string().optional(),
        }),
        id: z.string().optional(),
        name: z.string().optional(),
      }),
      game_result: z.record(
        z.string(),
        z.object({
          attributes: z.object({
            gPlayerData_idx: z.string(),
            left: z.string(),
            race: z.string().optional(),
            team: z.string().optional(),
            type: z.string(),
          }),
          is_computer: z.boolean().optional(),
          result: z.string().optional(),
        })
      ),
      gateway_id: z.number(),
      info_attributes: z.object({
        _default_region: z.string().optional(),
        connection_info: z.string().optional(),
        map: z.string().optional(),
        map_selection: z.string().optional(),
        player_battle_tag: z.string().optional(),
        player_legacy_gateway_id: z.string().optional(),
        player_legacy_toon_name: z.string().optional(),
        player_region: z.string(),
        player_routing_via_proxy_server: z.string(),
        race: z.string().optional(),
      }),
      matching_attributes: z.object({ net_version: z.string() }),
      name: z.string(),
      score: z.object({
        base: z.number().optional(),
        bucket_new: z.number().optional(),
        bucket_old: z.number().optional(),
        current_stat_bucket: z.number().optional(),
        current_stat_losses: z.number().optional(),
        current_stat_wins: z.number().optional(),
        delta: z.number().optional(),
        season_id: z.number().optional(),
        win_streak: z.number().optional(),
      }),
    })
  ),
  replays: z.array(
    z.object({
      attributes: z.object({
        game_creator: z.string().optional(),
        game_id: z.string().optional(),
        game_name: z.string().optional(),
        game_save_id: z.string().optional(),
        game_speed: z.string().optional(),
        game_sub_type: z.string().optional(),
        game_type: z.string().optional(),
        map_era: z.string().optional(),
        map_height: z.string().optional(),
        map_title: z.string().optional(),
        map_width: z.string().optional(),
        replay_description: z.string().optional(),
        replay_humans: z.string().optional(),
        replay_map_number: z.string().optional(),
        replay_max_players: z.string().optional(),
        replay_min_players: z.string().optional(),
        replay_opponents: z.string().optional(),
        replay_player_names: z.string().optional(),
        replay_player_races: z.string().optional(),
        replay_player_types: z.string().optional(),
        replay_result: z.string().optional(),
      }),
      create_time: z.number().optional(),
      link: z.string().optional(),
      md5: z.string().optional(),
      url: z.string().optional(),
    })
  ),
});

export type MatchMakerGameInfoPlayerInfoResponse = z.infer<
  typeof MatchMakerGameInfoPlayerInfoResponseSchema
>;
