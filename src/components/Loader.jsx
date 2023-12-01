import React from 'react'
import "./LoaderCss.css"
import { useEffect } from 'react'

const Loader = () => {

  useEffect(() => {
    document.querySelector("dialog").showModal()
  }, [])
  
  return (
    <dialog id="loading-animation" className="heading large-text"><p>l</p><p>o</p><p>a</p><p>d</p><p>i</p><p>n</p><p>g</p></dialog>
  )
}

export default Loader