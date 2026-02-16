# Netlify Forms Setup for JG Designs

The contact form is configured for **Netlify Forms**. After deploying to Netlify:

## 1. Enable Email Notifications

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site configuration** → **Forms**
4. Click **Form notifications** → **Add notification** → **Email notification**
5. Enter the email address (e.g. `hello@jgdesigns.com`) to receive submissions
6. Save

## 2. Form Submissions

- Submissions are stored in **Netlify Dashboard** → **Forms** → **contact**
- You'll receive an email for each submission (after configuring above)
- The form includes a honeypot field (`bot-field`) to reduce spam

## 3. Form Fields

| Field   | Name    | Purpose        |
|---------|---------|----------------|
| Name    | `name`  | Sender's name  |
| Email   | `email` | Sender's email |
| Message | `message` | Message content |

## 4. Free Tier Limits

Netlify Forms free tier: **100 submissions/month**. Upgrade for more.
