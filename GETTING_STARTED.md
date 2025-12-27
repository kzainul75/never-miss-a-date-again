# Getting Started with Bloom & Gift

Welcome to **Bloom & Gift** - the ultimate app for managing important dates and discovering perfect gifts! 🌹💝

## What is Bloom & Gift?

Bloom & Gift is a beautiful, clean, and simple web application that helps customers and families:

✨ **Never miss an important date** - Manage birthdays, anniversaries, weddings, and special occasions
🎁 **Discover trending gifts** - Browse the latest bouquets, hampers, plants, and gift sets
📍 **Find local shops** - Locate the best florists and gift shops near you
👥 **Collaborate with family** - Create family groups and manage dates together
🔔 **Get smart reminders** - Customizable notifications before important dates
🔗 **Seamless integration** - Connect with invitations, location booking, and other apps

## Quick Start (5 minutes)

### 1. Access the App
- **Live Demo**: https://bloom-gift.lindy.site
- **Local Development**: http://localhost:3000

### 2. Explore the Pages

**Landing Page** (`/`)
- Overview of all features
- Trending gifts showcase
- Featured shops
- Call-to-action to get started

**Dashboard** (`/dashboard`)
- Your personal dashboard
- Upcoming important dates
- Favorite gifts
- Family members
- Orders

**Gift Catalog** (`/gifts`)
- Browse all available gifts
- Search and filter by category
- View ratings and reviews
- Add to favorites
- See prices

**Shop Directory** (`/shops`)
- Find local florists and gift shops
- View shop details and hours
- Check ratings and reviews
- Get directions
- Contact information

### 3. Key Features to Try

1. **View Important Dates**
   - Go to Dashboard
   - See upcoming dates (Mom's Birthday, Anniversary, Sister's Birthday)
   - Click "Find Gift" to discover gift ideas

2. **Browse Gifts**
   - Go to Gift Catalog
   - Search for specific gifts
   - Filter by category (Bouquets, Hampers, Plants, Gift Sets)
   - Click heart icon to add to favorites
   - View ratings and reviews

3. **Find Shops**
   - Go to Shop Directory
   - Search for shops by name
   - Sort by rating or distance
   - View shop details, hours, and specialties
   - Click "Get Directions" for location

## Project Structure

```
florist-gift-app/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global styles
│   ├── dashboard/
│   │   └── page.tsx             # User dashboard
│   ├── gifts/
│   │   └── page.tsx             # Gift catalog
│   └── shops/
│       └── page.tsx             # Shop directory
├── components/
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── db.ts                    # Prisma client
│   └── utils.ts                 # Utilities
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Database migrations
├── public/                      # Static assets
├── .env.local                   # Environment variables
├── package.json                 # Dependencies
└── README.md                    # Documentation
```

## Technology Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Relational database

### Styling
- **Tailwind CSS** - Responsive design
- **Gradient backgrounds** - Visual interest
- **Smooth animations** - Delightful interactions

## Database Models

The app uses 10 interconnected database models:

1. **User** - Customer/family member information
2. **Family** - Groups of people to manage dates for
3. **FamilyMember** - Individual family members with relationships
4. **ImportantDate** - Birthdays, anniversaries, special occasions
5. **Gift** - Catalog of available gifts and bouquets
6. **Shop** - Florist and gift shop information
7. **Favorite** - User's favorite gifts
8. **GiftSuggestion** - AI-powered gift recommendations
9. **Order** - Purchase history
10. **OrderItem** - Individual items in orders

## Sample Data Included

The app comes with sample data to explore:

### Gifts (8 items)
- Romantic Rose Bouquet ($45)
- Luxury Gift Hamper ($89)
- Orchid Plant ($35)
- Chocolate & Flowers ($55)
- Sunflower Delight ($38)
- Premium Spa Hamper ($75)
- Succulent Garden ($42)
- Elegant Lily Bouquet ($50)

### Shops (6 locations)
- Rose Garden Florist (4.8★, 245 reviews)
- Gift Paradise (4.9★, 189 reviews)
- Bloom & Botanicals (4.7★, 156 reviews)
- Elegant Florals (4.8★, 203 reviews)
- Sweet Surprises (4.6★, 178 reviews)
- Nature's Gift (4.7★, 142 reviews)

