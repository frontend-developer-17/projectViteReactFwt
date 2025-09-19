export enum BaseUrl {
  'https://test-front.framework.team',
}

export type TPaitings = {
  authorId: number;
  created: number;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};

export type TAuthors = Pick<TPaitings, 'id' | 'name'>;
export type TLocations = {
  id: number;
  location: string;
};


