import styles from './Dashboard.module.css'
import {Link} from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.id
  const {documents: posts,loading} = useFetchDocuments('posts', uid)

  const deleteDocuments = (id) =>{

  }
  
  if(loading) {
    return <p>Carregando...</p>
  }
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados nem um post</p>
          <Link to='/post/create' className='btn btn-dark'>Criar Post</Link>
        </div>
      ) : (
        <>
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
          {posts && posts.map(post => (
          <div key={post.id} className={styles.post_row}>
            <p>{post.title}</p>
            <div>
              <Link to={`/post/${post.id}`} className='btn btn-outline'>Ver</Link>
              <Link to={`post/edit/${post.id}`}  className='btn btn-outline'>Editar</Link>
              <button onClick={()=> deleteDocuments(post.id)}  className='btn btn-outline btn-danger'>Exluir</button>
            </div>
          </div>
      ))}
        </>
      )}
    </div>
  )
}

export default Dashboard