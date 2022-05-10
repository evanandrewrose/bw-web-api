import { z } from "zod";

export const MatchMakerGameInfoByToonResponseSchema = z.array(
  z.record(
    z.string(),
    z.object({
      match_created: z.string(),
      players: z.array(
        z.record(
          z.object({
            aurora_id: z.number(),
            avatar_url: z.string(),
            benefactor_id: z.string(),
            game_info: z.object({
              attributes: z.object({
                closed_slots: z.string(),
                flags: z.string(),
                game_speed: z.string(),
                host_name: z.string(),
                is_replay: z.string(),
                map_crc: z.string(),
                map_file_name: z.string(),
                map_file_size: z.string(),
                map_height: z.string(),
                map_md5: z.string(),
                map_name: z.string(),
                map_tile_set: z.string(),
                map_width: z.string(),
                net_turn_rate: z.string(),
                observers_current: z.string(),
                observers_max: z.string(),
                players_ai: z.string(),
                players_current: z.string(),
                players_max: z.string(),
                proxy: z.string(),
                rank: z.string(),
                save_game_id: z.string(),
              }),
              id: z.string(),
              name: z.string(),
            }),
            game_result: z.record(
              z.string(),
              z
                .object({
                  attributes: z.object({
                    gPlayerData_idx: z.string(),
                    left: z.string(),
                    race: z.string().optional(),
                    team: z.string().optional(),
                    type: z.string(),
                  }),
                  is_computer: z.boolean().optional(),
                  result: z.string(),
                })
                .optional()
            ),
            gateway_id: z.number(),
            info_attributes: z.object({
              map: z.string(),
              map_selection: z.string().optional(),
              player_battle_tag: z.string(),
              player_legacy_gateway_id: z.string(),
              player_legacy_toon_name: z.string(),
              player_region: z.string(),
              player_routing_via_proxy_server: z.string(),
              race: z.string().optional(),
            }),
            is_winner: z.string(),
            matching_attributes: z.object({
              net_version: z.string(),
            }),
            name: z.string(),
            score: z.object({
              base: z.number(),
              bucket_new: z.number(),
              bucket_old: z.number(),
              delta: z.number(),
              win_streak: z.number(),
            }),
          })
        )
      ),
    })
  )
);

export type MatchMakerGameInfoByToonResponse = z.infer<
  typeof MatchMakerGameInfoByToonResponseSchema
>;
