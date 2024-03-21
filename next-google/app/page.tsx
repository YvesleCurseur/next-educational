import { auth } from "../lib/auth";
import { LoginButton, LogoutButton } from "./AuthButtons";

export default async function Home() {
  const session = await auth();
  return (
    // If authenticated display sign out button and Name
    <div>
      <h1>
        {session?.user
          ? session.user.name + " Authenticated"
          : "Not Authenticated"}
      </h1>

      {session?.user ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
