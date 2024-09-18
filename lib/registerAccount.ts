export const registerAccount = async (
  password: string,
  confirmPassword: string,
  email: string
) => {
  const API = process.env.NEXT_PUBLIC_REGISTER_API;

  if (password === confirmPassword) {
    try {
      const response = await fetch(API as string, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      return response.json();
    } catch (error) {
      throw new Error("Unsuccessful Post request ...");
    }
  } else throw new Error("Inconsistent Passwords...");
};
