import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState();
  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const { user } = useAuthValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("Deu erro");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || image || tags || !body) {
      setFormError("Por Favor, preencha todos os campos");
    }
    if (formError) {
      return;
    }

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="titulo"
            value={title}
            required
            placeholder="Pense em um bom título..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            value={image}
            required
            placeholder="Insira uma imagem que represente seu post..."
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <input
            type="text"
            name="body"
            value={body}
            required
            placeholder="Escreva o conteúdo do post..."
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            value={tags}
            required
            placeholder="Insira as tags sepadas por virgulas"
            onChange={(e) => setTags(e.target.value)}
          />
        </label>

        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde ...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
