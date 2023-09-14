import { Link } from 'react-router-dom';

const Users=({users})=>{
    return(
      <>
        <h1>Users</h1>
        <ul>
          {
            users.map((user)=>{
              return(
                <li key={user.id}>
                    <Link to={`./${user.id}`}>
                        {user.name}
                    </Link>
                </li>
              )
            })
          }
        </ul>
      </>
    )
}

export default Users