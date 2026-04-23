import { useState } from "react";

export const images = [
    {
    id: 1,
    url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    description: "Spaghetti with tomato sauce",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    description: "Healthy green salad",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    description: "Cheeseburger with fries",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Grilled steak with vegetables",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    description: "Chocolate dessert cake",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentImage = images[currentIndex];

return (
  <div className="app">
    <div className="card">
      <h1>Recipe Gallery</h1>

      <img
        src={currentImage.url}
        alt={currentImage.description}
        className="image"
      />

      <p className="description">{currentImage.description}</p>

      <p className="counter">
        {currentIndex + 1} / {images.length}
      </p>

      <div className="buttons">
        <button onClick={prevImage} disabled={currentIndex === 0}>
          ⬅ Previous
        </button>

        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
        >
          Next ➡
        </button>
      </div>
    </div>
  </div>
)}