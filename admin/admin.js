// Admin Panel JavaScript Functions

// Authentication functions
const AdminAuth = {
    isLoggedIn: function() {
        return localStorage.getItem('adminLoggedIn') === 'true';
    },
    
    login: function(username, password) {
        // Simple authentication - in a real application, this should be done server-side
        const validCredentials = {
            username: 'admin',
            password: 'password123'
        };
        
        if (username === validCredentials.username && password === validCredentials.password) {
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminUsername', username);
            return true;
        }
        return false;
    },
    
    logout: function() {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminUsername');
    },
    
    getUsername: function() {
        return localStorage.getItem('adminUsername') || 'Admin';
    }
};

// File management functions
const FileManager = {
    // Get list of HTML files
    getHtmlFiles: function() {
        // In a real application, this would fetch from server
        return [
            { name: 'about.html', path: './about.html' },
            { name: 'cart.html', path: './cart.html' },
            { name: 'checkout.html', path: './checkout.html' },
            { name: 'contact.html', path: './contact.html' },
            { name: 'create.html', path: './create.html' },
            { name: 'index.html', path: './index.html' },
            { name: 'products.html', path: './products.html' },
            { name: 'sell.html', path: './sell.html' },
            { name: 'services.html', path: './services.html' },
            { name: 'about.html', path: 'ar/about.html' },
            { name: 'cart.html', path: 'ar/cart.html' },
            { name: 'checkout.html', path: 'ar/checkout.html' },
            { name: 'contact.html', path: 'ar/contact.html' },
            { name: 'create.html', path: 'ar/create.html' },
            { name: 'index.html', path: 'ar/index.html' },
            { name: 'products.html', path: 'ar/products.html' },
            { name: 'sell.html', path: 'ar/sell.html' },
            { name: 'services.html', path: 'ar/services.html' },
            { name: 'about.html', path: 'en/about.html' },
            { name: 'cart.html', path: 'en/cart.html' },
            { name: 'checkout.html', path: 'en/checkout.html' },
            { name: 'contact.html', path: 'en/contact.html' },
            { name: 'create.html', path: 'en/create.html' },
            { name: 'index.html', path: 'en/index.html' },
            { name: 'products.html', path: 'en/products.html' },
            { name: 'sell.html', path: 'en/sell.html' },
            { name: 'services.html', path: 'en/services.html' }
        ];
    },
    
    // Load file content (simulated)
    loadFile: function(filePath) {
        // In a real application, this would fetch from server
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`<!-- Content of ${filePath} -->
<!DOCTYPE html>
<html>
<head>
    <title>${filePath.split('/').pop().replace('.html', '')}</title>
</head>
<body>
    <h1>${filePath.split('/').pop().replace('.html', '')}</h1>
    <p>This is the content of ${filePath}</p>
</body>
</html>`);
            }, 1000);
        });
    },
    
    // Save file content (simulated)
    saveFile: function(filePath, content) {
        // In a real application, this would send to server
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`File ${filePath} saved with content:`, content);
                resolve(true);
            }, 500);
        });
    }
};

// UI utility functions
const UI = {
    showMessage: function(message, type = 'info') {
        const messageDiv = document.getElementById('message');
        if (messageDiv) {
            messageDiv.textContent = message;
            messageDiv.className = `message ${type}`;
            messageDiv.style.display = 'block';
            
            // Hide message after 3 seconds
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 3000);
        }
    },
    
    showLoading: function(containerId, message = 'Loading...') {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `<div class="loading">${message}</div>`;
        }
    },
    
    hideLoading: function(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '';
        }
    }
};

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication on protected pages
    const protectedPages = ['dashboard.html', 'editor.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage) && !AdminAuth.isLoggedIn()) {
        window.location.href = 'index.html';
    }
    
    // Set welcome message on dashboard
    if (currentPage === 'dashboard.html') {
        const welcomeElement = document.getElementById('welcome-message');
        if (welcomeElement) {
            welcomeElement.textContent = `Welcome, ${AdminAuth.getUsername()}!`;
        }
    }
});