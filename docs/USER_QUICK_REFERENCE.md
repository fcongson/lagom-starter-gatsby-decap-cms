# 🚀 Quick Reference: Adding CMS Users

## 30-Second User Invitation

### For Content Editors (Non-Technical)
1. **Netlify Dashboard** → Your Site → **Identity** → **"Invite users"**
2. **Enter email** + optional message
3. **Click "Send invite"**
4. **Share with them**: "Check email, click link, set password, visit [your-site]/admin"

### For Developers
1. **Share URL**: `https://your-site.netlify.app/admin`
2. **Tell them**: "Click 'Login with GitHub'"

---

## Common Tasks

| Task | Steps |
|------|--------|
| **Invite user** | Identity → Invite users → Enter email → Send |
| **Remove user** | Identity → Click user → Delete user |
| **Resend invite** | Identity → Click "Resend" next to pending invite |
| **Reset password** | Identity → Click user → Send recovery email |

---

## Troubleshooting Checklist

**User can't access CMS?**
- [ ] Identity enabled?
- [ ] Git Gateway enabled?
- [ ] User accepted invitation?
- [ ] Try incognito mode
- [ ] Check spam folder for invitation

---

## Sample Invitation Message

```
Welcome to [Company] Content Management!

You can now edit website content at:
https://your-site.netlify.app/admin

1. Check this email for invitation link
2. Click link to set your password  
3. Bookmark the admin URL above
4. Questions? Email [your-email]
```

---

**📖 Full Guide**: See `docs/USER_MANAGEMENT.md` for complete instructions
