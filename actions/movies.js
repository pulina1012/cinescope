export const getMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/movies", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    if (response.status === 200) {
      return await response.json();
    } else {
      console.log("No movies found!");
      return undefined;
    }
  } catch (error) {
    console.log("Error fetching movies:", error);
    return undefined;
  }
};
