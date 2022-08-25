import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { mascota, propietario, email, date, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm(
      ` Desea eliminar el resgistro de ${mascota} del dueño ${propietario}?`,
    )

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="m-3 px-5 py-10  bg-white uppercase font-bold rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''} <span className="normal-case font-normal">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}{' '}
        <span className="normal-case font-normal">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        email: {''} <span className="normal-case font-normal">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: {''}{' '}
        <span className="normal-case font-normal">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}{' '}
        <span className="normal-case font-normal"> {sintomas}</span>
      </p>
      <div className="flex justify-between mt-8">
        <button
          className="uppercase text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg p-3"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          editar
        </button>
        <button
          className="uppercase text-white bg-red-600 hover:bg-red-700 rounded-lg p-3"
          type="button"
          onClick={handleEliminar}
        >
          eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
