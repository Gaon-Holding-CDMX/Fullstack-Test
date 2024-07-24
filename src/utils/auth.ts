import bcrypt from 'bcrypt';
const saltRounds = 10;

export async function hashPassword(password: string): Promise<string | null> {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function checkPassword(password: string, hash: string): Promise<boolean> {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (error) {
    console.error(error);
    return false;
  }
}