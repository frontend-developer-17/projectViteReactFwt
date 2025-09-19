import { useQuery } from '@tanstack/react-query';
import { getLocations } from '../Axios';
import type { TLocations } from '../types';

export const useFetchLocations = (): [TLocations[] | undefined] => {
  const { data: locations } = useQuery({
    queryKey: ['Locations'],
    queryFn: () => getLocations(),
    select: (data) => data.data,
  });
  return [locations];
};
