import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => prev + 1);

    return (
        <div className="App">
            <h1 style={{fontSize: 40, color: 'green'}}>value = {state}</h1>
            <button
                style={{background: 'black', color: "white", padding: 15}}
                onClick={increment}
            >
                incremernt
            </button>
        </div>
    );
}

export default App;
