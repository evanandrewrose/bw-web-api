// Gateways have IDs revealed by the /web-api/v1/gateway endpoint response. However, the global gateway is not listed there.
// Probably because it's not a 'real' gateway and instead a meta-gateway that contains all the other gateways.
//
// But if you look at /web-api/v1/leaderboard, you'll see that the implicit global gateway ID is 0.
export const GlobalGatewayId = 0;
