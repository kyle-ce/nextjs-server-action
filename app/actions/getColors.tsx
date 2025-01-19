"use server";
export async function getColor(color: string) {
  // Validate the color or set a default

  const validColors = ["tomato", "lime", "blue", "yellow"];
  return validColors.includes(color as string) ? color : "white";
}
