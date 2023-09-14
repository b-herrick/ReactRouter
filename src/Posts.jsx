import { Link } from 'react-router-dom';

const Posts=({posts})=>{
    return(
      <>
        <h1>Posts</h1>
        <ul>
          {
            posts.map((post)=>{
              return(
                <li key={post.id}>
                    <Link to={`./${post.id}`}>
                        {post.title}
                    </Link>
                </li>
              )
            })
          }
        </ul>
      </>
    )
}

export default Posts
