import { createContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../Config/config";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState([]);
  const [modify, setModify] = useState(null);

  useEffect(() => {
    async function getIngressos() {
      const usersCollectionRef = collection(db, "tickets");
      const order = query(usersCollectionRef, orderBy("count", "asc"));
      const querySnapshot = await getDocs(order);
      //const order = query(querySnapshot, orderBy("count", "asc"));
      setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    setModify(false);
    getIngressos();
  }, [modify]);

  return (
    <UserContext.Provider value={{ data, modify, setModify }}>
      {children}
    </UserContext.Provider>
  );
};
