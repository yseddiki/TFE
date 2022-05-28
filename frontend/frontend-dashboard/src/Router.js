import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import {Evaluation, Dashboard,EvaluationDetails, UserDetails, Analyse } from "./Components/Pages"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/analyse" element={<Analyse />} />
                <Route path="/evaluations" element={<Evaluation />} />
                <Route path="/evalutations/:id" element={<EvaluationDetails />} />
                <Route path="/evalutations/:id/:idUser" element={<UserDetails/>} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}