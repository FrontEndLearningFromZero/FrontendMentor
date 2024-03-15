import { PrismaClient } from "@prisma/client";

declare global {
  interface Window {
    globalThis: typeof globalThis;
    prisma: PrismaClient;
  }
}

let prisma: PrismaClient | undefined;


export default prisma;
