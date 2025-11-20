const fetchPostData = async(setAllPosts)=>{
            const data = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await data.json();
            setAllPosts(json);
}

export default fetchPostData;