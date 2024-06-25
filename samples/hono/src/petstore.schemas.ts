/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
export type CreatePetsBodyItem = {
  name: string;
  tag: string;
};

export type ListPetsParams = {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: string;
};

export interface Error {
  code: number;
  message: string;
}

export type Pets = Pet[];

export type CatType = (typeof CatType)[keyof typeof CatType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CatType = {
  cat: 'cat',
} as const;

export interface Cat {
  readonly petsRequested?: number;
  type: CatType;
}

export type DachshundBreed =
  (typeof DachshundBreed)[keyof typeof DachshundBreed];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DachshundBreed = {
  Dachshund: 'Dachshund',
} as const;

export interface Dachshund {
  breed: DachshundBreed;
  length: number;
}

export type LabradoodleBreed =
  (typeof LabradoodleBreed)[keyof typeof LabradoodleBreed];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LabradoodleBreed = {
  Labradoodle: 'Labradoodle',
} as const;

export interface Labradoodle {
  breed: LabradoodleBreed;
  cuteness: number;
}

export type DogType = (typeof DogType)[keyof typeof DogType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DogType = {
  dog: 'dog',
} as const;

export type Dog =
  | (Labradoodle & {
      barksPerMinute?: number;
      type: DogType;
    })
  | (Dachshund & {
      barksPerMinute?: number;
      type: DogType;
    });

export type PetCountry = (typeof PetCountry)[keyof typeof PetCountry];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PetCountry = {
  "People's_Republic_of_China": "People's Republic of China",
  Uruguay: 'Uruguay',
} as const;

export type PetCallingCode =
  (typeof PetCallingCode)[keyof typeof PetCallingCode];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PetCallingCode = {
  '+33': '+33',
  '+420': '+420',
} as const;

export type Pet =
  | (Dog & {
      '@id'?: string;
      callingCode?: PetCallingCode;
      country?: PetCountry;
      email?: string;
      id: number;
      name: string;
      tag?: string;
    })
  | (Cat & {
      '@id'?: string;
      callingCode?: PetCallingCode;
      country?: PetCountry;
      email?: string;
      id: number;
      name: string;
      tag?: string;
    });
