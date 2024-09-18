export const loginEmployee = async (email: string, password: string) => {
  const response = await fetch(process.env.NEXT_PUBLIC_LOGIN_API as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data...");
  }

  const result = await response.json();
  const accessToken: string = result.accessToken;

  document.cookie = `token=${accessToken}; path=/; secure;`;

  return accessToken;
};
