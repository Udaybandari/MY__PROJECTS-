import React from 'react'
import { useRef } from 'react';
const UseRef = () => {
   const inputRef = useRef()

	const handleSubmit = (event) => {
		event.preventDefault()
		alert(
			`Submitted value: 
			${inputRef.current.value}
			`)
	}

  return (
    <form onSubmit={handleSubmit}>
        <h2>OUTPUT:${inputRef.current?.value}</h2>
			<label>
				Enter something:
			</label>
			<input type="text" ref={inputRef} />
			<button type="submit">Submit</button>
		</form>
  )
}

export default UseRef