import { useQuery } from '@tanstack/react-query';
import { getPaitings } from '../Axios';
import type { TPaitings } from '../types';

export const useFetchPaintings = (
  page: number,
  q: string,
): [TPaitings[] | undefined, boolean] => {
  const { data: paitings, isPending } = useQuery({
    queryKey: ['Paitings', page, q],
    queryFn: () => getPaitings(page, q),
    select: (data) => data.data,
  });
  return [paitings, isPending];
};
