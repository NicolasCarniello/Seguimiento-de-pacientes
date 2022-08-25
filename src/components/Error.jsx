import React from 'react'

const Error = ({ mensajeError }) => {
  return (
    <div className=" text-slate-100 bg-red-700 w-full rounded-sm p-2 my-2 text-center uppercase font-bold">
      <p>{mensajeError}</p>
    </div>
  )
}

export default Error
