import React from 'react'

export default function Recipe({ alphaLetter }) {

  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let num = 0;
  return (
    <>
      {
        alpha.map(item => (
          <div className='numBox' key={num++} onClick={() => alphaLetter(item)}>
            <h3>{item}</h3>
          </div>
        ))
      }
    </>
  )
}
