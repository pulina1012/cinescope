
import Link from "next/link";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";

export default function HeaderNav() {
  // return <header className="bg-gray-400 h-20">Header Section</header>;
  return <header className="border-primary/20 bg-background sticky top-0 z-50 w-full border-b">
    <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-primary text-xl font-bold">CineScope</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <Link
              href="/"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Movies
            </Link>
            <Link
              href="/genres"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Genres
            </Link>
            <Link
              href="/about"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/admin"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Admin
            </Link>
           <ModeToggle/>
          </nav>
        </div>
  </header>;
}

// ** "border-primary/20" **:
// - This class sets the border color using the `color-mix` function.
// - `color-mix(in oklab, var(--color-primary) 20%, transparent)`:
//   - `color-mix` blends two colors together.
//   - `in oklab`: Specifies the color space (oklab) for blending, which provides perceptually uniform color mixing.
//   - `var(--color-primary)`: Refers to a custom CSS variable for the primary color.
//   - `20%`: Indicates that 20% of the primary color is mixed with 80% of the second color.
//   - `transparent`: The second color in the mix, which is fully transparent.
// - The result is a border color that is a lighter, more transparent version of the primary color.

// ** "bg-background" **:
// - This class sets the background color using a custom CSS variable.
// - `var(--background-color)`: Refers to a custom CSS variable for the background color.
// - This allows for easy theming and customization of the background color.

// ** "sticky top-0 z-50 w-full" **: