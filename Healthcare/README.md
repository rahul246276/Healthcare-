# PhysioWell - Physiotherapist Website

A fully functional, mobile-responsive website for a physiotherapy clinic built with HTML, CSS, JavaScript, and Bootstrap 5.

## Features

- **Fully Responsive Design**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multiple Pages**:
  - Home page with hero section and service previews
  - About page with clinic information
  - Services page with detailed treatment information
  - Team page showcasing physiotherapists
  - Appointment booking page with form validation
  - Contact page with map and contact form
- **Interactive Elements**: Form validation, smooth scrolling, animations
- **Bootstrap 5**: Latest Bootstrap framework for responsive layout
- **Bootstrap Icons**: Beautiful icon library for visual elements

## File Structure

```
Healthcare/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── team.html           # Team page
├── appointment.html    # Appointment booking page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. **No Installation Required**: This is a static website that can be opened directly in a web browser.

2. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the Website**:
   - Navigate to `http://localhost:8000` in your browser

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables
- **JavaScript**: Form validation and interactive features
- **Bootstrap 5.3.2**: Responsive framework (loaded via CDN)
- **Bootstrap Icons 1.11.1**: Icon library (loaded via CDN)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0ea5e9;
    --primary-dark: #0284c7;
    /* ... */
}
```

### Content
- Update text content directly in HTML files
- Replace placeholder contact information
- Add your own images (update image paths in HTML)

### Forms
- The forms are currently client-side only
- To make them functional, integrate with a backend service or email service
- Consider using services like Formspree, Netlify Forms, or your own backend

## Features Breakdown

### Navigation
- Fixed top navigation bar
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth scroll to sections

### Forms
- Client-side validation
- Bootstrap validation styling
- Success messages on submission
- Required field indicators

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (576px), md (768px), lg (992px), xl (1200px)
- Flexible grid system
- Touch-friendly buttons and links

## Future Enhancements

- Backend integration for appointment booking
- Patient portal
- Online payment integration
- Blog section
- Patient testimonials carousel
- Live chat integration
- Appointment calendar view

## License

This project is open source and available for use and modification.

## Support

For questions or issues, please contact the development team.

---

**Note**: This is a frontend-only website. For production use, you'll need to:
1. Set up backend services for form submissions
2. Configure email services
3. Add real images and content
4. Set up hosting
5. Configure domain and SSL certificate

