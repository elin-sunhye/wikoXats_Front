import { LocaleType } from '@/types/common';

export interface historyItem {
  text: LocaleType;
}

export interface historyGroup {
  label: string;
  history: historyItem[];
}
