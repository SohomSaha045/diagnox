/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RDaZw7aWRuv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuToggle from "../theme/MenuToggle";

export default function Nav() {
  return (
    <nav className="flex h-16 w-full items-center border-b border-gray-200 shrink-0 px-4 md:px-6">
      <Link className="mr-6" href="#">
        Acme Inc
      </Link>
      <nav className="ml-auto flex items-center space-x-4">
        <Link
          className="font-medium hover:underline underline-offset-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="font-medium hover:underline underline-offset-4"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="font-medium hover:underline underline-offset-4"
          href="#"
        >
          Docs
        </Link>
        <Link
          className="font-medium hover:underline underline-offset-4"
          href="#"
        >
          Enterprise
        </Link>
        <div className="flex items-center space-x-4">
          <Button>Sign Up</Button>
          <Button variant="outline">Sign In</Button>
        </div>
        <div className="flex justify-end p-6">
          <MenuToggle />
        </div>
      </nav>
    </nav>
  );
}
