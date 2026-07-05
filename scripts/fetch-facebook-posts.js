const admin = require('firebase-admin');
const serviceAccount = require('../firebase-service-account.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'khadoremodeling'
});

const db = admin.firestore();

// Facebook Graph API configuration
const FACEBOOK_PAGE_ID = 'khadockllc';
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const FACEBOOK_API_VERSION = 'v18.0';

async function fetchFacebookPosts() {
  try {
    console.log('Fetching Facebook posts...');
    
    const url = `https://graph.facebook.com/${FACEBOOK_API_VERSION}/${FACEBOOK_PAGE_ID}/posts?access_token=${FACEBOOK_ACCESS_TOKEN}&fields=id,message,created_time,full_picture,permalink_url,attachments{media_type,type,url}&limit=10`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(`Facebook API Error: ${data.error.message}`);
    }
    
    const posts = data.data || [];
    console.log(`Fetched ${posts.length} posts from Facebook`);
    
    // Store posts in Firestore
    const batch = db.batch();
    const postsCollection = db.collection('facebook_posts');
    
    for (const post of posts) {
      const postRef = postsCollection.doc(post.id);
      
      // Extract image from attachments or full_picture
      let imageUrl = post.full_picture || '';
      if (post.attachments && post.attachments.data && post.attachments.data.length > 0) {
        const attachment = post.attachments.data[0];
        if (attachment.media && attachment.media.image) {
          imageUrl = attachment.media.image.src;
        } else if (attachment.media && attachment.media.source) {
          imageUrl = attachment.media.source;
        }
      }
      
      const postData = {
        id: post.id,
        message: post.message || '',
        created_time: post.created_time,
        image_url: imageUrl,
        permalink_url: post.permalink_url,
        updated_at: admin.firestore.FieldValue.serverTimestamp()
      };
      
      batch.set(postRef, postData, { merge: true });
    }
    
    await batch.commit();
    console.log('Successfully saved Facebook posts to Firestore');
    
    return posts;
  } catch (error) {
    console.error('Error fetching Facebook posts:', error);
    throw error;
  }
}

// Run the function if called directly
if (require.main === module) {
  fetchFacebookPosts()
    .then(() => {
      console.log('Facebook posts fetched successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Failed to fetch Facebook posts:', error);
      process.exit(1);
    });
}

module.exports = { fetchFacebookPosts };
