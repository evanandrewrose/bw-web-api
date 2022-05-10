import { z } from "zod";

export const GatewayResponseSchema = z.record(
  z.string().regex(/^\d+$/),
  z.object({
    is_official: z.boolean(),
    name: z.string(),
    online_users: z.number(),
    region: z.string(),
  })
);

export type GatewayResponse = z.infer<typeof GatewayResponseSchema>;
