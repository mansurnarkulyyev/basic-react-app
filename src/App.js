import React, { useState } from "react";
// import PostItem from "./components/PostItem/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/Ui/MyButton/MyButton";
// import MyInput from "./components/Ui/Input/MyInput";
// import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";
import styles from './styles/App.css'
import PostForm from "./components/PostForm";
import MySelect from "./components/Ui/MySelect";

// React хуки
// useState()
// useEffect()
// useRef()
// useMemo()
// useCallback()
// useContext()

function App() {

  const [posts, setPosts] = useState([
    {id:1, title: "Java", body: "Description"},
    {id:2, title: "script 2", body: "Description"},
    {id:3, title: "Javascript 3", body: "Description"},
  ])
 
  const [selectedSort, setSelectedSort] = useState('') 
  
  const createPost = (newPost) => {
  setPosts([...posts, newPost])
}
 
  const removePost = (post) => {
  setPosts(posts.filter(p => p.id  !== post.id))
}
  
  const sortPosts = (sort) => {
    setSelectedSort(sort)
   setPosts([...posts].sort((a, b)=> a[sort].localeCompare(b[sort])))
  }
  
  return (
    <div className={styles.App}>
      <ClassCounter/>

      <PostForm create={ createPost } />

      <hr style={{margin:"15px 0"}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="sort"
          options={[
            {value: 'title', name:' by name'},
            {value: 'body', name:' by description'},
          ]}
        />
      </div>
      
      {posts.length 
     ?   <PostList remove={removePost} posts={posts} title="Posts about Javascript"/>
        
        : <h1 style={{textAlign: "center",
    margin: "15px 0"}}>Posts not found</h1>
    }
    </div>
  );
}

export default App;
