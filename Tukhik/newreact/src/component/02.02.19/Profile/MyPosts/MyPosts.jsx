import React from 'react';
import  s from './MyPosts.module.css';
import  Post from './Post/Post';

const MyPosts = () => {

let postData = [
    {id: 1, message: 'Dima', likesCount: 12},
    {id: 2, message: 'Nadia', likesCount: 4},
    {id: 2, message: 'Asya', likesCount: 1},
] 

let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

	return  (<div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
         <button>Remuve</button>
         </div>
        </div>
       <div className={s.posts}> 
         {postsElements} 
       </div>
        </div>
        )
   
}
export default MyPosts