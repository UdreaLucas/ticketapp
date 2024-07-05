import { useSession } from "next-auth/react";

export default function Component() {
  const { data: session, status } = useSession();
}
