import Link from "next/link";
import { Button } from "@/components/ui/button"
import MenuToggle from "../theme/MenuToggle";

export default function Nav() {
  
  return (
    <div className="navbar flex flex-row justify-between items-center pt-2">
      <div className="text-primary text-3xl font-bold">Logo</div>
      
      <div className="buttons flex gap-2">
        <MenuToggle />
        <Link href="/api/auth/login"><Button variant="outline">Login</Button></Link>
      </div>
    </div>
  );
}
