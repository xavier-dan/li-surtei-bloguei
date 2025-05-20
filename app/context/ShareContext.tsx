import { createContext } from "react";
import { ShareContextType } from "../types/interfaces/interfaces";

export const ShareContext = createContext<ShareContextType | null>(null);