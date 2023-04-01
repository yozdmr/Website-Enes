// Get the rectangle elements
const rectangle1 = document.querySelector('.rectangle1');
const rectangle2 = document.querySelector('.rectangle2');
const rectangle3 = document.querySelector('.rectangle3');

// Add a click event listener to each rectangle element
rectangle1.addEventListener('click', () => {
  // Open YouTube in a new window
  window.open('https://www.youtube.com', '_blank');
});

rectangle2.addEventListener('click', () => {
  // Open YouTube in a new window
  window.open('https://www.youtube.com', '_blank');
});

rectangle3.addEventListener('click', () => {
  // Open YouTube in a new window
  window.open('https://www.youtube.com', '_blank');
});

// Add a hover effect to each rectangle element
rectangle1.addEventListener('mouseover', () => {
  rectangle1.style.opacity = 0.7;
});

rectangle1.addEventListener('mouseout', () => {
  rectangle1.style.opacity = 1;
});

rectangle2.addEventListener('mouseover', () => {
  rectangle2.style.opacity = 0.7;
});

rectangle2.addEventListener('mouseout', () => {
  rectangle2.style.opacity = 1;
});

rectangle3.addEventListener('mouseover', () => {
  rectangle3.style.opacity = 0.7;
});

rectangle3.addEventListener('mouseout', () => {
  rectangle3.style.opacity = 1;
});