import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const CreateUser = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/CreateUser");
  }

  return (
    <div>
      <h1>Create User</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
