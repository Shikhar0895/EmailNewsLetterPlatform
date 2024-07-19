"use server";

import { currentUser } from "@clerk/nextjs/server";
import jwt from "jsonwebtoken";

export const generateApiKey = async () => {
  try {
    console.log("generateAPIKey ran");
    const user = await currentUser();
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY!);

    return token;
  } catch (error) {
    console.error(`Error from generateApi key:${error}`);
  }
};

export const regenerateApiKey = async () => {
  try {
    console.log("RegenerateAPIKey ran");
    const user = await currentUser();
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY!);
    return token;
  } catch (error) {
    console.log(`Error from RegenerateApi key:${error}`);
  }
};
