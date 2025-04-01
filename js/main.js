// HTML/CSS YT D.Gray CSS Project

const year = document.getElementById("year");
// This grabs an HTML element with the ID year, and stores it in a variable named year.
// In HTML code    <time id="year"></time>
const thisYear = new Date().getFullYear();
// This creates a Date object representing the current date and time, then calls .getFullYear() to extract just the current year (like 2025), and stores it in thisYear.
year.setAttribute("datetime", thisYear);
// This sets the datetime attribute of the <time> element to the current year. It might be used for SEO or semantic HTML purposes.
// In HTML code    This sets the visible text inside the element to the current year,
year.textContent = thisYear;

// Summary:
// This script auto-updates the year in your HTML (typically for a footer like “© 2025”) so you don’t have to manually change it every year.
