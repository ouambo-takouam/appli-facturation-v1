"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "@lib/mongoose";
import Customer from "@lib/models/customer.model";

export async function addNewCustomer(data, path) {
  try {
    await connectToDB();
    await Customer.create(data);

    if (path === "/customers") {
      revalidatePath(path);
    }
  } catch (error) {
    throw new Error(`Failed to create customer: ${error.message}`);
  }
}
