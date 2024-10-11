export const registerAccount = async (
  password: string,
  confirmPassword: string,
  email: string,
) => {
  const API = process.env.NEXT_PUBLIC_REGISTER_API;

  // Check if passwords match
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  try {
    const response = await fetch(API as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    // Check if the request was successful
    if (!response.ok) {
      // Throw an error with status code if the request fails
      throw new Error(
        `Failed to register: ${response.status} ${response.statusText}`,
      );
    }

    // Return the response as JSON
    return await response.json();
  } catch (error) {
    // Log error and throw it for further handling
    console.error("Error during registration:", error);
    throw new Error("Registration request failed. Please try again.");
  }
};
