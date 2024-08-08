import { z } from 'zod';

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

// export type CharacterT = {
//   id: number;
//   name: string;
//   status: CharacterStatus;
//   gender: CharacterGender;
//   image: string;
//   location: CharacterLocation;
//   isFavorite: boolean;
// };

export const charSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.enum(['Alive', 'Dead', 'unknown']),
  gender: z.enum(['Female', 'Male', 'Genderless', 'unknown']),
  image: z.string(),
  location: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

export type CharacterT = z.infer<typeof charSchema>;

export type ApiResponseT = {
  info: object;
  results: CharacterT[];
};

export const favSchema = z.object({
  characterId: z.number(),
});

export type FavoriteType = z.infer<typeof favSchema>;
