import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import {Evaluation, Dashboard,EvaluationDetails, UserDetails } from "./Components/Pages"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
               
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/evaluations" element={<Evaluation />} />
                <Route path="/evalutations/:id" element={<EvaluationDetails />} />
                <Route path="/evalutations/:id/:idUser" element={<UserDetails/>} />
            </Routes>
        </BrowserRouter>
    );
}