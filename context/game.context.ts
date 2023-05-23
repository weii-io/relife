import React from "react";
import { IGameContext } from "./interface";
export const GameContext = React.createContext<IGameContext | null>(null);
