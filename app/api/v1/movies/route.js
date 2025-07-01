import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// our first GET API route
export const GET = async () => {
  try {
    // const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1');
    // Metacritic: Sorts the results in descending order based on the 'metacritic' field.
    // A value of -1 indicates descending order, while 1 would indicate ascending order.

    const movies = await db
      .collection("movies_new")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray()
      .catch((error) => {
        console.error("Error fetching movies from databases:",error);
        return [];
      });
    //  console.log("db movies",movies);
    return NextResponse.json(movies);

    // return NextResponse.json(MOVIES, { status: 200 });
  } catch (error) {
    console.log("Error fetching movies:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

// 404 - notFound
// 500 -server error
// 200 - success
// 400 - unauthorized - no permission
