import React, { useEffect, useState } from 'react'
import Error from './Error'
import Paciente from './Paciente'

export const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
}) => {
  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [mail, setMail] = useState('')
  const [date, setDate] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [errors, setErrors] = useState(false)

  const generarId = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)
    return fecha + random
  }

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setMail(paciente.mail)
      setDate(paciente.date)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault()
    //validacion de formulario
    if ([mascota, propietario, mail, date, sintomas].includes('')) {
      setErrors(true)
      return
    }
    setErrors(false)

    //Creando objeto paciente
    const objetoPaciente = {
      mascota,
      propietario,
      mail,
      date,
      sintomas,
    }

    if (paciente.id) {
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState,
      )
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      objetoPaciente.id = generarId()
      //Creando arreglo de pacientes
      setPacientes([...pacientes, objetoPaciente])
    }

    //Reiniciando el form
    setMascota(''),
      setPropietario(''),
      setMail(''),
      setDate(''),
      setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg mt-5 text-center">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg py-10 px-5 mt-6"
      >
        {errors && <Error mensajeError="Todos los campos son obligatorios" />}

        <div className="mb-3">
          <label
            className="block text-slate-900 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
            type="text"
            className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md border-slate-400"
            placeholder="Nombre de mascota"
            id="mascota"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-slate-900 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre propietario
          </label>
          <input
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md border-slate-400"
            placeholder="Nombre propietario"
            id="propietario"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-slate-900 uppercase font-bold"
            htmlFor="mail"
          >
            Email
          </label>
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md border-slate-400"
            placeholder="Email"
            id="mail"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-slate-900 uppercase font-bold"
            htmlFor="alta"
          >
            alta
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md border-slate-400"
            id="date"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-slate-900 uppercase font-bold"
            htmlFor="sintomas"
          >
            sintomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md border-slate-400"
            placeholder="Describe los sintomas"
            id="sintomas"
          />
        </div>
        <input
          type="submit"
          name=""
          value={paciente.id ? 'Guardar Edicion' : 'Agregar paciente'}
          className="bg-indigo-800 text-white font-bold w-full border p-3 uppercase rounded-md cursor-pointer hover:bg-indigo-600"
        />
      </form>
    </div>
  )
}
