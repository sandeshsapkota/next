import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import About from "../pages/About.js";
import Appointements from "../pages/Contact";
import List from "../pages/Team";
import PageTitle from "../layout/PageTitle";

function DashboardApp(props) {
    return (
        <BrowserRouter >
            <Nav/>
            <Header/>
            <main className={'main-content'}>
                <div className="grid gap-5 p-5">
                    <PageTitle/>
                    <div className="card !p-8">
                        <Routes>
                            <Route path={'/'} element={About()}/>
                            <Route path={'/appointments'} element={Appointements()}/>
                            <Route path={'/list'} element={List()}/>
                        </Routes>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );
}

export default DashboardApp;