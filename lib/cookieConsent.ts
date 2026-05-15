export const COOKIE_CONSENT_NAME = "site_cookie_consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-changed";

export type CookieConsentValue = "accepted" | "declined";

export function readCookieConsent(): CookieConsentValue | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${COOKIE_CONSENT_NAME}=`));

  const value = cookie?.split("=")[1];

  if (value === "accepted" || value === "declined") {
    return value;
  }

  return null;
}

export function writeCookieConsent(value: CookieConsentValue) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${COOKIE_CONSENT_NAME}=${value}; Path=/; Max-Age=15552000; SameSite=Lax`;

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
  }
}

export function subscribeToCookieConsent(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handler = () => callback();
  window.addEventListener(COOKIE_CONSENT_EVENT, handler);

  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handler);
}

export function hasAcceptedCookieConsent() {
  return readCookieConsent() === "accepted";
}
