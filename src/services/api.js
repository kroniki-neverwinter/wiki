export async function postCharacterForm(formData, apiUrl) {
  const res = await fetch(apiUrl, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error ${res.status}: ${body}`);
  }
  return res.json ? res.json() : null;
}
