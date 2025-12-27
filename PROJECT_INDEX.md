# Bloom & Gift - Project Index

## 📋 Complete File Structure

### 📄 Documentation Files
- **README.md** - Main project documentation and setup guide
- **FEATURES.md** - Comprehensive feature overview
- **DEPLOYMENT.md** - Deployment and hosting guide
- **GETTING_STARTED.md** - Quick start guide for new users
- **BUILD_SUMMARY.md** - Summary of what was built
- **PROJECT_INDEX.md** - This file

### 🎨 Application Pages
- **app/page.tsx** - Landing page with hero, features, trending gifts, shops, CTA
- **app/layout.tsx** - Root layout with metadata, fonts, and global setup
- **app/globals.css** - Global styles and Tailwind configuration
- **app/dashboard/page.tsx** - User dashboard with stats, dates, gifts, shops
- **app/gifts/page.tsx** - Gift catalog with search, filter, ratings
- **app/shops/page.tsx** - Shop directory with search, sort, details

### 🧩 UI Components (shadcn/ui)
All pre-installed shadcn/ui components in `components/ui/`:
- **button.tsx** - Button component with variants
- **card.tsx** - Card container component
- **input.tsx** - Text input component
- **badge.tsx** - Badge/tag component
- **tabs.tsx** - Tabbed interface component
- **dialog.tsx** - Modal dialog component
- **dropdown-menu.tsx** - Dropdown menu component
- **alert.tsx** - Alert notification component
- **avatar.tsx** - User avatar component
- **breadcrumb.tsx** - Breadcrumb navigation
- **calendar.tsx** - Calendar picker
- **carousel.tsx** - Image carousel
- **chart.tsx** - Chart component
- **checkbox.tsx** - Checkbox input
- **collapsible.tsx** - Collapsible section
- **command.tsx** - Command palette
- **context-menu.tsx** - Right-click menu
- **drawer.tsx** - Side drawer panel
- **empty.tsx** - Empty state component
- **field.tsx** - Form field wrapper
- **form.tsx** - Form component
- **hover-card.tsx** - Hover card tooltip
- **input-group.tsx** - Grouped inputs
- **input-otp.tsx** - OTP input
- **item.tsx** - List item component
- **kbd.tsx** - Keyboard key display
- **label.tsx** - Form label
- **menubar.tsx** - Menu bar
- **navigation-menu.tsx** - Navigation menu
- **pagination.tsx** - Pagination controls
- **popover.tsx** - Popover component
- **progress.tsx** - Progress bar
- **radio-group.tsx** - Radio button group
- **resizable.tsx** - Resizable panels
- **scroll-area.tsx** - Scrollable area
- **select.tsx** - Select dropdown
- **separator.tsx** - Visual separator
- **sheet.tsx** - Side sheet panel
- **sidebar.tsx** - Sidebar navigation
- **skeleton.tsx** - Loading skeleton
- **slider.tsx** - Slider input
- **sonner.tsx** - Toast notifications
- **spinner.tsx** - Loading spinner
- **switch.tsx** - Toggle switch
- **table.tsx** - Data table
- **textarea.tsx** - Multi-line text input
- **toggle-group.tsx** - Toggle button group
- **toggle.tsx** - Toggle button
- **tooltip.tsx** - Tooltip component

### 🔧 Utilities & Hooks
- **lib/db.ts** - Prisma client singleton for database access
- **lib/utils.ts** - Utility functions (cn for className merging)
- **hooks/use-mobile.ts** - Mobile detection hook

