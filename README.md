# 🎯 React Attendance Calculator

A responsive web application built with React that simplifies lecture attendance calculation. It provides real-time percentage updates and celebratory confetti when you achieve 75%+ attendance. Deployed seamlessly via GitHub Pages.

## ✨ Features

- 📊 Real-time Attendance Calculation: Instant percentage updates as you input lecture data.
- 🎉 Confetti Celebration: A festive confetti animation when your attendance hits 75% or higher.
- ⚠️ Visual Warning: Clear red indicators for low attendance, ensuring you stay on track.
- 📱 Fully Responsive Design: Optimised for seamless use on both mobile and desktop devices.
- 📈 Safe Absence Calculator: Calculates the number of additional absences you can afford while maintaining the required attendance.
- 🔢 Input Validation: Ensures that only numerical inputs are accepted, preventing errors.

## 🚀 Quick Start

1. Clone the repository:

   ```bash
   git clone [https://github.com/NileshMete/attendance-calculator.git](https://github.com/NileshMete/attendance-calculator.git)
   cd attendance-calculator
Install dependencies:

Bash

npm install
Run locally:

Bash

npm start
Deploy to GitHub Pages:

Bash

npm run deploy
🛠️ Project Structure
attendance-calculator/
├── build/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
🔧 Technologies Used
React 19: For building the user interface.
React Confetti: For the celebratory confetti animation.
GitHub Pages: For hosting the web application.
CSS3 (Flexbox, Variables): For responsive and flexible styling.
Git: For version control.
📝 How It Works
Enter the following information:

Total lectures held.
Lectures you attended.
Lectures you missed.
The application calculates:

Your current attendance percentage.
The total remaining lectures.
The number of safe absences remaining.
Get instant visual feedback:

Green status when your attendance is ≥75%.
Red warning when your attendance is below 75%.
Confetti celebration upon reaching safe attendance.
🌐 Deployment
The application is automatically deployed via GitHub Pages using the following configuration in package.json:

JSON

"homepage": "[https://nileshmete.github.io/attendance-calculator](https://nileshmete.github.io/attendance-calculator)",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
🤝 Contributing
Contributions are welcome! Here’s how you can contribute:

Fork the project.
Create your feature branch: git checkout -b feature/AmazingFeature   
Commit your changes: git commit -m 'Add some amazing feature'
Push to the branch: git push origin feature/AmazingFeature
Open a Pull Request.
📜 License
Distributed under the MIT License. See LICENSE for more information.   

📧 Contact
Nilesh Mete - @YourTwitter - your.email@example.com

Project Link: https://github.com/NileshMete/attendance-calculator

Made with ❤️ by Nilesh Mete
