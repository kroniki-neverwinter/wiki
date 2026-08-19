export function isBrowser() {
  return typeof window !== 'undefined';
}

export function safeJsonParse(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return fallback;
  }
}
