"use client";

import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UpdateMovieForm } from "./update-movie-form";

export default function UpdateMovieDialog({ open, onOpenChange, movie }) {
  // console.log("update movie:", movie);
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Update Movie</DialogTitle>
            <DialogDescription>
              Fill below details to update the movie.
            </DialogDescription>
          </DialogHeader>
          {/* update movie form */}
          <UpdateMovieForm onClose={onOpenChange} movie={movie}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
