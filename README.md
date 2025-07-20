# Risk Pro Consulting

![Risk Pro Consulting Logo](/public/RiskPro.PNG)

## Overview

Risk Pro Consulting is a modern, responsive website built with React and Bootstrap 5 for a professional consulting firm specializing in risk management services. The site features an elegant design with glassmorphism effects, dark/light theme support, and a smooth user experience.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Interactive theme toggle with smooth transitions
- **Glassmorphism UI**: Modern glass-effect UI components across the site
- **Interactive Components**: Animated cards, navigation, and UI elements
- **Section-based Layout**: Home, About, Services, and Contact pages in a single-page application
- **Custom SVG Backgrounds**: Different background patterns for home and content pages
- **Bootstrap 5 Integration**: Leveraging Bootstrap components with custom styling

## Technologies Used

- **React** (v19): Frontend library for building the user interface
- **Bootstrap 5**: CSS framework for responsive design
- **Vite**: Fast build tooling and development server
- **CSS3**: Custom styling with modern CSS features
- **ESLint**: Code quality and style checking

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/risk-pro-consulting.git
   cd risk-pro-consulting
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn
   ```

3. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
risk-pro-consulting/
├── public/               # Static assets
│   └── RiskPro.PNG       # Logo image
├── src/                  # Source files
│   ├── assets/           # Additional assets
│   ├── components/       # React components
│   │   ├── AboutUs.jsx   # About section component
│   │   ├── Contact.jsx   # Contact section component
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Hero.jsx      # Hero/Home section component
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── Services.jsx  # Services section component
│   │   └── ThemeProvider.jsx  # Theme context provider
│   ├── styles/           # CSS files
│   │   ├── about.css     # About section styles
│   │   ├── animations.css # Animation styles
│   │   ├── contact.css   # Contact section styles
│   │   ├── footer.css    # Footer styles
│   │   ├── globals.css   # Global styles
│   │   ├── hero.css      # Hero section styles
│   │   ├── navbar.css    # Navigation styles
│   │   ├── services.css  # Services section styles
│   │   └── utilities.css # Utility classes
│   ├── App.jsx           # Main application component
│   ├── index.css         # Entry CSS file
│   └── main.jsx          # Entry point
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Build for Production

To build the project for production:

```
npm run build
```

or

```
yarn build
```

The build output will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```
npm run preview
```

or

```
yarn preview
```

## Features Breakdown

### Navigation

- **Responsive Navbar**: Adapts to different screen sizes
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Theme Toggle**: Switches between light and dark modes with animations

### Home/Hero Section

- **Bold Headline**: Clear value proposition
- **Call to Action**: Direct users to key services
- **Clean Design**: Minimalist approach for professional appearance

### About Us Section

- **Glassmorphism Cards**: Modern card layout with hover effects
- **Team Information**: Details about the consulting team
- **Company Vision**: Clear articulation of values and approach

### Services Section

- **Service Cards**: Detailed cards showcasing different service offerings
- **Pricing Information**: Transparent pricing structure
- **Target Markets**: Visual indicators of industry focus

### Contact Section

- **Contact Form**: Easy-to-use inquiry form
- **Social Media Links**: Connect through various platforms
- **Location Information**: Physical presence details

### Footer

- **Copyright Information**: Legal protection
- **Additional Links**: Quick access to key pages
- **Social Media Icons**: Compact social media presence

## Design Elements

- **Color Scheme**: Professional blue and gray palette with accent colors
- **Typography**: Clean, readable fonts (Inter)
- **Glassmorphism**: Semi-transparent elements with blur effects
- **Animations**: Subtle transitions and hover effects
- **SVG Backgrounds**: Custom background patterns that change based on theme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[MIT](https://choosealicense.com/licenses/mit/)


&copy; 2025 Risk Pro Consulting. All Rights Reserved.
