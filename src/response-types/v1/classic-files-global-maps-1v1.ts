import { z } from "zod";

export const ClassicFilesGlobalMaps1v1ResponseSchema = z.array(
  z.object({
    attribute: z.object({
      map_candidate: z.string(),
      map_description: z.string(),
      map_era: z.string(),
      map_height: z.string(),
      map_md5: z.string(),
      map_name: z.string(),
      map_path: z.string(),
      map_version: z.string(),
      map_width: z.string(),
      replay_humans: z.string(),
      replay_max_players: z.string(),
      replay_min_players: z.string(),
      replay_opponents: z.string(),
      season_id: z.string(),
    }),
    content_size: z.number(),
    content_type: z.string(),
    md5: z.string(),
    modified_epoch: z.number(),
    name: z.string(),
    url: z.string(),
  })
);

export type ClassicFilesGlobalMaps1v1Response = z.infer<
  typeof ClassicFilesGlobalMaps1v1ResponseSchema
>;
