import historyKo from '@/data/history.ko.json';
import historyEn from '@/data/history.en.json';
import historyZh from '@/data/history.zh.json';

import businessKo from '@/data/business.ko.json';
import businessEn from '@/data/business.en.json';
import businessZh from '@/data/business.zh.json';

const historyMap = {
  ko: historyKo,
  en: historyEn,
  zh: historyZh,
};

const businessMap = {
  ko: businessKo,
  en: businessEn,
  zh: businessZh,
};

export function getHistoryData(locale: string) {
  return (historyMap[locale as keyof typeof historyMap] ?? historyMap.ko)
    .history;
}

export function getBusinessData(locale: string) {
  return (businessMap[locale as keyof typeof businessMap] ?? businessMap.ko)
    .business;
}
