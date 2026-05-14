# TaskFlow - Professional Task Management Platform

A modern, full-stack task management application with team collaboration features.

## Features

### Core Functionality
- ✅ User registration with email verification
- ✅ Secure authentication and session management
- ✅ Personal task dashboard (private to each user)
- ✅ Create, edit, delete, and archive tasks
- ✅ Task priorities (High, Medium, Low)
- ✅ Task statuses (Not Started, In-Progress, Completed)
- ✅ Due dates and frequency tracking

### Collaboration
- ✅ Assign tasks to team members via email
- ✅ Email notifications for assigned tasks
- ✅ Track who assigned each task
- ✅ Force registration for non-users

### Export & Sharing
- ✅ Export tasks to CSV, PDF, or Markdown
- ✅ Print filtered task lists
- ✅ Share tasks as calendar events (.ics)
- ✅ Share via email
- ✅ Create reminders

### User Experience
- ✅ Real-time statistics dashboard
- ✅ Smart filtering (priority, status, archived)
- ✅ Responsive design (works on all devices)
- ✅ Modern, professional UI
- ✅ Smooth animations and transitions

## Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript (Vanilla)
- Glassmorphism design
- Responsive grid layouts

**Backend:**
- Supabase (PostgreSQL database)
- Supabase Auth (email/password)
- Row-level security policies

**Deployment:**
- Vercel (frontend hosting)
- Supabase (backend as a service)

**Libraries:**
- Supabase JS Client
- jsPDF (PDF generation)
- jsPDF AutoTable (table formatting)

## Quick Start

### 1. Setup Supabase

1. Create account at https://supabase.com
2. Create new project
3. Run `database-schema.sql` in SQL Editor
4. Copy your project URL and anon key

### 2. Configure Application

1. Open `config.js`
2. Replace placeholders with your Supabase credentials:
   ```javascript
   const SUPABASE_URL = 'your-project-url';
   const SUPABASE_ANON_KEY = 'your-anon-key';
   ```

### 3. Deploy

#### Option A: Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy (automatic)

#### Option B: GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select main branch

### 4. Test

1. Visit your deployed URL
2. Register a new account
3. Verify email
4. Sign in and start creating tasks!

## File Structure

```
taskflow-app/
├── index.html              # Landing page
├── register.html           # User registration
├── signin.html             # User sign-in
├── dashboard.html          # Main application dashboard
├── styles.css              # Global styles
├── config.js               # Supabase configuration
├── database-schema.sql     # Database setup
├── SETUP-GUIDE.txt         # Detailed setup instructions
└── README.md               # This file
```

## Database Schema

### profiles
- User profile information
- Linked to auth.users
- Stores full name and metadata

### tasks
- Task management
- User-specific (row-level security)
- Supports sharing and assignment

## Security Features

- Row-level security (users only see their own data)
- Secure password requirements (8+ chars, 1 capital, 1 number, 1 special)
- Email verification required
- Session-based authentication
- HTTPS enforced in production

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use for personal or commercial projects

## Support

For detailed setup instructions, see `SETUP-GUIDE.txt`

For issues or questions:
1. Check the troubleshooting section in SETUP-GUIDE.txt
2. Review Supabase documentation
3. Create an issue in your GitHub repository

## Credits

Built with ❤️ for productive teams

---

**Note:** This is a full-stack application requiring backend setup.
Follow SETUP-GUIDE.txt for complete deployment instructions.
