import React, {  useEffect, useState } from "react";
// import PostItem from "./components/PostItem/PostItem";
import PostList from "./components/PostList/PostList";
// import MyButton from "./components/Ui/MyButton/MyButton";
// import MyInput from "./components/Ui/Input/MyInput";
// import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";
import PostForm from "./components/PostForm";
// import MySelect from "./components/Ui/MySelect";
// import MyButton from "./components/Ui/MyButton";
// import MyInput from "./components/Ui/Input/MyInput";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/Ui/MyModal";
import MyButton from "./components/Ui/MyButton";
import { usePosts } from "./hooks/usePosts";
// import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/Ui/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";
import styles from './styles/App.css'


// React хуки
// useState()
// useEffect()
// useRef()
// useMemo()
// useCallback()
// useContext()

function App() {

  const [posts, setPosts] = useState([])
 
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const[modal, setModal] = useState(false)

  const [totalPages,setTotalPages]=useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
   
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


  let pagesArray = getPagesArray(totalPages)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit,page )
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  console.log(totalPages);

  useEffect(() => {
  fetchPosts()
},[])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
}
 
  const removePost = (post) => {
  setPosts(posts.filter(p => p.id  !== post.id))
}
  
  


  return (
    <div className={styles.App}>

      <button onClick={fetchPosts}>Get comments</button>


      <MyButton style={{marginTop:30}} onClick={() => setModal(true)}>create modal</MyButton>
      
      <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost} />

      </MyModal>
      <PostForm create={createPost} />

      <ClassCounter/>

      {/* <MyButton onClick={addNewPostEl} >create new post</MyButton> */}
     

      <hr style={{margin:"15px 0"}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && <h1>произошла ошибка {postError }</h1>}
      {isPostsLoading
        ? <div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader /></div>
       : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about Javascript"/>
    
      }
  

    </div>
  );
}

export default App;
