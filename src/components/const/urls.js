export const defaultAppUrls = {
  apiUrl: "https://kn-form.azurewebsites.net/api/ProcessCharacterForm",
  discordAuthUrl:
    "https://discord.com/oauth2/authorize?client_id=712607067420229685&response_type=code&redirect_uri=https%3A%2F%2Fkn-discord.azurewebsites.net%2Fapi%2Fcallback&scope=identify",
  discordMeUrl: "https://discord.com/api/users/@me",
};

export function getAppUrls(customFields = {}) {
  return {
    apiUrl: customFields.apiUrl || defaultAppUrls.apiUrl,
    discordAuthUrl:
      customFields.discordAuthUrl || defaultAppUrls.discordAuthUrl,
    discordMeUrl: customFields.discordMeUrl || defaultAppUrls.discordMeUrl,
  };
}
