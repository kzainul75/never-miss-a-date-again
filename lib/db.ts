/**
 * Prisma Client Singleton
 * 
 * This file creates a singleton instance of PrismaClient to avoid creating
 * multiple instances in development (which can cause connection pool issues).
 * In production, a single instance is created and reused.
 * 
 * Updated for Prisma 7 with PostgreSQL adapter and build-time resilience.
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
  const connectionString = process.env.DATABASE_URL
  
  if (!connectionString) {
    // During build time on Vercel, DATABASE_URL might be missing.
    // We return a Proxy that logs a warning but doesn't crash the build
    // if the client is imported but not actually used for queries.
    console.warn('DATABASE_URL is missing. Prisma client will be initialized as a dummy proxy.')
    
    return new Proxy({} as PrismaClient, {
      get: (target, prop) => {
        if (prop === 'then') return undefined; // Handle async/await
        return () => {
          console.error(`Prisma method "${String(prop)}" called but DATABASE_URL is missing.`);
          return Promise.resolve(null);
        };
      }
    });
  }

  try {
    const pool = new Pool({ connectionString })
    const adapter = new PrismaPg(pool)
    return new PrismaClient({
      adapter,
      log: ['query'],
    })
  } catch (error) {
    console.error('Failed to initialize Prisma client:', error)
    // Fallback to dummy proxy if initialization fails
    return new Proxy({} as PrismaClient, {
      get: (target, prop) => {
        if (prop === 'then') return undefined;
        return () => Promise.resolve(null);
      }
    });
  }
}

export const prisma = globalForPrisma.prisma || createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
