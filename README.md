# School Management System

A comprehensive school management system built with Next.js, featuring form validation, image uploads, and responsive design.

## Features

- ✅ Add schools with detailed information
- ✅ View schools in a responsive grid layout
- ✅ Form validation with react-hook-form and Zod
- ✅ Image upload functionality
- ✅ Responsive design (mobile and desktop compatible)
- ✅ In-memory database for development (easily switchable to MySQL)

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: react-hook-form with Zod validation
- **Database**: In-memory storage (development) / MySQL (production ready)
- **Image Upload**: Multer for file handling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd school-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Project Structure

```
src/
├── app/
│   ├── addSchool/          # Add school form page
│   ├── showSchools/        # Display schools grid page
│   ├── api/
│   │   ├── schools/        # CRUD operations for schools
│   │   └── upload/         # Image upload endpoint
│   └── layout.tsx          # Root layout with navigation
├── components/
│   ├── SchoolForm.tsx      # Form component with validation
│   └── SchoolGrid.tsx      # School display grid component
└── lib/
    └── database.ts         # Database connection and queries
```

## API Endpoints

- `GET /api/schools` - Get all schools
- `POST /api/schools` - Add a new school
- `POST /api/schools/upload` - Upload school image
- `GET /api/health` - Health check endpoint

## Database Setup (Production)

For production use with MySQL:

1. Update `.env.local` with your MySQL credentials:
```env
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=your_password
DATABASE_NAME=school_management
```

2. Replace the in-memory database in `src/lib/database.ts` with MySQL connection:
```typescript
// Replace with actual MySQL connection code
import mysql from 'mysql2/promise';
```

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically

### Netlify Deployment

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables in Netlify dashboard

## Usage

1. **Add a School**: Navigate to `/addSchool` and fill out the form with school details
2. **View Schools**: Go to `/showSchools` to see all registered schools in a grid layout
3. **Home Page**: The landing page provides quick access to both features

## Form Validation

The form includes comprehensive validation:
- Required fields validation
- Email format validation
- Contact number validation (numeric, min 10 digits)
- File type validation (images only)
- File size validation (max 5MB)

## Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
