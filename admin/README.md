# Admin Panel for Website Management

This admin panel allows you to manage and edit HTML files on your website directly from the browser.

## Features

- Secure login system
- Dashboard with file listing
- File editor with syntax highlighting
- Multi-language support (edit files in different language directories)
- Responsive design

## How to Use

1. **Access the Admin Panel**
   - Navigate to the `admin` directory in your browser
   - Open `index.html` to access the login page

2. **Login**
   - Username: `admin`
   - Password: `password123`
   - *Note: Change these credentials in production*

3. **Managing Files**
   - After logging in, you'll see a dashboard with all HTML files
   - Click "Edit File" to modify any file
   - Click "View" to see the live version of the file
   - Make changes in the editor and click "Save Changes"

4. **Logout**
   - Click the "Logout" button in the top right corner

## File Structure

The admin panel can manage files in the following directories:
- Root directory (./) - Main website files
- ar/ - Arabic language files
- en/ - English language files
- fr/ - French language files
- it/ - Italian language files
- zh/ - Chinese language files

## Security Notes

- This is a client-side admin panel for demonstration purposes
- In a production environment, you should implement server-side authentication and file operations
- Always use HTTPS to protect login credentials
- Change the default username and password

## Customization

- Modify `admin.css` to change the appearance
- Extend `admin.js` to add new functionality
- Update the file listing in `admin.js` to include additional file types

## Browser Support

This admin panel works in all modern browsers that support:
- localStorage
- fetch API
- ES6 JavaScript features