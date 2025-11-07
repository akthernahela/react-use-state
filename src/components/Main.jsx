export default function Main() {
    const buttonsList = [
        {
            id: 1,
            text: "HTML",
            type: "button",
            className: "btn btn-success"
        },
        {
            id: 2,
            text: "CSS",
            type: "button",
            className: "btn btn-success"
        },
        {
            id: 3,
            text: "JAVASCRIPT",
            type: "button",
            className: "btn btn-success"
        },
        {
            id: 4,
            text: "NODE.JS",
            type: "button",
            className: "btn btn-success"
        },
        {
            id: 5,
            text: "EXPRESS",
            type: "button",
            className: "btn btn-success"
        },
        {
            id: 6,
            text: "REACT",
            type: "button",
            className: "btn btn-success"
        }
    ];

    return (
        <main className="bg-dark">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Learn Web Development</h1>
                </div>
                <div className="card-body">
                    {/* 
                    <button type="button" class="btn btn-success">HTML</button>
                    <button type="button" class="btn btn-success">CSS</button>
                    <button type="button" class="btn btn-success">JAVASCRIPT</button>
                    <button type="button" class="btn btn-success">NODE.JS</button>
                    <button type="button" class="btn btn-success">EXPRESS</button>
                    <button type="button" class="btn btn-success">REACT</button> 
                    */}
                </div>
            </div>
        </main>
    )
}