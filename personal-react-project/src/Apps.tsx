import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './css/Apps.css'

function Apps() {
    let appObjects = [
        {
            appName: "WeFit",
            description: "Because of the rise of automation, people have become complacent in their physical health. WeFit aims to make improving your health easier then ever.",
            image: "src/assets/wefit.png",
            link: "https://two800-202410-bby27.onrender.com/",
            github: "https://github.com/Nav-Codes/2800-202410-BBY27"
        },
        {
            appName: "Whats Happening",
            description: "What’s Happening is an app that helps you find events tailored to your interests as easily as possible by creating a central hub for local events and community gatherings.",
            image: "src/assets/wp.png",
            link: "https://comp1800-bby28-project.web.app",
            github: "https://github.com/alvehn/1800_202330_BBY28"
        }
    ]

    return (
        <>
            <div className="card-group">
                {appObjects.map((app) => (
                    <>
                        <br />
                        <div className="card">
                            <img src={app.image} className="card-img-top" alt={app.image} />
                            <hr />
                            <div className="card-body">
                                <h5 className="card-title">{app.appName}</h5>
                                <p className="card-text">{app.description}</p>
                                <a href={app.link} className="card-link" target='_blank'>Check it Out</a>
                                <a href={app.github} className="card-link" target='_blank'>GitHub</a>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Navbar />
        <Apps />
    </React.StrictMode>,
)
