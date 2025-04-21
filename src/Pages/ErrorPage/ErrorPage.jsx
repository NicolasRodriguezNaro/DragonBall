import React from 'react'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <>
        <div className='errorFound'>
          <div id='bodyError'>
            <div id='imageError'>
              <img id='animationError' src="https://i.imgur.com/Ywf8xjy.gif" alt="Goku" />
            </div>
            <div id='textWarning'>
              <h1 id='titleErrorPage'>¡Kakarotto se perdió otra vez!</h1>
              <p id='textErrorPage'>Lo sentimos, esta página no existe. Parece que Goku 
                se teletransportó mal y te trajo aquí por error.</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default ErrorPage