import { useContext, useEffect, useRef, useState } from "react";
import { collection, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from "../../Config/config";
import { QrReader } from "react-qr-reader";
import { UserContext } from "../../Context/useContext";
import { Container } from "./style";
import { CheckCircle } from "phosphor-react";

export function QRcode1() {
  const { data, setModify } = useContext(UserContext);
  const [dataQrcode, setDataQrcode] = useState("No result");
  const [isActiveQrCode, setIsActiveQrCode] = useState("block");
  const [confirmQrCode, setConfirmQrCode] = useState("none");
  const [error, setError] = useState("none");
  const [errorStyle, setErrorStyle] = useState("");
  const [dataEvento, setDataEvento] = useState([]);
  const festa = window.localStorage.getItem("evento");

  useEffect(() => {
    async function getIngressos() {
      const usersCollectionRef = collection(db, festa);
      const order = query(usersCollectionRef, orderBy("count", "asc"));
      const querySnapshot = await getDocs(order);
      //const order = query(querySnapshot, orderBy("count", "asc"));
      setDataEvento(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    setModify(false);
    getIngressos();
  }, []);

  useEffect(() => {
    function VerifyNull() {
      if (dataQrcode === "No result") {
        setIsActiveQrCode("block");
        setConfirmQrCode("none");
      }
    }

    let veryfyTicktesConfirm = dataEvento.filter((item) =>
      item.uid.toString().includes(dataQrcode)
    );

    veryfyTicktesConfirm.map((item) => {
      if (item.uid === dataQrcode && item.active === false) {
        verifyQrCode(item.id);
      } else if (item.uid === dataQrcode && item.active === true) {
        ticketsExistes();
      } else {
      }
    });

    var veryfyExisteArray = veryfyTicktesConfirm.filter(
      (elem, index, rr) => elem.uid === dataQrcode
    );

    if (veryfyExisteArray.length === 0) {
      setIsActiveQrCode("none");
      setConfirmQrCode("block");
      setError("igresso não existe");
      setErrorStyle("#FF4926");
    }

    VerifyNull();
  }, [dataQrcode]);

  async function verifyQrCode(id) {
    const washingtonRef = doc(db, festa, id);
    try {
      await updateDoc(washingtonRef, {
        active: true,
      });
      setError("confirmado");
      setErrorStyle("#2DDFBF");
      setIsActiveQrCode("none");
      setConfirmQrCode("block");
    } catch {}
  }

  function ticketsExistes() {
    setIsActiveQrCode("none");
    setConfirmQrCode("block");
    setError("igresso ja foi confirmado");
    setErrorStyle(" #F5C61C");
  }

  //  constraints={{ facingMode: "environment" }}

  return (
    <Container>
      <div style={{ display: isActiveQrCode }}>
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) {
              setDataQrcode(result?.text);
            }

            if (!!error) {
            }
          }}
          style={{ width: "100%" }}
        />
      </div>

      <div className="confirm" style={{ display: confirmQrCode }}>
        <CheckCircle color={errorStyle} size={80} />
        <h3 style={{ color: errorStyle }}>Nº {dataQrcode}</h3>
        <h3 style={{ color: errorStyle }}>{error}</h3>
        <button
          style={{ background: errorStyle, color: "#fff" }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Continuar
        </button>
      </div>
    </Container>
  );
}
