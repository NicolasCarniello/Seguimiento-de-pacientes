import React from 'react'
import Paciente from './Paciente'

export const ListadoPacientes = ({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-6">
            Administra tus pacientes y {''}
            <span className="text-indigo-600 font-bold">citas</span>
          </p>
          <div className="h-screen overflow-y-scroll">
            {pacientes.map((paciente, id) => (
              <Paciente
                key={id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Aun no has cargado pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-6">
            Carga tus pacientes y {''}
            <span className="text-indigo-600 font-bold">
              citas desde el formulario
            </span>
          </p>
        </>
      )}
    </div>
  )
}
