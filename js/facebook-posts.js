// js/facebook-posts.js
// Load and display Facebook posts from Firebase Firestore

document.addEventListener('DOMContentLoaded', () => {
    loadFacebookPosts();
});

async function loadFacebookPosts() {
    const postsGrid = document.getElementById('facebook-posts-grid');
    
    if (!postsGrid) {
        console.warn('Facebook posts grid container not found');
        return;
    }

    try {
        // Check if Firebase is initialized
        if (!firebase || !firebase.firestore) {
            console.error('Firebase not initialized');
            showError(postsGrid, 'Unable to load posts. Please try again later.');
            return;
        }

        const db = firebase.firestore();
        const postsCollection = db.collection('facebook_posts');
        
        // Fetch posts, ordered by created_time descending, limit to 6 posts
        const snapshot = await postsCollection
            .orderBy('created_time', 'desc')
            .limit(6)
            .get();

        if (snapshot.empty) {
            showEmptyState(postsGrid);
            return;
        }

        // Clear loading state
        postsGrid.innerHTML = '';

        // Render each post
        snapshot.forEach((doc, index) => {
            const post = doc.data();
            const postCard = createPostCard(post, index);
            postsGrid.appendChild(postCard);
        });

        // Initialize AOS for newly added elements
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }

    } catch (error) {
        console.error('Error loading Facebook posts:', error);
        showError(postsGrid, 'Failed to load posts. Please try again later.');
    }
}

function createPostCard(post, index) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-lg overflow-hidden group facebook-post-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 100).toString());

    const hasImage = post.image_url && post.image_url.trim() !== '';
    const message = post.message || 'No description available';
    const truncatedMessage = message.length > 150 ? message.substring(0, 150) + '...' : message;
    const formattedDate = formatDate(post.created_time);

    let imageHtml = '';
    if (hasImage) {
        imageHtml = `
            <div class="overflow-hidden">
                <img src="${post.image_url}" alt="Facebook post" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
            </div>
        `;
    }

    card.innerHTML = `
        ${imageHtml}
        <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
                <i class="fab fa-facebook-f text-accent-gold"></i>
                <span class="text-sm text-zinc-500">${formattedDate}</span>
            </div>
            <p class="text-zinc-700 mb-4 line-clamp-3">${truncatedMessage}</p>
            <a href="${post.permalink_url}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold-dark font-semibold transition-colors">
                <span>View on Facebook</span>
                <i class="fas fa-external-link-alt text-sm"></i>
            </a>
        </div>
    `;

    return card;
}

function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
    } catch (error) {
        return dateString;
    }
}

function showEmptyState(container) {
    container.innerHTML = `
        <div class="col-span-full text-center py-12 text-zinc-500">
            <i class="fab fa-facebook-f text-4xl mb-4"></i>
            <p>No posts available yet. Check back soon!</p>
            <a href="https://www.facebook.com/khadockllc" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 mt-4 text-accent-gold hover:text-accent-gold-dark font-semibold transition-colors">
                <i class="fab fa-facebook-f"></i>
                Visit Our Facebook Page
            </a>
        </div>
    `;
}

function showError(container, message) {
    container.innerHTML = `
        <div class="col-span-full text-center py-12 text-red-500">
            <i class="fas fa-exclamation-circle text-4xl mb-4"></i>
            <p>${message}</p>
        </div>
    `;
}
