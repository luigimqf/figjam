import { createClient } from "@liveblocks/client";
import {createRoomContext} from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.API_KEY as string,
});

export const { RoomProvider, useRoom } = createRoomContext(client);