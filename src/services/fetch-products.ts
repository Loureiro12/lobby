import { getAuthHeader } from "./api";

export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://server.lobby.tech/api/v1/redeem_pages",
      {
        method: "GET",
        headers: {
          ...getAuthHeader(),
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
