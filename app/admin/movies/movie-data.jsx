import { db } from "@/lib/db";
import MovieTable from "./movie-table";

export default async function MovieData() {
  try {
    const movies = await db
      .collection("movies_new")
      .find({})
      .limit(50)
      .toArray();

    if (movies.length > 0) {
      const refinedMovies = movies.map((movie, key) => ({
        id: movie._id.toString(),
        title: movie.title,
        year: movie.year,
        overview: movie.plot,
        rated: movie.rated,
        genres: Array.isArray(movie.genres)
          ? movie.genres
          : movie.genres
          ? [movie.genres]
          : [], 
          // ← ensures it's always an array
        poster: movie.poster,
        imdb: movie.imdb,
        mStatus: movie.status,
        runtime: movie.runtime,
        director: movie.directors,
        backdrop: movie.backdrop,
      }));

      return <MovieTable movies={refinedMovies} />;
    } else {
      return (
        <div className="flex justify-center items-center h-[400px]">
          <p className="text-destructive font-medium animate-pulse duration-1000">
            No Movies Available!
          </p>
        </div>
      );
    }
  } catch (error) {
    console.log("Error fetching movies", error);
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-destructive font-medium animate-pulse duration-1000">
          No Movies Available!
        </p>
      </div>
    );
  }
}
