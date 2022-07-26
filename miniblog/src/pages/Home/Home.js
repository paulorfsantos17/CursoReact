import styles from "./Home.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h1>Veja Nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        <h1>Posts...</h1>
        {loading && <p>Carregando</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados Posts</p>
            <Link to="/post/create" className="btn">
              Criar Primeiro Post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
