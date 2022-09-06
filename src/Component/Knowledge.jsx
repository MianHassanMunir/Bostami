import React from 'react'

export default function Knowledge(props) {
  return (
    <div>
        <button className='px-5 py-2 rounded text-gray-600 bg-gray-200'>
            {props.skill.dis}
        </button>
    </div>
  )
}