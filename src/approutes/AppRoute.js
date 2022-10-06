import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import RegisterPage from "../auth/RegisterPage";
import AddProductPage from "../product/AddProductPage";
import ProductCatalogPage from "../product/ProductCatalogPage";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={< LoginPage />} />
                <Route path="/login" element={< LoginPage />} />
                <Route path="/home" element={< ProductCatalogPage />} />
                <Route path="/listProduct" element={< ProductCatalogPage />} />
                <Route path="/addProduct" element={< AddProductPage />} />
                <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
        </BrowserRouter>
    );
}