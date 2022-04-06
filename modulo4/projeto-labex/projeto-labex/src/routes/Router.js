import react from "react"
import HomePage from "../pages/HomePage"
import AdminHomepage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ListTripsPage from "../pages/ListTripsPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ErroPage from "../pages/ErroPage";

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="trips/list" element={<ListTripsPage />} />
                <Route path="trips/application" element={<ApplicationFormPage />} />
                <Route path="admin/trips/list" element={<AdminHomepage />} />
                <Route path="admin/trips/:id" element={<TripDetailsPage />} />
                <Route path="*" element={<ErroPage />} />

            </Routes>
        </BrowserRouter>
    )

}