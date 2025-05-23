
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// our first GET API route
export const GET = async () => {
  try {
    // const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1');
   
   const movies = await db.collection("movies").find({}).sort({metacritic: -1}).limit(20).toArray();
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