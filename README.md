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
- npm (v8 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeroyD6/riskproconsulting.git
   cd risk-pro-consulting
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Deployment Instructions

### Building for Production

1. Create an optimized production build:

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

   This will generate a `dist` folder with all optimized files.

2. Preview the production build locally (optional):

   ```bash
   npm run preview
   ```

   or

   ```bash
   yarn preview
   ```

### Hosting Requirements

#### 1. Node.js Hosting (Recommended)

For platforms like Vercel, Netlify, or similar:

- Simply connect your GitHub repository to the platform
- Configure the build command as `npm run build` or `yarn build`
- Set the publish directory to `dist`
- Ensure environment variables are set if needed

#### 2. Traditional Web Hosting

If deploying to traditional web hosting:

- Upload the contents of the `dist` folder to your web server
- Ensure your server is configured to serve a single-page application (SPA)
- Set up proper redirects to route all requests to `index.html`

Example `.htaccess` for Apache servers:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Dependency Management

This project uses React 19, which has some specific requirements:

1. Ensure all dependencies are properly installed:

   ```bash
   npm install
   ```

2. Key dependencies include:

   - React (v19.0.0)
   - React DOM (v19.0.0)
   - Bootstrap (v5.3.7)

3. If encountering any issues with dependencies:

   ```bash
   npm ci --legacy-peer-deps
   ```

4. If updating dependencies, be aware that React 19 may have compatibility issues with certain libraries

### Configuration Requirements

1. Make sure the website has proper SSL/TLS certificates for HTTPS
2. Ensure the server has appropriate CORS settings if connecting to external APIs
3. Check that the server allows for SVG file serving with proper MIME types
4. Set appropriate cache headers for static assets

## Troubleshooting

### Common Issues

1. **White screen after deployment**

   - Check browser console for errors
   - Ensure all path references are relative and don't include absolute URLs
   - Verify the base URL is correctly set in index.html

2. **Missing styles or images**

   - Make sure all assets were properly copied to the production build
   - Verify file permissions on the server
   - Check for case sensitivity issues in file paths (important on Linux servers)

3. **Contact form not working**
   - Verify the Formspree endpoint is correctly configured
   - Check for CORS issues if using a different form submission service
   - Test the form with console logging before deployment

### Performance Optimization

1. **Image optimization**

   - All images should be properly sized and compressed
   - Consider using WebP format with fallbacks for better performance

2. **Code splitting**

   - The app uses React.lazy for component loading
   - Monitor bundle size with `npm run build -- --report`

3. **Cache strategy**
   - Configure long cache times for static assets
   - Use versioned file names for proper cache busting

## Project Structure

```bash
risk-pro-consulting/
├── public/               # Static assets
│   ├── RiskPro.PNG       # Logo image
│   └── founder.jpg       # Founder image
├── src/                  # Source files
│   ├── assets/           # Additional assets
│   ├── components/       # React components
│   │   ├── AboutUs.jsx   # About section component
│   │   ├── BackToTop.jsx # Back to top button component
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
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Build for Production

To build the project for production:


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
