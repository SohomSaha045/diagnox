import Link from "next/link";
import { Button } from "@/components/ui/button"
import MenuToggle from "../theme/MenuToggle";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Nav() {

  const { user } = useUser()
  if (user) {
    (async () => {
      await fetch("/api/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: user?.name,
          email: user?.email,
          diseases: [],
          doctors: []
        })
      })
    })()
  }

  return (
    <div className="navbar flex flex-row justify-between items-center pt-2">
      <div className="text-primary text-3xl font-bold">
        <Image src="/logo.png" alt="logo1" width={150} height={50} />
      </div>

      <div className="buttons flex items-center gap-5">
        <MenuToggle />
        <div>
          {user === undefined
            ? <Link href="/api/auth/login"><Button variant="outline">Login</Button></Link>
            : <div className="flex items-center gap-2">
              <Image src={user.picture as string} alt="dp" width={45} height={32} className="rounded-full" />
              <p className="text-2xl">{user.name}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
