import { useSession } from "next-auth/react";

function GetCurrentUser() {
  const { data: session, status } = useSession();

  console.log("====== session", session);
}

export default GetCurrentUser;
