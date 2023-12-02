import React, { useState, useEffect } from "react";
import axios from 'axios';

function Content() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(res => {
        console.log("Data from API:", res.data);
        setDetails(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  
    console.log("Details:", details);
    return (
        <main className="content">
            <hr />
            {details.map((output, id) => (
            <div key={id} className="data-item">
                <h2>{output.prayer_text}</h2>
                <img src={output.img} alt={`Prayer Image ${id}`} />
            </div>
            ))}
        </main>
    );

}

export default Content;