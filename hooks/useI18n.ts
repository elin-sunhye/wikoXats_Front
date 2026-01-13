'use client'

import { useTranslations } from 'next-intl'

export function useI18n(locale: string) {
    return useTranslations(locale)
}