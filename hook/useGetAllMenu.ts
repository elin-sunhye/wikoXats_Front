import { MenusType } from '@/types/menus';
import { responseDto } from '@/types/responseDto';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetAllMenu = () => {
  return useQuery<responseDto<MenusType[]>>({
    queryKey: ['useGetAllMenu'],
    queryFn: async () => {
      try {
        const res = await axios.get(
          'http://localhost:8080/wikoXats_backend_war/api/getAllMenu'
        );
        return res.data; // 실제 데이터만 반환
      } catch (error) {
        throw new Error('Menu fetch failed');
      }
    },
  });
};
