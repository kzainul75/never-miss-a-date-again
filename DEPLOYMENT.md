# Bloom & Gift - Deployment Guide

## Local Development Setup

### Prerequisites
- Node.js 18+ and npm/bun
- PostgreSQL 12+
- Git

### Quick Start

1. **Clone and install**:
   ```bash
   cd florist-gift-app
   npm install
   ```

2. **Set up environment**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database credentials
   ```

3. **Create database**:
   ```bash
   createdb -h localhost -U your_username florist_gift_app
   ```

4. **Run migrations**:
   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/florist_gift_app" npx prisma migrate dev --name init
   ```

5. **Start dev server**:
   ```bash
   npm run dev
   ```

6. **Open browser**:
   Navigate to `http://localhost:3000`

## Production Deployment

### Option 1: Deploy to Vercel (Recommended for Next.js)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/florist-gift-app.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the project

3. **Configure environment variables**:
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add:
     ```
     DATABASE_URL=postgresql://user:password@host:5432/florist_gift_app
     NEXT_PUBLIC_APP_URL=https://your-domain.com
     NEXT_PUBLIC_APP_NAME=Bloom & Gift
     ```

4. **Deploy**:
   - Vercel will automatically deploy on push to main
   - Your app will be live at `your-project.vercel.app`

### Option 2: Deploy to Railway

1. **Create Railway account** at [railway.app](https://railway.app)

2. **Connect GitHub repository**:
   - Click "New Project"
   - Select "Deploy from GitHub"
   - Choose your repository

3. **Add PostgreSQL**:
   - Click "Add Service"
   - Select "PostgreSQL"
   - Railway will create a database

4. **Configure environment variables**:
   - Railway will auto-generate `DATABASE_URL`
   - Add other variables in project settings

5. **Deploy**:
   - Railway auto-deploys on push
   - Your app will be live at `your-project.up.railway.app`

### Option 3: Deploy to AWS

1. **Set up RDS PostgreSQL**:
   - Create RDS instance
   - Note the connection string

2. **Deploy to EC2 or Elastic Beanstalk**:
   - Build: `npm run build`
   - Start: `npm start`
   - Or use Docker for containerization

3. **Set environment variables**:
   - Configure in AWS Systems Manager Parameter Store
   - Or use `.env` file in deployment

### Option 4: Deploy to DigitalOcean

1. **Create App Platform project**:
   - Connect GitHub repository
   - Select Node.js runtime

2. **Add PostgreSQL database**:
   - Create managed database
   - Note connection string

3. **Configure environment**:
   - Set `DATABASE_URL` and other variables
   - Deploy

## Database Setup for Production

### PostgreSQL on Cloud

**Option 1: Managed Services**
- Vercel Postgres
- Railway PostgreSQL
- AWS RDS
- DigitalOcean Managed Databases
- Heroku Postgres

**Option 2: Self-Hosted**
- AWS EC2 with PostgreSQL
- DigitalOcean Droplet
- Linode
- Vultr

### Migration to Production

1. **Create production database**:
   ```bash
   createdb -h prod-host -U prod_user florist_gift_app_prod
   ```

2. **Run migrations**:
   ```bash
   DATABASE_URL="postgresql://user:password@host:5432/florist_gift_app_prod" npx prisma migrate deploy
   ```

3. **Seed data** (optional):
   ```bash
   DATABASE_URL="postgresql://user:password@host:5432/florist_gift_app_prod" npx prisma db seed
   ```

## Performance Optimization

### Database
- Add indexes on frequently queried fields
- Use connection pooling (PgBouncer)
- Regular backups

### Frontend
- Enable image optimization (Next.js Image component)
- Use CDN for static assets
- Implement caching headers

### Monitoring
- Set up error tracking (Sentry)
- Monitor performance (Vercel Analytics)
- Track database queries

## Security Checklist

- [ ] Environment variables not committed to git
- [ ] Database credentials secured
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] Input validation implemented
- [ ] SQL injection prevention (Prisma handles this)
- [ ] Rate limiting configured
- [ ] Regular security updates

## Backup Strategy

1. **Database backups**:
   - Daily automated backups
   - 30-day retention
   - Test restore procedures

2. **Code backups**:
   - GitHub repository
   - Regular commits
   - Release tags

## Monitoring & Maintenance

### Logs
- Application logs: Check deployment platform logs
- Database logs: Monitor query performance
- Error tracking: Set up Sentry or similar

### Metrics
- Page load times
- Database query performance
- Error rates
- User activity

### Updates
- Keep dependencies updated
- Security patches
- Next.js updates
- Prisma updates

## Scaling Considerations

### Horizontal Scaling
- Use load balancer
- Multiple app instances
- Shared database

### Vertical Scaling
- Increase server resources
- Database optimization
- Caching layer (Redis)

### Database Optimization
- Query optimization
- Indexing strategy
- Connection pooling
- Read replicas for heavy read workloads

## Cost Estimation

### Vercel (Recommended)
- Free tier: Sufficient for small projects
- Pro: $20/month
- Enterprise: Custom pricing

### Database
- Vercel Postgres: $15/month (starter)
- Railway: Pay-as-you-go (~$5-20/month)
- AWS RDS: $15-50+/month
- DigitalOcean: $15-50+/month

### Total Estimated Cost
- **Starter**: $0-20/month (free tier)
- **Small**: $20-40/month
- **Medium**: $50-100/month
- **Large**: $100+/month

## Troubleshooting

### Database Connection Issues
```bash
# Test connection
psql -h host -U user -d database_name

# Check environment variables
echo $DATABASE_URL
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Performance Issues
```bash
# Analyze bundle size
npm run build -- --analyze

# Check database queries
# Enable Prisma logging in lib/db.ts
```

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## Next Steps

1. **Add Authentication**:
   - Implement NextAuth.js or Clerk
   - User registration and login
   - Protected routes

2. **Add Payment Processing**:
   - Integrate Stripe or PayPal
   - Order checkout flow
   - Payment confirmation

3. **Add Email Notifications**:
   - Integrate Resend or SendGrid
   - Reminder emails
   - Order confirmations

4. **Add Admin Dashboard**:
   - Shop management
   - Gift catalog management
   - User analytics

5. **Mobile App**:
   - React Native version
   - Push notifications
   - Offline support

---

**Happy deploying! 🚀**
