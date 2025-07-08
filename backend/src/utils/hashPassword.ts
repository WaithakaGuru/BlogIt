import bcrypt from 'bcrypt';


export default async function hashPassword (password: string){ 
    const rounds = 12;
    const salt = await bcrypt.genSalt(rounds)
    return bcrypt.hash(password, salt);
}