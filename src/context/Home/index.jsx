import { createContext } from "react";

export const HomeContext = createContext({
  users: [],
  transactions: [],
  pointTable: [],
  activeUser: null
})