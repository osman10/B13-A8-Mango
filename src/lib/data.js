import fs from "fs/promises";
import path from "path";

export const getData = async () => {
  const filePath = path.join(process.cwd(), "src", "assets", "data.json");

  try {
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    console.error("Error reading data.json:", error);
    return [];
  }
};