import React from 'react';
import './App.css';

function App() {
    const onClickHandler = (name: string) => {
        console.log(name);
    }

    return (
        <div className="App">
            <div>
                <button onClick={(event)=>onClickHandler('1')}>Clique ici</button>
                <button onClick={(event)=>onClickHandler('3')}>Click here</button>
            </div>
        </div>
    );
}

export default App;
