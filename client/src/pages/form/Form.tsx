import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

export const INITIAL_FORM_DATA = {
  
  responsable: "",
  titulo: "",
  programa: "",
  tematica: "",
  publico: "",
  organizador: "",
  fechaInicio: "",
  tipusActivitat: "",
  noSessions: "",
  noAssistencia: "",
  numAsistentes: "",
  numHombres: "",
  numMujeres: "",
  numNN: "",
  numNoBinari: "",
  infantsAcompanados: "",
  streaming: "",
  notes: "",
};

export function Form() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [error, setError] = useState("");
  const [Successful, setSuccessful] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/data/crear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      setSuccessful("Enviat amb èxit");
      console.log("Datos enviados correctamente");
      console.log(formData)
    } catch (error) {
      setError("Error en l'enviament de les dades");
      console.error("Error al enviar los datos:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  setTimeout(() => {
    setSuccessful("");
    setError("");
  }, 3000);
  return (
    <div className=" bg-[#F5F5F5]">
  <Header />
  <div className="flex justify-center m-5">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-10 gap-5 rounded-md border border-slate-300 w-[55%] bg-white"
    >
      <h1 className="text-4xl text-[#46FCD6] font-bold mb-5 text-center bg-purple-700 p-5 rounded-md">
      Introdueix les dades de l'activitat
      </h1>
      
      <div className="flex flex-wrap gap-3">
        <Label className="flex flex-col mt-5">Data d'inici
          <Input
            type="date"
            name="fechaInicio"
            value={formData.fechaInicio}
            onChange={handleChange}
            className="bg-[#F5F5F5] mt-1"
          />
        </Label>
        <Label className="flex flex-col flex-grow mt-5">Notes
          <Input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="flex-grow bg-[#F5F5F5] mt-1"
          />
        </Label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Label className="flex flex-col mt-5">Streaming
          <Input
            type="text"
            name="streaming"
            value={formData.streaming}
            onChange={handleChange}
            className="bg-[#F5F5F5] mt-1"
          />
        </Label>
        
        <Label className="flex flex-col mt-5">
          Responsable
          <Input
            type="text"
            name="responsable"
            value={formData.responsable}
            onChange={handleChange}
            className="bg-[#F5F5F5] mt-1"
            required
          />
        </Label>

        <Label className="flex flex-col mt-5">
          Titulo
          <Input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="bg-[#F5F5F5] mt-1"
            required
          />
        </Label>
            <Label className="flex flex-col mt-3">
              Programa
              <Input
                type="text"
                name="programa"
                value={formData.programa}
                onChange={handleChange}
                className="bg-[#F5F5F5]  mt-1"
              />
            </Label>
            <Label className="flex flex-col mt-3">
              Temática
              <Input
                type="text"
                name="tematica"
                value={formData.tematica}
                onChange={handleChange}
                className="bg-[#F5F5F5]  mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              Público
              <Input
                type="text"
                name="publico"
                value={formData.publico}
                onChange={handleChange}
                className="bg-[#F5F5F5]  mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              Organizador
              <Input
                type="text"
                name="organizador"
                value={formData.organizador}
                onChange={handleChange}
                className="bg-[#F5F5F5]  mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              Tipus activitat
              <Input
                type="text"
                name="tipusActivitat"
                value={formData.tipusActivitat}
                onChange={handleChange}
                className="bg-[#F5F5F5]  mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              Nº SESSIONS
              <Input
                type="number"
                name="noSessions"
                value={formData.noSessions}
                onChange={handleChange}
                className="bg-[#F5F5F5]  mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              No Assistencia
              <Input
                type="number"
                name="noAssistencia"
                value={formData.noAssistencia}
                onChange={handleChange}
                className="bg-[#F5F5F5] mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              Nº Asistentes
              <Input
                type="number"
                name="numAsistentes"
                value={formData.numAsistentes}
                onChange={handleChange}
                className="bg-[#F5F5F5]  mt-1"
              />
            </Label>
            <Label className="flex flex-col mt-3">
              Nº Hombres
              <Input
                type="number"
                name="numHombres"
                value={formData.numHombres}
                onChange={handleChange}
                className="bg-[#F5F5F5]  mt-1"
              />
            </Label>
            <Label className="flex flex-col mt-3">
              Nº Mujeres
              <Input
                type="number"
                name="numMujeres"
                value={formData.numMujeres}
                onChange={handleChange}
                className="bg-[#F5F5F5] mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              Nº NN
              <Input
                type="number"
                name="numNN"
                value={formData.numNN}
                onChange={handleChange}
                className="bg-[#F5F5F5] mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              Nº No-binari
              <Input
                type="number"
                name="numNoBinari"
                value={formData.numNoBinari}
                onChange={handleChange}
                className="bg-[#F5F5F5] mt-1"
              />
            </Label>

            <Label className="flex flex-col mt-3">
              Infants acompanyants
              <Input
                type="number"
                name="infantsAcompanados"
                value={formData.infantsAcompanados}
                onChange={handleChange}
                className="bg-[#F5F5F5] mt-1"
              />
            </Label>
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
      {Successful && <div style={{ color: "green" }}>{Successful}</div>}
      
      <Button type="submit" className="rounded-full bg-[#46FCD6] mt-5 transition duration-300">
        Enviar
      </Button>
      
      <div className="text-center bg-[#ae80ff] p-2 hover:bg-purple-700 hover:text-white rounded-full transition duration-300 ">
        <Link to="../../dashboard" className="text-center ">
          Volver
        </Link>
      </div>
    </form>
  </div>
</div>
  );
}
