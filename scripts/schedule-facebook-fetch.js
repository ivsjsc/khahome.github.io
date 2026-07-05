const cron = require('node-cron');
const { fetchFacebookPosts } = require('./fetch-facebook-posts');
require('dotenv').config();

// Schedule Facebook post fetching every 6 hours
// Cron expression: 0 */6 * * * (At minute 0 past every 6th hour)
cron.schedule('0 */6 * * *', async () => {
  console.log('Starting scheduled Facebook post fetch...');
  try {
    await fetchFacebookPosts();
    console.log('Scheduled Facebook post fetch completed successfully');
  } catch (error) {
    console.error('Error during scheduled Facebook post fetch:', error);
  }
});

console.log('Facebook post fetcher scheduler started. Posts will be fetched every 6 hours.');
console.log('To run manually, use: node scripts/fetch-facebook-posts.js');

// Keep the process running
process.on('SIGINT', () => {
  console.log('Scheduler stopped');
  process.exit(0);
});
