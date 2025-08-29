# 👥 User Management Guide

Complete guide for managing content editors and CMS access in your Lagom Starter site.

## Overview

Your CMS supports two types of users:
- **Email/Password Users**: Perfect for content editors, marketing teams, non-technical users
- **GitHub Users**: Ideal for developers and technical team members

## Setting Up User Authentication

### Initial Setup
1. **Netlify Dashboard** → Your Site → **Site settings** → **Identity**
2. Click **"Enable Identity"**
3. Configure settings:
   - **Registration**: Set to "Invite only" (recommended)
   - **Confirm users**: Enable email confirmation
   - **Allow disposable email**: Disable (security)

### Configure Authentication Providers

#### Email/Password (Built-in)
- Already enabled when you enable Identity
- Users receive invitation emails
- They set their own passwords

#### GitHub OAuth (Optional)
1. **Identity** → **Settings** → **External providers**
2. Click **"Add provider"** → **GitHub**
3. **Default settings work fine** for most cases
4. Save settings

### Enable Git Gateway
1. **Identity** → **Settings** → **Git Gateway**
2. Click **"Enable Git Gateway"**
3. **Select your repository** from the dropdown
4. This allows CMS to save changes to your GitHub repo

## Inviting Users

### Method 1: Email Invitation (Recommended)

#### Step-by-Step Process
1. **Netlify Dashboard** → Your Site → **Identity**
2. Click the **"Invite users"** button (top right)
3. **Fill out the invitation form**:
   - **Email**: Enter the user's email address
   - **Message** (optional): Add context about their role
   - **Metadata** (optional): Add custom fields if needed

#### Sample Invitation Messages
```
Welcome to [Company Name] Content Management!

You've been invited to manage content on our website. 
Click the link below to set up your account and start editing.

Questions? Contact [your-email@company.com]
```

```
Hi [Name],

You now have access to update blog posts and pages on our website.
Use this invitation to create your account.

CMS URL: https://your-site.netlify.app/admin
```

#### What Happens Next
1. **User receives email** with invitation link
2. **User clicks link** → taken to account setup page
3. **User sets password** and confirms email
4. **User can now access** `https://your-site.netlify.app/admin`

### Method 2: GitHub Access

#### For Existing GitHub Users
1. Share your CMS URL: `https://your-site.netlify.app/admin`
2. User clicks **"Login with GitHub"**
3. User authorizes your Netlify app
4. Automatic access granted

#### For New GitHub Users
1. User creates GitHub account at github.com
2. Follow steps above for existing users

## User Roles and Permissions

### Current System (Decap CMS Default)
- **All users have editor access** - can create, edit, delete content
- **No built-in role system** - everyone has same permissions
- **Repository access** - changes are committed to your GitHub repo

### Content Access Control
Users can edit:
- ✅ Blog posts
- ✅ Pages (Home, About, etc.)
- ✅ Site settings (if configured)
- ✅ Navigation menus
- ✅ Upload images/media

Users cannot:
- ❌ Access code files
- ❌ Change site configuration
- ❌ Modify CMS settings
- ❌ Access server/hosting settings

## Managing Existing Users

### View All Users
1. **Netlify Dashboard** → Your Site → **Identity**
2. See list of all users with:
   - Email addresses
   - Registration status
   - Last login time
   - Authentication method

### User Actions

#### Resend Invitation
- For users who haven't accepted yet
- Click **"Resend"** next to their email
- Useful if original email was lost/deleted

#### Remove User Access
1. Click on the user's email
2. Click **"Delete user"**
3. Confirm deletion
4. User immediately loses CMS access

#### Reset User Password
1. Click on user's email
2. Click **"Send recovery email"**
3. User receives password reset link
4. They can set new password

### Bulk Operations
- **Export user list**: Use Netlify API or manual copy
- **Mass invitations**: Send multiple invites one by one
- **User cleanup**: Regular review and removal of inactive users

## Security Best Practices

### Invitation Management
- ✅ **Use work emails** when possible
- ✅ **Add context** in invitation messages
- ✅ **Set expectations** about their role
- ✅ **Monitor invitation acceptance** (follow up if needed)

### Access Control
- ✅ **Regular access reviews** (monthly/quarterly)
- ✅ **Remove inactive users** promptly
- ✅ **Use strong password requirements**
- ✅ **Enable two-factor authentication** (when available)

### Content Security
- ✅ **Train users** on content guidelines
- ✅ **Review changes** through Git history
- ✅ **Backup content** regularly
- ✅ **Monitor for** inappropriate content

## Troubleshooting Common Issues

### Invitation Problems

#### "Email not received"
1. **Check spam/junk folders** first
2. **Verify email spelling** in Netlify dashboard
3. **Try different email provider** (Gmail, Outlook, etc.)
4. **Resend invitation** after 10 minutes
5. **Contact support** if persistent issues

#### "Invitation link expired"
1. **Resend new invitation** from dashboard
2. **User must complete setup within 24 hours**
3. **Check if user already has account**

### Login Issues

#### "Unable to login with email/password"
1. **Verify user completed** invitation setup
2. **Check if password reset** needed
3. **Try incognito/private mode**
4. **Clear browser cache** and cookies
5. **Disable browser extensions** temporarily

#### "GitHub login fails"
1. **Check if GitHub provider** enabled in settings
2. **User may need to re-authorize** app
3. **Try different browser**
4. **Check GitHub account status**

### CMS Access Issues

#### "Can't save changes"
1. **Verify Git Gateway** is enabled
2. **Check repository permissions**
3. **User may need** to refresh page
4. **Check browser console** for errors

#### "Missing content sections"
1. **Check CMS configuration** file
2. **Verify user has** required permissions
3. **Browser cache** may need clearing

## Advanced User Management

### Custom User Metadata
Add custom fields to user profiles:

```javascript
// In your Netlify functions or CMS config
{
  "department": "Marketing",
  "role": "Content Editor", 
  "hire_date": "2024-01-15",
  "permissions": ["blog", "pages"]
}
```

### Integration with Other Systems
- **Slack notifications** when users join/leave
- **Google Analytics** tracking of editor activity
- **Webhook notifications** for content changes
- **SAML/SSO integration** for enterprise setups

### API Access for Advanced Management

```javascript
// Example: Bulk user invitation via Netlify API
const inviteUsers = async (emailList) => {
  const response = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/identity/users`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: 'temp-password',
      confirm: true
    })
  });
};
```

## Getting Help

### Documentation Resources
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
- [Decap CMS Authentication](https://decapcms.org/docs/authentication-backends/)
- [Git Gateway Setup](https://docs.netlify.com/visitor-access/git-gateway/)

### Support Channels
- **GitHub Issues**: Technical problems with the starter
- **Netlify Support**: Authentication and hosting issues
- **Community Forum**: General CMS questions

### Emergency Access
If you lose admin access:
1. **Use Netlify dashboard** to manage users
2. **Access via GitHub** if enabled
3. **Contact Netlify support** for account recovery
4. **Use Git commits** to recover content if needed
