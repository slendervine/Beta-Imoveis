import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../Telas/Home.js";
import MinhaNavBar from "../Components/MinhaNavBar.js";

const Routes = () => {
    return (
        <>
        <MinhaNavBar/>
        <BrowserRouter>
            <Route component = { Home } path="/" exact />
        </BrowserRouter>
        </>
    )
}

export default Routes;
