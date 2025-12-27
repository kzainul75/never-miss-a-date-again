# Bloom & Gift - Date Management & Gift Discovery App

A beautiful, clean, and simple app that helps customers and families manage important dates while discovering trending gifts and bouquets from local florists and gift shops.

## Features

✨ **Smart Date Management**
- Track birthdays, anniversaries, and special occasions for family and friends
- Customizable reminders to ensure you're always prepared
- Family groups to collaborate with loved ones

🎁 **Trending Gift Discovery**
- Browse the latest trending gifts and bouquets
- Personalized recommendations based on occasion and recipient
- Ratings and reviews from other customers
- Multiple categories: bouquets, hampers, plants, gift sets

📍 **Local Shop Directory**
- Find florists and gift shops near you
- View shop details, hours, ratings, and specialties
- Get directions and contact information
- Seamless integration with location services

👥 **Family Collaboration**
- Create family groups and manage dates together
- Share important dates with family members
- Coordinate gift planning

🔔 **Smart Reminders**
- Customizable reminder days before important dates
- Never miss a celebration again

🔗 **Seamless Integration**
- Integration with invitation apps
- Location booking capabilities
- Order tracking and management

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), React, TypeScript
- **UI Components**: shadcn/ui with Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom gradients

## Project Structure

```
florist-gift-app/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Landing page
│   ├── dashboard/           # User dashboard
│   ├── gifts/               # Gift catalog
│   ├── shops/               # Shop directory
│   └── globals.css          # Global styles
├── components/
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── db.ts                # Prisma client singleton
│   └── utils.ts             # Utility functions
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── migrations/          # Database migrations
└── public/                  # Static assets
```

## Database Schema

The app uses PostgreSQL with the following main models:

- **User**: Customer/family member information
- **Family**: Groups of people to manage dates for
- **FamilyMember**: Individual family members with relationships
- **ImportantDate**: Birthdays, anniversaries, special occasions
- **Gift**: Catalog of available gifts and bouquets
- **Shop**: Florist and gift shop information
- **Favorite**: User's favorite gifts
- **GiftSuggestion**: AI-powered gift recommendations
- **Order**: Purchase history
- **OrderItem**: Individual items in orders

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm/bun
- PostgreSQL 12+

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your database credentials:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/florist_gift_app"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   NEXT_PUBLIC_APP_NAME="Bloom & Gift"
   ```

3. **Run database migrations**:
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/florist_gift_app" npx prisma migrate dev --name init
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to `http://localhost:3000`

## Pages

### Landing Page (`/`)
- Hero section with app overview
- Feature highlights
- Trending gifts showcase
- Featured shops
- Call-to-action section

### Dashboard (`/dashboard`)
- Overview stats (upcoming dates, favorites, family members, orders)
- Important dates management
- Trending gifts discovery
- Favorite gifts collection
- Shop directory

### Gift Catalog (`/gifts`)
- Browse all gifts and bouquets
- Search and filter by category
- View ratings and reviews
- Add to favorites
- Price and availability information

### Shop Directory (`/shops`)
- Find local florists and gift shops
- Sort by rating or distance
- View shop details and specialties
- Get directions
- Contact information

## Key Features Implementation

### Date Management
- Users can add important dates for themselves and family members
- Customizable reminder days before the event
- Automatic suggestions for gift ideas based on occasion

### Gift Recommendations
- Trending gifts highlighted with badges
- Personalized recommendations based on occasion
- Ratings and review counts for social proof
- Easy add-to-favorites functionality

### Shop Integration
- Complete shop directory with ratings
- Location-based search
- Operating hours and contact information
- Specialty tags for quick identification

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Smooth animations and transitions

## Styling

The app uses a clean, minimalist design with:
- Rose and pink color palette for warmth and elegance
- Gradient backgrounds for visual interest
- Smooth transitions and hover effects
- Clear typography hierarchy
- Ample whitespace for breathing room

## Future Enhancements

- User authentication and accounts
- Payment integration for orders
- Email/SMS reminders
- Social sharing features
- Advanced gift recommendations using AI
- Real-time order tracking
- Integration with calendar apps
- Mobile app version

## Contributing

This is a demo application. Feel free to fork and customize for your needs.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or issues, please contact support@bloomandigift.com

---

Built with ❤️ for gift-givers and date-keepers everywhere.
