import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  id: z.number(),
});

export type LoginForm = {
  email: string;
  password: string;
};

export type BackendUserT = z.infer<typeof userSchema>;

export enum UserStatus {
  Pending = 'pending',
  Guest = 'guest',
  Logged = 'logged',
}

export type UserT =
  | { status: UserStatus.Pending }
  | { status: UserStatus.Guest }
  | ({ status: UserStatus.Logged } & BackendUserT);

export const authSchema = z.object({
  user: userSchema,
  accessToken: z.string(),
});

export type AuthSchemaT = z.infer<typeof authSchema>;

export type AuthState = {
  accessToken: string;
  user: UserT;
};
