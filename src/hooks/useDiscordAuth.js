export const useDiscordAuth = () => {
  // Placeholder hook: parse `code` query param and return it
  if (typeof window === 'undefined') return { code: null };
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  return { code };
};
