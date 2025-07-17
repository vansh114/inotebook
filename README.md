# iNotebook - Your Notes Secured in the Cloud
A full-stack note-taking application built with React.js and Node.js that allows users to securely create, read, update, and delete their personal notes in the cloud.

## 📋 Table of Contents
- Features
- Tech Stack
- Project Structure
- Installation
- API Endpoints
- Usage
- Contributing
- License
## ✨ Features
- User Authentication : Secure user registration and login with JWT tokens
- CRUD Operations : Create, read, update, and delete notes
- User-specific Notes : Each user can only access their own notes
- Responsive Design : Mobile-friendly interface using Bootstrap
- Real-time Alerts : Success and error notifications
- Secure Storage : Password hashing with bcrypt
- Cloud-based : Notes are stored securely in MongoDB
- Tag Support : Organize notes with custom tags
## 🛠 Tech Stack
### Backend
- Node.js - Runtime environment
- Express.js - Web framework
- MongoDB - NoSQL database
- Mongoose - MongoDB object modeling
- JWT - JSON Web Tokens for authentication
- bcryptjs - Password hashing
- express-validator - Input validation
- cors - Cross-Origin Resource Sharing
### Frontend
- React.js - Frontend library
- React Router - Client-side routing
- Context API - State management
- Bootstrap 5 - CSS framework
- Font Awesome - Icons
## 📁 Project Structure
```
iNotebook/
├── backend/
│   ├── middleware/
│   │   └── fetchuser.js
│   ├── models/
│   │   ├── Note.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── notes.js
│   ├── db.js
│   └── index.js
└── src/
    ├── components/
    │   ├── About.js
    │   ├── AddNote.js
    │   ├── Alert.js
    │   ├── Home.js
    │   ├── Login.js
    │   ├── Navbar.js
    │   ├── Noteitem.js
    │   ├── Notes.js
    │   └── Signup.js
    ├── context/
    │   └── notes/
    │       ├── noteContext.
    js
    │       └── NoteState.js
    ├── App.js
    └── index.js
```
## 🚀 Installation
### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager
### Backend Setup
1. Clone the repository
   
   ```
   git clone https://github.
   com/yourusername/inotebook.
   git
   cd inotebook
   ```
2. Install backend dependencies
   
   ```
   cd backend
   npm install
   ```
3. Configure MongoDB
   
   - Update the MongoDB URI in db.js
   - Or use MongoDB Atlas cloud connection string
4. Start the backend server
   
   ```
   node index.js
   ```
   Or use nodemon for development:
   
   ```
   nodemon index.js
   ```
   Server will run on http://localhost:5000
### Frontend Setup
1. Install frontend dependencies
   
   ```
   cd ..
   npm install
   ```
2. Start the React application
   
   ```
   npm start
   ```
   Application will run on http://localhost:3000
3. Run both frontend and backend concurrently
   
   ```
   npm run both
   ```
## 🔌 API Endpoints
### Authentication Routes (/api/auth)
Method Endpoint Description Auth Required POST /createuser Register a new user No POST /login User login No POST /getuser Get user details Yes

### Notes Routes (/api/notes)
Method Endpoint Description Auth Required GET /fetchallnotes Get all user notes Yes POST /addnote Create a new note Yes PUT /updatenote/:id Update existing note Yes DELETE /deletenote/:id Delete a note Yes

## 🎯 Usage
1. Registration : Create a new account on the signup page
2. Login : Sign in with your credentials
3. Add Notes : Use the "Add a Note" form to create new notes
4. View Notes : All your notes are displayed on the home page
5. Edit Notes : Click the edit icon to modify existing notes
6. Delete Notes : Click the trash icon to remove notes
7. Logout : Your session remains active until you clear browser storage
## 🤝 Contributing
1. Fork the repository
2. Create your feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request
## 📝 Future Enhancements
- Note categories and tags filtering
- Search functionality
- Note sharing capabilities
- Dark mode theme
- Email notifications
- File attachments
- Logout functionality
- Profile management
## 📄 License
This project is licensed under the MIT License.