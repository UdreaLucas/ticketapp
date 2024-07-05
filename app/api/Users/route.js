import User from "@/app/models/User";
import { NextResponse } from "next/server";
import { bcrypt } from "bcrypt";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const userData = body.formData;

    //confirm data exist
    if (!userData?.email || !userData?.password) {
      return NextResponse.json({ message: "Fields required" }, { status: 400 });
    }

    //check for duplicates email
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();
    if (duplicate) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }

    //hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    //create user
    await User.create(userData);
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    console.log(err);
    return NextResponse.json({ message: "Server error", err }, { status: 500 });
  }
}
