# TaskFlow 📋

A modern, production-ready task management application built with React and TailwindCSS. TaskFlow provides a seamless productivity experience with task creation, organization, filtering, and real-time statistics.

![React](https://img.shields.io/badge/React-61dafb?style=flat&logo=react) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat&logo=tailwindcss) ![Heroicons](https://img.shields.io/badge/Heroicons-1f2937?style=flat&logo=heroicons) ![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=flat&logo=javascript)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c02385f4-8efa-45ea-9642-d65b4800d401/deploy-status)](https://app.netlify.com/projects/sz-taskflow/deploys)

## ✨ Features

### 📝 Task Management
- **Add Tasks** - Create new tasks with titles, descriptions, and due dates
- **Edit Tasks** - Click to edit task details inline
- **Delete Tasks** - Remove tasks with a single click
- **Toggle Completion** - Mark tasks as complete/incomplete with checkboxes
- **Task Categories** - Organize tasks with 6 predefined categories (Work, Personal, Shopping, Health, Finance, General)
- **Due Dates** - Set and track due dates with overdue detection
- **Task Details** - Expandable task details with smooth animations

### 🔍 Search & Organization
- **Real-time Search** - Search tasks by title or category
- **Smart Filters** - Filter by status (All, Active, Completed)
- **Advanced Sorting** - Sort by creation date, completion status, or title
- **Task Statistics** - View total, active, and completed task counts
- **Persistent Storage** - All tasks saved to localStorage

### 🎨 User Experience
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Clean, minimalist design with perfect spacing
- **Smooth Animations** - Elegant transitions and hover effects
- **Icon Integration** - Beautiful Heroicons throughout the interface
- **Ultra-Compact Layout** - Maximum content density with perfect spacing

## 🚀 Tech Stack

### Frontend Core
- **React** - Modern UI library with hooks and functional components
- **React Hooks** - useState, useEffect, useMemo, useCallback for state management
- **React.memo** - Performance optimization for component re-renders

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons from the makers of Tailwind CSS
- **Custom CSS** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach with breakpoint optimization

### State Management
- **Custom Hooks** - useTasks, useDarkMode, useTaskFilters
- **localStorage** - Browser storage for data persistence
- **Error Handling** - Comprehensive error boundaries and validation

### Development Tools
- **React Scripts** - Create React App build scripts
- **PostCSS** - CSS transformations
- **Autoprefixer** - Automatic CSS vendor prefixing
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── ui/                 # Reusable UI component library
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Select.jsx
│   │   ├── Textarea.jsx
│   │   ├── Badge.jsx
│   │   ├── Card.jsx
│   │   ├── StatCard.jsx
│   │   ├── ActionButton.jsx
│   │   └── index.js
│   ├── TaskItem.jsx        # Individual task component
│   ├── TaskList.jsx        # Task list container
│   ├── TaskModal.jsx       # Add/edit task modal
│   ├── Header.jsx          # App header with title and theme toggle
│   ├── StatsCard.jsx      # Statistics display
│   ├── ControlsSection.jsx # Search, filter, and sort controls
│   ├── AddTask.jsx         # Add task button
│   ├── SearchBar.jsx       # Search input component
│   ├── FilterDropdown.jsx  # Filter options
│   ├── SortDropdown.jsx    # Sort options
│   ├── DarkModeToggle.jsx  # Theme toggle button
│   └── ErrorBoundary.jsx   # Error handling component
│
├── hooks/                  # Custom React hooks
│   ├── useTasks.js         # Task state management and persistence
│   ├── useDarkMode.js      # Theme management with localStorage
│   └── useTaskFilters.js   # Search, filter, and sort logic
│
├── utils/                  # Utility functions
│   ├── dateUtils.js        # Date formatting and overdue detection
│   ├── taskUtils.js        # Task operations (filter, sort, search)
│   ├── storageUtils.js     # localStorage helpers with error handling
│   ├── validationUtils.js  # Form validation and sanitization
│   └── cn.js              # Class name utility for Tailwind
│
├── constants/              # Application constants
│   ├── categories.js       # Task categories with icons and colors
│   ├── filters.js          # Filter and sort options
│   └── storage.js          # localStorage keys and default values
│
├── App.jsx                 # Main application component
├── index.js                # Application entry point
└── index.css               # Global styles and Tailwind directives
```


## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/szm96dev/TaskFlow.git

# Navigate to project directory
cd TaskFlow

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain optimized static files
```

## 🎨 UI/UX Highlights

- **Ultra-Compact Design** - Maximum content density with perfect spacing
- **Perfect Icon Alignment** - All icons properly centered and aligned
- **Smooth Animations** - Elegant task expansion and theme transitions
- **Responsive Layout** - Optimized for all device sizes
- **Dark Mode** - Eye-friendly dark theme with smooth transitions
- **Visual Hierarchy** - Clear information architecture
- **Touch Friendly** - Optimized for mobile interactions
- **Professional Polish** - Clean, modern interface design

## ⚡ Performance Optimizations

- **React.memo** - Prevents unnecessary component re-renders
- **useCallback** - Optimized event handlers and functions
- **Code Splitting** - Efficient bundle size and loading
- **localStorage Optimization** - Efficient data persistence
- **Fast Loading** - Optimized for quick startup
- **Efficient Styles** - Minimal and clean CSS


## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
Ejects from Create React App (one-way operation)

## 🎓 Skills Demonstrated

This project showcases proficiency in:

- ✅ Modern React development with hooks
- ✅ Custom hook creation and state management
- ✅ Component architecture and reusability
- ✅ Tailwind CSS utility-first styling
- ✅ Responsive design and mobile optimization
- ✅ Performance optimization techniques
- ✅ localStorage integration and data persistence
- ✅ Form validation and error handling
- ✅ Theme system implementation
- ✅ Icon integration and visual design
- ✅ Code organization and architecture
- ✅ Production-ready code practices

## 🚀 Key Features Implementation

### Task Management
- **CRUD Operations** - Complete create, read, update, delete functionality
- **Real-time Updates** - Instant UI updates for all operations
- **Data Persistence** - Automatic saving to localStorage
- **Form Validation** - Client-side validation with error messages

### Search & Filtering
- **Real-time Search** - Instant filtering as you type
- **Multiple Filters** - Status-based filtering (All, Active, Completed)
- **Advanced Sorting** - Multiple sort options with consistent behavior
- **Smart Categories** - 6 predefined categories with icons and colors

### User Experience
- **Dark Mode** - Smooth theme transitions with localStorage persistence
- **Responsive Design** - Mobile-first approach with perfect scaling
- **Smooth Animations** - Task expansion and theme transitions
- **Ultra-Compact Layout** - Maximum content density

## 🎯 Production Ready

- ✅ **Clean Code** - Well-organized and maintainable
- ✅ **Performance** - Fast and optimized
- ✅ **Responsive** - Works perfectly on all device sizes
- ✅ **User Friendly** - Intuitive interface and smooth experience


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**SiKaNDaR ZuBaIr MaYo**
- GitHub: [@szm96dev](https://github.com/szm96dev)
- LinkedIn: [Sikandar Zubair Mayo](https://www.linkedin.com/in/szm96dev/)
- Portfolio: [Sikandar Portfolio](https://github.com/szm96dev/TaskFlow)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React and TailwindCSS