"use server";

import { db } from "@/lib/db";
import { ObjectId } from "mongodb";

export const getMovies = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/v1/movies`, {
      
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

// get all movies with filters action
export const searchMovies = async (query) => {
  try {
    // Search by title (i = case-insensitive)
    const movies = await db
      .collection("movies_new")
      .find({ title: { $regex: query, $options: "i" } })
      .limit(50)
      .toArray();

    // console.log("Search Movies::", movies.length, query);

    if (movies && movies.length > 0) {
      return {
        success: true,
        message: "Movies fetched successfully!",
        data: movies,
      };
    } else {
      return {
        success: false,
        message: "No movies found!",
        data: [],
      };
    }
  } catch (error) {
    console.log("Mongodb fetch failed!", error);
    return {
      success: false,
      message: "Error fetching movies.",
      data: [],
    };
  }
};

//get all movies action
export const getMovieById = async (movieId) => {
  try {
    const result = await db
      .collection("movies")
      .findOne({ _id: ObjectId.createFromHexString(movieId) });

    console.log(result);

    if (result && Object.keys(result).length > 0) {
      console.log(`A movie found with the id: ${result._id}`);
      return {
        success: true,
        message: "Movie fetched successfully!",
        data: result,
      };
    } else {
      return undefined;
    }
  } catch {
    console.log("mongodb fetching failed!");
  }
};

//create movie action
export const createMovie = async (movie) => {
  try {
    const result = await db.collection("movies_new").insertOne(movie);

    if (result.acknowledged) {
      console.log(`A movie  was inserted with the _id; ${result.insertedId}`);
      return {
        success: true,
        message: "Movie created successfully!",
      };
    } else {
      return undefined;
    }
  } catch {
    console.log("Mongodb inserted failed!");
  }
};

//update movie action
export const updateMovie = async (movieId, movieDoc) => {
  try {
    const result = await db
      .collection("movies_new")
      .updateOne(
        { _id: ObjectId.createFromHexString(movieId) },
        { $set: movieDoc },
        { upsert: true }
      );

    if (result.acknowledged) {
      console.log(`A movie  was inserted with the _id; ${result.insertedId}`);
      return {
        success: true,
        message: "Movie updated successfully!",
      };
    } else {
      return undefined;
    }
  } catch {
    console.log("Mongodb update failed!");
  }
};

//delete movie action
export const deleteMovie = async (movieId) => {
  try {
    const result = await db
      .collection("movies_new")
      .deleteOne({ _id: ObjectId.createFromHexString(movieId) });

    if (result.acknowledged) {
      console.log(`A movie  was deleted with the _id; ${result.insertedId}`);
      return {
        success: true,
        message: "Movie deleted successfully!",
      };
    } else {
      return undefined;
    }
  } catch {
    console.log("Mongodb delete failed!");
  }
};
