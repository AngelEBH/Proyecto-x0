import React, { useEffect, useState } from 'react';
import Card from './Card';

interface PostData{
  id: number;
  title:string;
  body: string;
}

function App() {

  const [posts, setPost] = useState<PostData[]>([]);

  useEffect(() => {    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPost(posts) );
  }, 
  [])

  

  return (
    <div className="App">
    
      {posts.map((post) =>(
    <Card title={post.title} 
    body={post.body} key={post.id}/>
      ))}
    </div>
  );
}

export default App;