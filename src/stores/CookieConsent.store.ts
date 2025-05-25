import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ConsentSettings = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
};

interface CookieConsentState {
  consent: ConsentSettings;
  setConsent: (value: ConsentSettings) => void;
}

export const useCookieConsentStore = create(
  persist<CookieConsentState>(
    (set) => ({
      consent: {
        necessary: true,
        analytics: false,
        ads: false,
      },
      setConsent: (value) => set({ consent: value }),
    }),
    {
      name: 'cookie-consent-pitmydoro',
    }
  )
);
