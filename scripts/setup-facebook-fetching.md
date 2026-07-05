# Facebook Post Fetching Setup Guide

## Prerequisites

1. **Facebook Page Access Token**
   - Go to Facebook Developer Portal: https://developers.facebook.com/
   - Create an app or use existing one
   - Add "Facebook Login" product
   - Get a Page Access Token for your page (khadockllc)
   - Set the environment variable: `FACEBOOK_ACCESS_TOKEN=your_token_here`

2. **Firebase Service Account**
   - Go to Firebase Console: https://console.firebase.google.com/
   - Navigate to Project Settings > Service Accounts
   - Click "Generate New Private Key"
   - Save the JSON file as `firebase-service-account.json` in the project root
   - **IMPORTANT**: Never commit this file to git (add to .gitignore)

## Installation

Install required dependencies:
```bash
npm install firebase-admin node-cron dotenv
```

## Environment Variables

Create a `.env` file in the project root:
```
FACEBOOK_ACCESS_TOKEN=your_facebook_page_access_token
```

## Running the Script

Manual fetch:
```bash
node scripts/fetch-facebook-posts.js
```

## Scheduled Fetching

The script can be scheduled using cron jobs or other task schedulers to automatically fetch posts periodically.

## Firestore Collection Structure

The script will create/update a `facebook_posts` collection with the following structure:
- id: string (Facebook post ID)
- message: string (Post content)
- created_time: string (ISO timestamp)
- image_url: string (URL to post image)
- permalink_url: string (Link to Facebook post)
- updated_at: timestamp (Last update time)
