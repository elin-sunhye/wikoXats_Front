import { commonApi } from '@/configs/commonApi';

export const getAllMenu = async () => await commonApi.get('/api/menu/all');
