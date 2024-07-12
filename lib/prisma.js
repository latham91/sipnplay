import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Ensure globalThis is defined (for environments that might not have it)
if (typeof globalThis === "undefined") {
  global.globalThis = global;
}

// Initialize or reuse a PrismaClient instance
const prisma = globalThis.prismaGlobal || prismaClientSingleton();

// Export the PrismaClient instance
export default prisma;

// In development, store the PrismaClient instance globally
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
