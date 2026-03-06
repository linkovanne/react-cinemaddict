import {ConfigProvider, type ThemeConfig, theme, Layout} from 'antd';

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
            <Layout style={{minHeight: "100vh"}}>
                <Layout.Content>
                    <div className="app-content">

                        <AppHeader/>
                        <Films/>
                        <AppFooter/>
                    </div>
                </Layout.Content>
            </Layout>
        </ConfigProvider>
    )
}

export default App
