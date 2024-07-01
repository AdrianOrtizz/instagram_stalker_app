export const getFollowers = async (account: string) => {
  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/followers?username_or_id_or_url=${account}&amount=1000`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6077387938msh4840207330c1dabp1c3d01jsnb697dcbdf8a7",
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {}
};

export const getFollowing = async (account: string) => {
  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/following?username_or_id_or_url=${account}&amount=1000`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6077387938msh4840207330c1dabp1c3d01jsnb697dcbdf8a7",
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {}
};
