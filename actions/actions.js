"use server";

import connectMongo from "@/connect-mongo/connector";
import { UserModel } from "@/models/user-model";
import { redirect } from "next/navigation";

const handleCreateUser = async (formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("passowrd");
    const address = formData.get("address");
    const phone = formData.get("phone");

    const userData = {
      name,
      email,
      password,
      address,
      phone,
    };

    await connectMongo();

    // Insert into datasabse:
    await new UserModel(userData).save();

    //   Redirection to home:
    redirect("/");
  } catch (err) {
    console.log(err.message);
  }
};

export { handleCreateUser };
