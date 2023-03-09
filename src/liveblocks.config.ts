import { createClient } from "@liveblocks/client";
import {createRoomContext} from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.REACT_APP_API_KEY as string,
});

export const { RoomProvider, useRoom } = createRoomContext(client);