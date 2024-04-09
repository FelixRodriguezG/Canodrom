import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Header = () => {
  const [_currentUser, setCurrentUser] = useContext(AuthContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentUser({ token: "" });
    navigate("/");
  };

  const user = localStorage.getItem("user");
  let data = "";
  if (user) {
    const userData = JSON.parse(user);
    data = userData.name;
  }

  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:3000/data/download", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "tabla.xlsx"); // Nombre del archivo a descargar
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  const handleUpload = async (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:3000/data/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Archivo Excel subido correctamente.");
    } catch (error) {
      console.error("Error al subir el archivo Excel:", error);
      alert("Error al subir el archivo Excel.");
    }
  };

  return (
    <>
      <header className="bg-purple-700 p-4 flex w-full items-center justify-between">
        <img src="./Icon.svg" alt="logo" className="w-[240px]" />
        <div className="flex gap-5 ">
          <Link to="../form">
            <img src="./fileSend.svg" alt="logo" className="w-[40px] ml-6" />
            <span className="font-semibold text-lg text-[#46FCD6]">
              Formulari
            </span>
          </Link>
          <Link to="../dashboard">
            <img src="./dahboard1.svg" alt="logo" className="w-[40px] ml-6" />
            <span className="font-semibold text-lg text-[#46FCD6]">
              Dashboard
            </span>
          </Link>
          <button
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          >
            <img src="./upload.svg" alt="logo" className="w-[40px] ml-6" />
            <span className="font-semibold text-lg text-[#46FCD6]">
              Pujar Excel
            </span>
          </button>
          <input
            type="file"
            accept=".xlsx"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleUpload}
          />{" "}
          {/* Input oculto para subir archivos */}
          <button onClick={handleDownload}>
            <img src="./downloadl.svg" alt="logo" className="w-[40px] ml-6" />
            <span className="font-semibold text-lg text-[#46FCD6]">
              Descarregar
            </span>
          </button>
        </div>
        <div>
          <p className={`text-[#46FCD6] text-2xl `}>{"Benvingut/da " + data}</p>
          <button
            type="button"
            onClick={handleLogOut}
            className="font-semibold"
          >
            Tancar Sessió
          </button>
        </div>
      </header>
    </>
  );
};
