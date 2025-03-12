import { getAllMenu } from '@/apis/menuApi';
import { MenusType } from '@/types/menus';
import { responseDto } from '@/types/responseDto';
import { useQuery } from '@tanstack/react-query';

export const useGetAllMenu = () => {
  return useQuery<responseDto<MenusType[]>>({
    queryKey: ['useGetAllMenu'],
    queryFn: async () => {
      try {
        const res = await getAllMenu();
        console.log(res.data);
        return res.data; // 실제 데이터만 반환
      } catch (error) {
        throw new Error('Menu fetch failed');
      }
    },
    retry: 0,
  });
};
