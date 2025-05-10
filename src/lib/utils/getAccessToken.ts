export function getAccessToken() {
  return localStorage.getItem('accessToken');
}

export function isTokenExpired(): boolean {
  const token = getAccessToken();

  if (!token) {
    return true;
  }

  try {
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    const expirationTimeInSeconds = tokenPayload.exp;
    const expirationTimeInMilliseconds = expirationTimeInSeconds * 1000;

    return expirationTimeInMilliseconds < Date.now();
  } catch (error) {
    console.error('Error decoding or parsing the token', error);
    return true;
  }
}
