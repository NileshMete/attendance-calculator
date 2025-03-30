# 🎯 React Attendance Calculator

A responsive web application built with React that simplifies lecture attendance calculation. It provides real-time percentage updates and celebratory confetti when you achieve 75%+ attendance. Deployed seamlessly via GitHub Pages.


## 🌐 Live Demo

🚀 **Check out the deployed application:** [Attendance Calculator](https://nileshmete.github.io/attendance-calculator/)

---

## ✨ Features

- 📊 **Real-time Attendance Calculation:** Instant percentage updates as you input lecture data.
- 🎉 **Confetti Celebration:** A festive confetti animation when your attendance hits 75% or higher.
- ⚠️ **Visual Warning:** Clear red indicators for low attendance, ensuring you stay on track.
- 📱 **Fully Responsive Design:** Optimized for seamless use on both mobile and desktop devices.
- 📈 **Safe Absence Calculator:** Calculates the number of additional absences you can afford while maintaining the required attendance.
- 🔢 **Input Validation:** Ensures that only numerical inputs are accepted, preventing errors.

---

## 🚀 Quick Start

### Clone the Repository

```bash
git clone https://github.com/NileshMete/attendance-calculator.git
cd attendance-calculator
```

### Installation

To install the project dependencies, run the following command:

```bash
npm install
```

### Running Locally

To start the development server and run the application locally, use:

```bash
npm start
```

---

## 🚀 Deployment to GitHub Pages

To deploy the application to GitHub Pages, execute:

```bash
npm run deploy
```

The application is automatically deployed using the following configuration in `package.json`:

```json
"homepage": "https://nileshmete.github.io/attendance-calculator",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

---

## 📂 Project Structure

```
attendance-calculator/
├── build/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🛠 Technologies Used

- **React 19:** For building the user interface.
- **React Confetti:** For the celebratory confetti animation.
- **GitHub Pages:** For hosting the web application.
- **CSS3 (Flexbox, Variables):** For responsive and flexible styling.
- **Git:** For version control.

---

## 📌 How It Works

1. **Enter the following information:**
   - Total lectures held.
   - Lectures you attended.
   - Lectures you missed.

2. **The application calculates:**
   - Your current attendance percentage.
   - The total remaining lectures.
   - The number of safe absences remaining.

3. **Get instant visual feedback:**
   - ✅ **Green status** when your attendance is ≥75%.
   - ❌ **Red warning** when your attendance is below 75%.
   - 🎉 **Confetti celebration** upon reaching safe attendance.

---

## 📢 License

This project is open-source and available under the [MIT License](LICENSE).

---

🌟 **Enjoy tracking your attendance effortlessly!**

