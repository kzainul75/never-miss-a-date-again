/**
 * Prisma Client Singleton
 * 
 * This file creates a singleton instance of PrismaClient to avoid creating
 * multiple instances in development (which can cause connection pool issues).
 * In production, a single instance is created and reused.
 * 
 * Updated for Prisma 7 with PostgreSQL adapter.
 */

import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

/**
 * Create or retrieve the Prisma Client instance
 * - In development: reuse the same instance across hot reloads
 * - In production: create a single instance
 */
const createPrismaClient = () => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({
    adapter,
    log: ['query'],
  })
}

export const prisma = globalForPrisma.prisma || createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