### 🗄️ Database
- **prisma/schema.prisma** - Database schema with 10 models
- **prisma/migrations/** - Database migration files
- **prisma.config.ts** - Prisma configuration for v7

### ⚙️ Configuration Files
- **package.json** - Project dependencies and scripts
- **package-lock.json** - Locked dependency versions
- **tsconfig.json** - TypeScript configuration
- **next.config.ts** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **postcss.config.mjs** - PostCSS configuration
- **components.json** - shadcn/ui configuration
- **.env.local** - Environment variables (local)
- **.env.example** - Environment variables template
- **.gitignore** - Git ignore rules
- **eslint.config.mjs** - ESLint configuration

### 📦 Public Assets
- **public/** - Static files (images, icons, etc.)

---

## 🎯 Key Files by Purpose

### Landing Page
- `app/page.tsx` - Main landing page with all sections

### Dashboard
- `app/dashboard/page.tsx` - User dashboard with tabs

### Gift Management
- `app/gifts/page.tsx` - Gift catalog and browsing

### Shop Directory
- `app/shops/page.tsx` - Shop listing and search

### Database
- `prisma/schema.prisma` - All data models
- `lib/db.ts` - Database client

### Styling
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind configuration

### Configuration
- `next.config.ts` - Next.js settings
- `tsconfig.json` - TypeScript settings
- `package.json` - Dependencies

---

## 📊 Database Models

### User
- Stores customer/family member information
- Relations: importantDates, favorites, orders, familyMembers, ownedFamilies

### Family
- Groups of people to manage dates for
- Relations: owner (User), members (ImportantDate)

### FamilyMember
- Individual family members with relationships
- Relations: user (User), importantDates (ImportantDate)

### ImportantDate
- Birthdays, anniversaries, special occasions
- Relations: user (User), family (Family), member (FamilyMember), suggestions (GiftSuggestion)

### Gift
- Catalog of available gifts and bouquets
- Relations: shop (Shop), favorites (Favorite), suggestions (GiftSuggestion), orderItems (OrderItem)

### Shop
- Florist and gift shop information
- Relations: gifts (Gift), orders (Order)

### Favorite
- User's favorite gifts
- Relations: user (User), gift (Gift)

### GiftSuggestion
- AI-powered gift recommendations
- Relations: importantDate (ImportantDate), gift (Gift)

### Order
- Purchase history
- Relations: user (User), shop (Shop), items (OrderItem)

### OrderItem
- Individual items in orders
- Relations: order (Order), gift (Gift)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment
```bash
cp .env.example .env.local
# Edit .env.local with your database credentials
```

### 3. Create Database
```bash
createdb -h localhost -U your_username florist_gift_app
```

### 4. Run Migrations
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/florist_gift_app" npx prisma migrate dev --name init
```

### 5. Start Dev Server
```bash
npm run dev
```

### 6. Open in Browser
Navigate to `http://localhost:3000`

---

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section
- 6 feature highlights
- Trending gifts (4 items)
- Featured shops (3 shops)
- CTA section
- Footer

### Dashboard (`/dashboard`)
- Statistics cards (8 upcoming dates, 12 favorites, 5 family members, 3 orders)
- Tabbed interface
- Important dates list
- Trending gifts
- Favorites
- Shop directory

### Gift Catalog (`/gifts`)
- Search functionality
- Category filters
- 8+ gift items
- Ratings and reviews
- Price display
- Add to favorites

### Shop Directory (`/shops`)
- Search functionality
- Sort by rating or distance
- 6 shop listings
- Complete shop details
- Contact information
- Get directions

---

## 🎨 Design System

### Colors
- **Primary**: Rose (#e11d48), Pink (#ec4899)
- **Accents**: Purple, Blue, Amber, Green
- **Backgrounds**: Soft gradients
- **Text**: Dark gray (#111827)

### Typography
- **Headlines**: Bold, 24-64px
- **Body**: Regular, 14-16px
- **Spacing**: Generous padding

### Components
- Cards with shadows
- Buttons with hover effects
- Badges for status
- Icons from Lucide React
- Smooth gradients

---

## 🔧 Technology Stack

### Frontend
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

### Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL

### Development
- Node.js 18+
- npm/bun
- ESLint
- TypeScript

---

## 📈 Project Statistics

- **Pages**: 4 fully functional pages
- **Components**: 50+ UI components (20+ shadcn/ui)
- **Database Models**: 10 interconnected models
- **Lines of Code**: 2000+ lines
- **Documentation**: 6 comprehensive guides
- **Sample Data**: 8 gifts, 6 shops, 3 dates

---

## 🔗 Integration Points

### Ready for Integration
- Invitation app integration (database fields)
- Location booking integration (database fields)
- Payment processing (order system)
- Email/SMS reminders (reminder system)
- Calendar app sync (date management)
- Social sharing (gift and shop sharing)

---

## 📚 Documentation Map

1. **README.md** - Start here for overview and setup
2. **GETTING_STARTED.md** - Quick start guide
3. **FEATURES.md** - Detailed feature list
4. **DEPLOYMENT.md** - Deployment instructions
5. **BUILD_SUMMARY.md** - What was built
6. **PROJECT_INDEX.md** - This file

---

## 🎯 Quick Navigation

### For Users
- Start with GETTING_STARTED.md
- Explore the live demo
- Review FEATURES.md

### For Developers
- Read README.md
- Review app/page.tsx for structure
- Check lib/db.ts for database setup
- Explore components/ui/ for available components

### For Deployment
- Read DEPLOYMENT.md
- Choose hosting platform
- Set up database
- Configure environment variables

### For Customization
- Modify colors in Tailwind classes
- Update content in component files
- Add new pages following existing patterns
- Extend database schema with Prisma

---

## 🚀 Next Steps

1. **Explore** - Navigate through all pages
2. **Customize** - Update colors, text, and content
3. **Deploy** - Choose hosting platform and deploy
4. **Enhance** - Add authentication, payments, notifications
5. **Scale** - Add more features and expand functionality

---

## 📞 Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
- [Lucide Icons](https://lucide.dev)

---

**Bloom & Gift - Making it easy to never miss an important date and always find the perfect gift! 🌹💝**
