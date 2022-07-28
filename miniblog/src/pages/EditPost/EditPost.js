import styles from "./EditPost.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import  {useUpdateDocument} from '../../hooks/useUpdateDocument'
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
  const {id} = useParams()
  const {document : post} = useFetchDocument('posts', id)
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(post) {
      setTitle(post.title)
      setImage(post.image)
      setBody(post.body)
      setTags(post.tags)
    }
  }, [post])

  const { updateDocument, response } = useUpdateDocument("posts");

  const { user } = useAuthValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("Deu erro");
    }
    console.log(tags)

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
   
    if (!title || image || tags || !body) {
      setFormError("Por Favor, preencha todos os campos");
    }
    if (formError) {
      return;
    }
    const data = {
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    updateDocument(id, data);

    navigate("/dashboard");
  };

  return (
    <>
    {post && (
      <div className={styles.edit_post}>
      <h2>Editando Post: {post.title}</h2>
      <p>Altere os post como você desejar</p>
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
        <p className={styles.preview_title}>Preview da imagem atual: </p>
        <img className={styles.image_preview} src={post.image} alt={post.title}/>
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

        {!response.loading && <button className="btn">Editar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde ...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
    )}
    </>
  );
};

export default EditPost;
