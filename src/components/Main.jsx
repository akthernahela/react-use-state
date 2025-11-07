import { useState } from 'react';

export default function Main() {
    const buttonsList = [
        {
            id: 1,
            text: "HTML",
            type: "button",
            className: "btn btn-outline-light",
            description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
        },
        {
            id: 2,
            text: "CSS",
            type: "button",
            className: "btn btn-outline-light",
            description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
        },
        {
            id: 3,
            text: "JAVASCRIPT",
            type: "button",
            className: "btn btn-outline-light",
            description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
        },
        {
            id: 4,
            text: "NODE.JS",
            type: "button",
            className: "btn btn-outline-light",
            description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
        },
        {
            id: 5,
            text: "EXPRESS",
            type: "button",
            className: "btn btn-outline-light",
            description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
        },
        {
            id: 6,
            text: "REACT",
            type: "button",
            className: "btn btn-outline-light",
            description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
        }
    ];
    const [selectButton, setselectButton] = useState(0);
    const handleClick = (button) => {
        setselectButton(button);
    };
    return (
        <main>
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Learn Web Development</h1>
                </div>
                <div className="card-body">
                    {
                        buttonsList.map((button) => (
                            <button key={button.id} type={button.type}
                                className={`${button.className} m-3 btn-lg  ${selectButton && selectButton.id === button.id ? 'active' : ''}`}
                                onClick={() => handleClick(button)}>{button.text}</button>))
                    }
                    {/* 
                    <button type="button" class="btn btn-light">HTML</button>
                    <button type="button" class="btn btn-light">CSS</button>
                    <button type="button" class="btn btn-light">JAVASCRIPT</button>
                    <button type="button" class="btn btn-light">NODE.JS</button>
                    <button type="button" class="btn btn-light">EXPRESS</button>
                    <button type="button" class="btn btn-light">REACT</button> 
                    */}
                    <h2 className="mb-2">{selectButton.text}</h2>
                    <p className="card-text lead">
                        {selectButton.description}
                    </p>
                </div>
            </div>
        </main>
    )
}