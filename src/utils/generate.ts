export function generateOptions(
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  specialChars: boolean
) {
  if (!uppercase && !lowercase && !numbers && !specialChars) {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  }

  let generateString = "";

  if (uppercase) generateString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) generateString += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) generateString += "0123456789";
  if (specialChars) generateString += "!@#$%^&*()";

  return generateString;
}
