"use client";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import UserForm from "../(components)/UserForm";

const CreateUser = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/CreateUser");
  }

  return (
    <div>
      <UserForm />
    </div>
  );
};

export default CreateUser;
