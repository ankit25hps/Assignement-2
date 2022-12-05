import { useEffect, useState } from "react";
import "./App.css";

const images = [
  { id: 1, imageName: "Birds.jpeg", tag: "Birds" },
  { id: 2, imageName: "Pizza.jpeg", tag: "Food" },
  { id: 3, imageName: "Places.jpeg", tag: "Places" },
  { id: 4, imageName: "Tiger.jpeg", tag: "Wonders" },
];
function App() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  console.log(filteredImages);
  useEffect(() => {
    tag === "All"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <>
      <div className="bar" handleSetTag={setTag}>
        <h1>Categories - Search</h1>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="tags">
        <Tagbutton name="Birds" handleSetTag={setTag} />
        <Tagbutton name="Food" handleSetTag={setTag} />
        <Tagbutton name="Places" handleSetTag={setTag} />
        <Tagbutton name="Wonders" handleSetTag={setTag} />
      </div>

      <div className="container">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-card">
            <img className="image" src={`/images/${image.imageName}`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
const Tagbutton = ({ name, handleSetTag }) => {
  return (
    <button className="tag" onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );
};

export default App;
