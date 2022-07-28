import { useState, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const updateReduce = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReduce, initialState);
  const [cancelled] = useState(false);

  const checkCancelBeforeDispath = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateDocument = async (id, data) => {
    checkCancelBeforeDispath({
      type: "LOADING",
    });

    try {
      const docRef =await doc(db, docCollection, id)

      const updatedDocument = await updateDoc(docRef, data)

      checkCancelBeforeDispath({
        type: "UPDATED_DOC",
        payload: updatedDocument,
      });
    } catch (error) {
      checkCancelBeforeDispath({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  return { updateDocument, response };
};
