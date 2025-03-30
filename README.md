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
"## Installation\n\nTo install the project dependencies, run the following command:\n\n```bash\nnpm install\n```\n\n## Running Locally\n\nTo start the development server and run the application locally, use:\n\n```bash\nnpm start\n```\n\n## Deployment to GitHub Pages\n\nTo deploy the application to GitHub Pages, execute:\n\n```bash\nnpm run deploy\n```\n\n## Project Structure\n\nThe project directory structure is as follows:\n\n```\nattendance-calculator/\n├── build/\n├── public/\n├── src/\n│   ├── App.css\n│   ├── App.js\n│   └── index.js\n├── package.json\n└── README.md\n```\n\n## Technologies Used\n\n-   **React 19:** For building the user interface.\n-   **React Confetti:** For the celebratory confetti animation.\n-   **GitHub Pages:** For hosting the web application.\n-   **CSS3 (Flexbox, Variables):** For responsive and flexible styling.\n-   **Git:** For version control.\n\n## How It Works\n\nTo use the application, follow these steps:\n\n1.  Enter the following information:\n    -   Total lectures held.\n    -   Lectures you attended.\n    -   Lectures you missed.\n\n2.  The application calculates:\n    -   Your current attendance percentage.\n    -   The total remaining lectures.\n    -   The number of safe absences remaining.\n\n3.  Get instant visual feedback:\n    -   Green status when your attendance is ≥75%.\n    -   Red warning when your attendance is below 75%.\n    -   Confetti celebration upon reaching safe attendance.\n\n## Deployment\n\nThe application is automatically deployed to GitHub Pages using the following configuration in `package.json`:\n\n```json\n\"homepage\": \"[https://nileshmete.github.io/attendance-calculator](https://nileshmete.github.io/attendance-calculator)\",\n\"scripts\": {\n  \"predeploy\": \"npm run build\",\n  \"deploy\": \"gh-pages -d build\"\n}\n```"

