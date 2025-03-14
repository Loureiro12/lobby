export const getAuthHeader = () => {
  const apiKey = `${process.env.NEXT_PUBLIC_API_KEY}:`;
  const encodedKey = btoa(apiKey);

  return {
    "Content-Type": "application/json",
    Authorization: `Basic ${encodedKey}`,
  };
};
