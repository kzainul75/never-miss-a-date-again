/**
 * Prisma Client Singleton
 * 
 * This file creates a singleton instance of PrismaClient to avoid creating
 * multiple instances in development (which can cause connection pool issues).
 * In production, a single instance is created and reused.
 */

import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

/**
 * Create or retrieve the Prisma Client instance
 * - In development: reuse the same instance across hot reloads
 * - In production: create a single instance
 */
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
