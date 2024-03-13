import { Account } from "./Account";

export type Movie = {
  id: number;
  title: string;
  user: Account;
  like: number;
  dislike: number;
  description: string;
  link: string;
}