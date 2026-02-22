// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from "./components/AppHeader/AppHeader.tsx";
import AppFooter from "./components/AppFooter/AppFooter.tsx";
import Films from "./pages/Films/Films.tsx";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <AppHeader/>
            <Films/>
            <AppFooter/>
        </>
    )
}

export default App
