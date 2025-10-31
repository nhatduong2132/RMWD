# 🧠 Frontend Web Development with React — SET03  
### 👨‍💻 Student: **Dương Quang Nhật**  
### 🆔 ID: **FTH00033**  
### 🧾 Subject: **RMWD (Responsive Modern Web Design)**  
### 🗓️ Submission Date: *October 2025*

---

## 📘 1. Project Overview
This project is a **ReactJS + Vite** website designed for **FPT Aptech** as part of the RMWD practical test (SET03).  
It demonstrates the ability to:
- Build a responsive website using **ReactJS**.
- Structure the layout with **Header, Body, Footer**.
- Load and render data dynamically from **JSON files (objects.json & subjects.json)**.
- Apply **responsive design** and **hover animations** for a clean, modern UI.

---

## 🏗️ 2. Project Structure
```
fpt-aptech/
├─ public/
│  └─ image/
│     ├─ banner.png
│     ├─ highschool.png
│     ├─ student.png
│     ├─ working.png
│     ├─ reactjs.png
│     ├─ php.png
│     └─ net.png
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Footer.jsx
│  │  ├─ ObjectCard.jsx
│  │  └─ SubjectCard.jsx
│  ├─ data/
│  │  ├─ objects.json
│  │  └─ subjects.json
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ App.jsx
│  ├─ App.css
│  └─ main.jsx
└─ index.html
```

---

## 🧩 3. Features Implemented

| Feature | Description | Status |
|----------|--------------|--------|
| **Header / Navigation** | Includes logo, menu links, Sign In / Sign Up buttons | ✅ |
| **Banner Section** | Displays a static image banner from `public/image` | ✅ |
| **Objects Section** | Dynamically renders student types (from `objects.json`) | ✅ |
| **Subjects Section** | Dynamically renders subjects (from `subjects.json`) | ✅ |
| **Responsive Layout** | Adjusts for mobile/tablet/desktop with clean layout | ✅ |
| **Hover Animation** | Cards lift and scale slightly on hover | ✅ |
| **Footer** | Simple centered footer with address | ✅ |

---

## 🎨 4. Technologies Used

| Category | Tools |
|-----------|-------|
| **Frontend Framework** | ReactJS (Vite) |
| **Styling** | CSS3 with Flexbox, Media Queries |
| **Data Handling** | Static JSON (objects.json, subjects.json) |
| **Assets** | Images from `/public/image` |
| **IDE** | Visual Studio Code |
| **Version Control** | Git (local) |

---

## 📱 5. Responsive Design Behavior

| Screen Size | Layout Behavior |
|--------------|----------------|
| **≥ 1024px (Desktop)** | Full-width layout, Header inline, 3 columns for Object Cards |
| **768–1023px (Tablet)** | Header centered, buttons smaller, 2 columns for Object Cards |
| **≤ 767px (Mobile)** | Header stacked vertically, menu centered, cards in single column |

---

## ⚙️ 6. How to Run the Project

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run in Development Mode
```bash
npm run dev
```
> Then open your browser at [http://localhost:5173](http://localhost:5173)

---

## 📂 7. Data Files

### **objects.json**
Defines the audience types (High School, Student, Working):
```json
[
  {
    "id": 1,
    "title": "High School Student",
    "description": "You want to pursue information technology, want to study in a professional programming training environment, with a systematic program and guaranteed output.",
    "image": "image/highschool.png"
  },
  {
    "id": 2,
    "title": "Student",
    "description": "You want to pursue information technology, want to study in a professional programming training environment, with a systematic program and guaranteed output.",
    "image": "image/student.png"
  },
  {
    "id": 3,
    "title": "Working",
    "description": "You want to pursue information technology, want to study in a professional programming training environment, with a systematic program and guaranteed output.",
    "image": "image/working.png"
  }
]
```

### **subjects.json**
Defines the subjects taught at FPT Aptech:
```json
[
  {
    "id": 1,
    "subject": "ReactJS",
    "description": "Includes 04 semesters with important technologies such as ReactJS, PHP, Python, .NET Core, Spring Boot...",
    "image": "image/reactjs.png"
  },
  {
    "id": 2,
    "subject": "PHP",
    "description": "Includes 04 semesters with important technologies such as ReactJS, PHP, Python, .NET Core, Spring Boot...",
    "image": "image/php.png"
  },
  {
    "id": 3,
    "subject": ".NET",
    "description": "Includes 04 semesters with important technologies such as ReactJS, PHP, Python, .NET Core, Spring Boot...",
    "image": "image/net.png"
  }
]
```

---

## 💡 8. Responsive + UI Highlights

- Header adjusts automatically with **media queries**.
- Navigation becomes centered on mobile.
- All images resize smoothly using `%` width.
- Cards have **hover transform** and subtle **box-shadow transition**.
- Container uses **max-width: 1200px** for consistent alignment.

---

## 🏁 9. Result Preview

**✅ Final Output Layout (Pixel Perfect)**  
Includes:
- Header (Logo + Menu + Buttons)
- Banner
- Object Section (3 Cards)
- Subject Section (Logos + Description)
- Footer

> Fully responsive across desktop, tablet, and mobile devices.

---

## 🧾 10. Author

**Name:** Dương Quang Nhật  
**Student ID:** FTH00033  
**Course:** RMWD – Responsive Modern Web Design  
**Instructor:** FPT Aptech Faculty  
**Year:** 2025

---

### ⭐ Additional Note
All images are stored in the `/public/image/` folder and loaded dynamically through JSON.  
The design ensures pixel-perfect accuracy with hover effects and responsive behavior optimized for 768px and 500px breakpoints.

---

> *“This project demonstrates fundamental React skills, responsive design thinking, and attention to pixel-perfect UI — the key to modern front-end development.”*
