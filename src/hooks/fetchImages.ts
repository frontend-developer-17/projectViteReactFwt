import { useQuery } from "@tanstack/react-query";
import { getImages } from "../Axios";

export const usefetchImages = (urlImage:string) => {
    
  const { data, isPending } = useQuery({
    queryKey: ['img', urlImage],
    queryFn: () => getImages(urlImage),
    retry:true
  });
  return [data, isPending];
};