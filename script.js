// Create Cursor Ball
const cursor = document.createElement("div");
cursor.classList.add("cursor-ball");
document.body.appendChild(cursor);

// Move Cursor Ball with Mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${
    e.clientY - 10
  }px)`;
});
