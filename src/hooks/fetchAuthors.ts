import { useQuery } from '@tanstack/react-query';
import type { TAuthors } from '../types';
import { getAuthors} from '../Axios';

export const useFetchAuthors = (): [TAuthors[] | undefined] => {
  const { data: authors } = useQuery({
    queryKey: ['Authors'],
    queryFn: () => getAuthors(),
    select: (data) => data.data,
  });
  return [authors];
};



