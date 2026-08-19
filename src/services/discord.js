export async function fetchDiscordMe(token) {
  if (!token) throw new Error('No token provided');
  const res = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Discord API error ${res.status}: ${body}`);
  }
  return res.json();
}
