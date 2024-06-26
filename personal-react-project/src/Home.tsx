import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './css/Home.css'
import Navbar from './Navbar.tsx'

function Home() {
  return (
    <>
      <Navbar />
      <div className="p-5 mb-4 bg-body-secondary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">About me</h1>
          <img src="src/assets/profile-image.jpg" alt="screenshot" className="rounded float-end" id="about-me-image" />
          <p className="col-md-8 fs-4">Hi there, I'm Navjot. I am a dedicated computer science student with a passion for software development,
            constantly seeking to innovate and improve through coding. I am currently studying Computer Systems Technology at the
            British Columbia Institute of Technology.</p>
        </div>
      </div>
    </>
  )
}

// export default Home

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

