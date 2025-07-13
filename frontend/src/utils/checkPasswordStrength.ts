import z from "zxcvbn";

export default function checkPasswordStrength(password: string) {
  const strength = z(password).score;
  return strength >= 3 ? 1 : -1;
}
