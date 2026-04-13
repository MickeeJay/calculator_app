# Simple JavaScript Calculator


A lightweight, responsive calculator built with **HTML, CSS, and vanilla JavaScript**. Designed with clean structure and separation of concerns for easy scalability and deployment.


## Features
- Basic arithmetic operations (+, -, *, /)
- Clear and delete functionality
- Responsive grid layout
- Clean UI with minimal styling
- Modular code structure (HTML, CSS, JS separated)


## Project Structure
```
calculator-app/
│── index.html   # Markup structure
│── styles.css   # Styling and layout
│── script.js    # Application logic
```


## Getting Started
1. Clone or download the project
2. Ensure all files are in the same directory
3. Open `index.html` in your browser


No build tools or dependencies required.


## Usage
- Click buttons to input numbers and operators
- Use `C` to clear the display
- Use `DEL` to remove the last character
- Press `=` to evaluate the expression


## Technical Notes
- Uses DOM event listeners with `data-*` attributes for cleaner interaction handling
- Evaluation is handled via `eval()` (note: not recommended for production-grade applications)


## Improvements (Optional)
- Replace `eval()` with a safe expression parser
- Add keyboard input support
- Improve error handling and input validation
- Convert to a framework-based app (React, Vue)


## License
MIT
