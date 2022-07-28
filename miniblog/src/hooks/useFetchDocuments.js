import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";


export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadingData() {
      if (cancelled) return;

      setLoading(true);

      const colletionRef = await collection(db, docCollection);

      try {
        let q;

        if (search) {
          q = await query(
            colletionRef,
            where(
              "tags",
              "array-contains",
              search,
              orderBy("CreatedAt", "desc")
            )
          );
        } else if(uid) {
          q = await query(
            colletionRef,
            where(
              "uid",
              "==",
              uid),
              orderBy("CreatedAt", "desc")
            )
              
        } else {
          
          q = await query(colletionRef, orderBy("createdAt", "desc"));

          
        }

        await onSnapshot(q, (QuerySnapshot) => {
          
          setDocuments(
            QuerySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        console.log(documents)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }

      console.log(documents)
    }
    loadingData();
  }, [docCollection, search, uid, cancelled, documents]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
