import { SignJWT, jwtVerify } from "jose";
import type { NextRequest } from "next/server";

interface Claims {
  id: string;
}

export async function generateToken(payload: Claims): Promise<string> {
  const secretKey = new TextEncoder().encode(
    process.env.JWT_SECRET || "secret"
  );

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(new Uint8Array(secretKey));
}

export async function verifyToken(token: string): Promise<Claims> {
  const secretKey = new TextEncoder().encode(
    process.env.JWT_SECRET || "secret"
  );

  try {
    const { payload } = await jwtVerify(token, new Uint8Array(secretKey), {
      algorithms: ["HS256"],
    });

    return payload as unknown as Claims;
  } catch (error) {
    console.error("Failed to verify token:", error);
    throw new Error("Invalid token");
  }
}

export async function authenticated(request: NextRequest): Promise<string | null> {
  const token = request.cookies.get("token");

  if (!token) {
    return null;
  }

  try {
    const obj = await verifyToken(token.value);
    return obj.id;
  } catch (e) {
    console.log(e);
    return null;
  }
}