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
  const [dataEvento, setDataEvento] = useState([]);
  const [modify, setModify] = useState(null);
  const [evento, setEvento] = useState("")
  const [loadingAnimaçao, setLoadingAnimaçao] = useState(true);

  useEffect(() => {
    async function getIngressos() {
      const usersCollectionRef = collection(db, "eventos");
      const order = query(usersCollectionRef, orderBy("date", "asc"));
      const querySnapshot = await getDocs(order);
      //const order = query(querySnapshot, orderBy("count", "asc"));
      setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    setModify(false);
    setLoadingAnimaçao(false);
    getIngressos();
  }, [modify]);

  const festa = window.localStorage.getItem("evento");
  console.log(festa)
  useEffect(() => {
    async function getIngressos() {
      const usersCollectionRef = collection(db, festa);
      const order = query(usersCollectionRef, orderBy("count", "asc"));
      const querySnapshot = await getDocs(order);
      //const order = query(querySnapshot, orderBy("count", "asc"));
      setDataEvento(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    setModify(false);
    setLoadingAnimaçao(false);
    getIngressos();
  }, []);
  console.log("data",dataEvento)
  return (
    <UserContext.Provider
      value={{ data, modify, setModify, loadingAnimaçao, setLoadingAnimaçao, evento, dataEvento }}
    >
      {children}
    </UserContext.Provider>
  );
};
