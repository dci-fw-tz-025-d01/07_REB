import {useState, useEffect} from 'react'
// import fetchPostData
//  from './loadPostData';
function AppLeer() {
    const [showPostDetails, setShowPostDetails] = useState(false);
    const [allPosts, setAllPosts] = useState([]);
    useEffect(()=>{
        const fetchPostData = async()=>{
            const data = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await data.json();
            setAllPosts(json);
        }
        fetchPostData();
    },[]);
    useEffect(()=>{
        // Bitte berechne die Gesamtanzahl der Artikel im Warenkorb neu!
        const warenkorbLaenge = allPosts.length;
    },[allPosts])
  return (
    <>
    {showPostDetails ? 
        <div>
            <span>Insgesamt sind {allPosts.length} Posts vorhanden.</span>
            {allPosts.map((post,id)=>(
                <div key={id}>
                    Post Information: {post.id} : {post.title}
                </div>
            ))}
        </div>
    :
        <div>
            Daten werden geladen...
            <button onClick={(showPostDetails)=>setShowPostDetails(true)}>Jetzt Daten laden</button>
        </div>
    }
    </>
  )
}

export default AppLeer