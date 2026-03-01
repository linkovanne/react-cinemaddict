import {ConfigProvider, type ThemeConfig} from 'antd';
import {theme} from 'antd';

import './App.css'

import AppHeader from "./components/containers/AppHeader/AppHeader.tsx";
import AppFooter from "./components/containers/AppFooter/AppFooter.tsx";
import Films from "./components/pages/Films/Films.tsx";

const {darkAlgorithm, compactAlgorithm} = theme;

const config: ThemeConfig = {
    algorithm: [darkAlgorithm, compactAlgorithm],
}

function App() {
    return (
        <ConfigProvider theme={config}>
            <AppHeader/>
            <Films/>
            <AppFooter/>
        </ConfigProvider>
    )
}

export default App
