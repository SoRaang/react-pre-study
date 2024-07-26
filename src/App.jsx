import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Button />
            <div>가나다</div>
        </>
    )
}

function Button() {
    return (
        <button>X</button>
    )
}

export default App;