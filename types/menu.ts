import { LocaleType } from '@/types/common';

export interface MenuItem {
  id: string;
  label: LocaleType;
  path: string;
}

export interface MenuGroup {
  id: string;
  label: LocaleType;
  path: string;
  items: MenuItem[];
}
