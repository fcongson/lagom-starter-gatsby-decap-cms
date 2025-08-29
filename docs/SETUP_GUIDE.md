# 🚀 Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Netlify account (free)

## 5-Minute Setup

### Step 1: Deploy to Netlify
1. Click: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fcongson/lagom-starter-gatsby-decap-cms)
2. Connect your GitHub account
3. Choose a repository name
4. Click "Deploy site"

### Step 2: Enable Authentication
1. Go to your Netlify dashboard → Site settings → Identity
2. Click "Enable Identity"
3. Set registration to "Invite only"
4. Under Identity → Settings → External providers → Enable GitHub
5. Under Identity → Settings → Git Gateway → Enable Git Gateway

### Step 3: Invite Users to Your CMS

#### Option A: Invite via Email (Recommended for non-technical users)
1. In your Netlify dashboard, go to **Identity** tab
2. Click **"Invite users"** button
3. Enter the email address of the person you want to invite
4. Add an optional message (e.g., "You've been invited to manage content on [Your Site Name]")
5. Click **"Send invite"**
6. The user will receive an email with a link to set up their account
7. Once they click the link and set their password, they can access `/admin`

#### Option B: GitHub Authentication (For developers)
1. User visits `https://your-site-name.netlify.app/admin`
2. Click "Login with GitHub"
3. Authorize the application
4. They'll be automatically logged into the CMS

#### Managing User Access
- **View all users**: Netlify dashboard → Identity tab
- **Remove access**: Click the user → "Delete user"
- **Resend invitation**: Click "Resend" next to pending invitations
- **Change user role**: Currently all users have editor access (future enhancement)

### Step 4: Access Your CMS
1. Visit `https://your-site-name.netlify.app/admin`
2. Log in with your chosen method (email/password or GitHub)
3. Start editing content!

### Step 5: Local Development (Optional)
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
npm run setup  # Interactive setup script
npm run dev
```

## User Management

### Adding New Content Editors

#### For Non-Technical Users (Email Invitation)
1. **Netlify Dashboard** → Your Site → **Identity**
2. Click **"Invite users"**
3. Enter their email address
4. Optional: Add a personal message explaining their role
5. Click **"Send invite"**
6. **Share these instructions with them**:
   - Check email (including spam folder)
   - Click the invitation link
   - Set a secure password
   - Bookmark `https://your-site-name.netlify.app/admin`

#### For Developers (GitHub Access)
1. Ensure they have GitHub account
2. Add them as collaborator to your repository (optional, for code access)
3. They can log in directly at `/admin` using GitHub

### User Management Best Practices

- **Use descriptive invite messages**: "Welcome to [Company Name] content management system"
- **Set clear expectations**: Let users know what they can edit
- **Regular cleanup**: Remove inactive users periodically
- **Monitor activity**: Check Identity tab for login activity

### Troubleshooting User Access

#### User Can't Access CMS
- ✅ Check if Identity is enabled
- ✅ Verify Git Gateway is enabled
- ✅ Confirm user accepted email invitation
- ✅ Try incognito/private browsing mode
- ✅ Check browser console for errors

#### Invitation Email Not Received
- Check spam/junk folders
- Verify email address spelling
- Resend invitation from Netlify dashboard
- Try different email address if needed

#### User Gets "Login Failed" Error
- Ensure they're using correct login method (email vs GitHub)
- For email users: verify they set password via invitation link
- For GitHub users: check if they authorized the app
- Clear browser cache and try again

## Customization Checklist
- [ ] Update site title in `gatsby-config.js`
- [ ] Replace logo in `static/images/`
- [ ] Customize colors in `src/styles/theme.js`
- [ ] Add your contact information
- [ ] Configure Google Analytics (optional)
- [ ] Set up contact forms
