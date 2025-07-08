import bcrypt from 'bcrypt';

export default async function verifyPassword(password: string, hashedPassword: string) {
    const isPassowrdValid = await  bcrypt.compare(password, hashedPassword);
    return isPassowrdValid;
}