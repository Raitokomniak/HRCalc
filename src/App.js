import './App.css';
import { useState } from 'react';

function App() {
    const [age, setAge] = useState(0);
    const [hrLimit, setHr] = useState(" ");

    function CalculateLimit() {
            var upper = (220 - age) * 0.85;
            var lower = (220 - age) * 0.65;
            setHr(lower.toFixed(0) + '-' + upper.toFixed(0));
    }
    
    return (
        <>
            <div className="container">
                <form>
                    <h2>Heart rate limits calculator</h2>
                    <label>Age</label>
                    <p><input value={age} type="text" onChange={e => setAge(e.target.value)}/></p>
                    <label>Heart rate limits</label>
                    <p><input value={hrLimit} type="text"/></p>
                    <p><input type="button" value="Calculate" className="btn btn-primary" onClick={() => CalculateLimit()} /></p>
                </form>
            </div>
        </>
    );

}

export default App;
