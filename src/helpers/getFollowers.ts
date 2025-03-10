export const getFollowers = async (account: string) => {
  "use server";

  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/followers?username_or_id_or_url=${account}&amount=1000`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "362ab6dc14msh496b27f347b8c2cp1179e4jsnf666183cef18",
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    return result;
  } catch (error) {}
};

export const getFollowing = async (account: string) => {
  "use server";

  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/following?username_or_id_or_url=${account}&amount=1000`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "362ab6dc14msh496b27f347b8c2cp1179e4jsnf666183cef18",
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {}
};
