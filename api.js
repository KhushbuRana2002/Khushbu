import { useEffect, useState } from 'react';
import './App.css';


function Api() {

  const [photos, setPhotos] = useState([]);
console.log(photos)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
    {
      photos?.length > 0 ?
      photos?.map((items)=>(
<div>
  
<h4>{items?.userId}</h4>
<h4>{items?.title}</h4>


</div>
     
     )):""
    }
    </div>
  );
}

export default Api ;