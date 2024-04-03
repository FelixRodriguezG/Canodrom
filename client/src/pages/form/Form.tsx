// En tu componente Form.js

import  { ChangeEvent, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';


export function Form() {
  const [formData, setFormData] = useState({
    responsable: '',
    titulo: '',
    programa: '',
    tematica: '',
    publico: '',
    organizador: '',
    fechaInicio: '',
    tipusActivitat: '',
    noSessions: '',
    noAssistencia: '',
    numAsistentes: '',
    numHombres: '',
    numMujeres: '',
    numNN: '',
    numNoBinari: '',
    infantsAcompanados: '',
    streaming: '',
    notes: ''
  });
  const [error, setError] = useState('');
  const [exitoso, setExitoso] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setExitoso('Enviado con Exito')
      // Manejar la respuesta del servidor si es necesario   setError('Te equivocaste pendejo');
      console.log('Datos enviados correctamente');
    } catch (error) {
        setError('Error al enviar los datos');
      console.error('Error al enviar los datos:', error);

    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  setTimeout(() => {
    setExitoso('');
    setError('');
  }, 3000);
  return (
    <div className=' bg-[#F5F5F5]'>
    <Header/>
    <div className="flex justify-center m-5">
      <form onSubmit={handleSubmit} className="flex flex-col p-10 gap-5 rounded-md border border-slate-300 w-[55%] bg-white">
        <h1 className="text-4xl font-bold mb-5 text-center bg-purple-700 p-5 rounded-md">FORMULARI CREACIÓ ACTIVITATS</h1>
        <Label  className='mt-5'>Responsable</Label>
        <Input
          type="text"
          name="responsable"
          value={formData.responsable}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Titulo</Label>
        <Input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Programa</Label>
        <Input
          type="text"
          name="programa"
          value={formData.programa}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Temática</Label>
        <Input
          type="text"
          name="tematica"
          value={formData.tematica}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Público</Label>
        <Input
          type="text"
          name="publico"
          value={formData.publico}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Organizador</Label>
        <Input
          type="text"
          name="organizador"
          value={formData.organizador}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Fecha Inicio</Label>
        <Input
          type="date"
          name="fechaInicio"
          value={formData.fechaInicio}
          onChange={handleChange}
          className='w-[15%] bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Tipus activitat</Label>
        <Input
          type="text"
          name="tipusActivitat"
          value={formData.tipusActivitat}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>NO SESSIONS</Label>
        <Input
          type="number"
          name="noSessions"
          value={formData.noSessions}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>NO ASSISTÈNCIA</Label>
        <Input
          type="number"
          name="noAssistencia"
          value={formData.noAssistencia}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Nº Asistentes</Label>
        <Input
          type="number"
          name="numAsistentes"
          value={formData.numAsistentes}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Nº Hombres</Label>
        <Input
          type="number"
          name="numHombres"
          value={formData.numHombres}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Nº Mujeres</Label>
        <Input
          type="number"
          name="numMujeres"
          value={formData.numMujeres}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Nº NN</Label>
        <Input
          type="number"
          name="numNN"
          value={formData.numNN}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Nº No-binari</Label>
        <Input
          type="number"
          name="numNoBinari"
          value={formData.numNoBinari}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Infants que els acompanyen</Label>
        <Input
          type="number"
          name="infantsAcompanados"
          value={formData.infantsAcompanados}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Streaming</Label>
        <Input
          type="text"
          name="streaming"
          value={formData.streaming}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
        <Label className='mt-3'>Notes</Label>
        <Input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className='bg-[#F5F5F5]'
        />
         {error && <div style={{ color: 'red' }}>{error}</div>}
         {exitoso && <div style={{ color: 'green' }}>{exitoso}</div>}
        <Button type="submit" className="rounded-full bg-[#46FCD6] mt-5">Enviar</Button>
        <div className='text-center bg-[#c2b1dd] p-1 rounded-full'><Link to="../../dashboard" className='text-center '>Volver</Link></div>
      </form>
    </div>
      </div>
  );
}