### Important Dates (3 upcoming)
- Mom's Birthday (January 2, 2026) - In 5 days
- Anniversary (January 9, 2026) - In 12 days
- Sister's Birthday (January 15, 2026) - In 18 days

## Design Highlights

### Color Palette
- **Primary**: Rose (#e11d48) and Pink (#ec4899)
- **Accents**: Purple, Blue, Amber, Green
- **Backgrounds**: Soft gradients and pastels
- **Text**: Dark gray (#111827) on white

### Typography
- **Headlines**: Bold, 24-64px
- **Body**: Regular, 14-16px
- **Spacing**: Generous padding and margins

### Components
- **Cards**: Elevated with shadows
- **Buttons**: Rounded with hover effects
- **Badges**: Status indicators
- **Icons**: Lucide React icons
- **Gradients**: Smooth color transitions

## Key Features Explained

### 1. Smart Date Management
- Add important dates for yourself and family members
- Customize reminder days (default: 7 days before)
- Organize by family groups
- Track occasion types (birthday, anniversary, wedding, etc.)

### 2. Trending Gift Discovery
- Browse curated gift catalog
- Filter by category and occasion
- View ratings and review counts
- Add to favorites for later
- See trending badges for popular items

### 3. Local Shop Directory
- Find florists and gift shops
- View complete shop information
- Check operating hours
- Read ratings and reviews
- Get directions to shops
- See shop specialties

### 4. Family Collaboration
- Create family groups
- Manage dates for multiple people
- Share important dates with family
- Coordinate gift planning

### 5. Smart Reminders
- Customizable reminder days
- Never miss a celebration
- Prepare in advance
- Plan gift purchases

## Responsive Design

The app is fully responsive and works on:
- 📱 Mobile phones (375px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## Accessibility

The app includes:
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus states on buttons and links

## Next Steps

### For Development
1. **Set up locally** - Follow setup instructions in README.md
2. **Explore the code** - Review component structure
3. **Customize** - Modify colors, text, and content
4. **Add features** - Implement authentication, payments, etc.

### For Deployment
1. **Choose platform** - Vercel, Railway, AWS, etc.
2. **Set up database** - PostgreSQL on cloud
3. **Configure environment** - Set environment variables
4. **Deploy** - Push to production
5. **Monitor** - Track performance and errors

### For Enhancement
1. **Add authentication** - User accounts and login
2. **Add payments** - Stripe or PayPal integration
3. **Add notifications** - Email and SMS reminders
4. **Add admin panel** - Manage gifts and shops
5. **Add mobile app** - React Native version

## Common Tasks

### Add a New Gift
1. Go to `app/gifts/page.tsx`
2. Add item to `gifts` array
3. Include: name, category, price, rating, image, color

### Add a New Shop
1. Go to `app/shops/page.tsx`
2. Add item to `shops` array
3. Include: name, address, phone, hours, rating, specialties

### Change Colors
1. Edit Tailwind classes in component files
2. Update color palette in `globals.css`
3. Common colors: rose, pink, purple, blue, amber, green

### Add a New Page
1. Create folder in `app/` directory
2. Add `page.tsx` file
3. Use existing pages as template
4. Add navigation link in header

## Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Database connection error
```bash
# Check environment variables
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL
```

### Styling issues
```bash
# Rebuild Tailwind CSS
npm run build

# Check globals.css is imported in layout.tsx
```

## Resources

- 📚 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 🧩 [shadcn/ui Components](https://ui.shadcn.com)
- 🗄️ [Prisma Documentation](https://www.prisma.io/docs)
- 🐘 [PostgreSQL Documentation](https://www.postgresql.org/docs)
- 🎯 [Lucide Icons](https://lucide.dev)

## Support

For questions or issues:
1. Check the README.md for detailed documentation
2. Review FEATURES.md for feature overview
3. Check DEPLOYMENT.md for deployment help
4. Review code comments for implementation details

## License

MIT License - Feel free to use and modify for your needs.

---

**Happy building! 🚀**

Made with ❤️ for gift-givers and date-keepers everywhere.
