import React from "react";
import ReactDOM from 'react-dom/client';
import { Input } from "./src/Component/Input";
function App(){

    return (
        <Input></Input>
    )
}
console.log(document.getElementById('root'));

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


