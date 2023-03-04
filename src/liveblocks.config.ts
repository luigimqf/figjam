import { createClient } from "@liveblocks/client";
import {createRoomContext} from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_dev_3xlwk_RPplJH6WMVIjeOBf7ArRo6Es4zJloVE5tLT8Q0nsNGmMC7rAwKVph_4-Dq",
});

export const { RoomProvider, useRoom } = createRoomContext(client);