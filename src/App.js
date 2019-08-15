import React, {useState, useEffect} from "react";
import axios from "axios";
import SpaceCard from "./Components/SpaceCard.js";

import "./App.css";


function App() {
    const [data, setData] = useState({});
    useEffect(() => {
 axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
 .then(response => {
   setData(response.data);
});
}, [])
 
  return (
    <div className="App">
      <SpaceCard title={data.title}
                        url={data.url}
                        explanation={data.explanation} />
    </div>
  );
}

export default App;