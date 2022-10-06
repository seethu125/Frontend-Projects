import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import DrawerPanelLayout from "../layout/DrawerPanelLayout";
import AddProduct from "./AddProduct";

export default function AddProductPage() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            navigate("/login")
        }
        if (user) navigate("/addProduct");
    }, [user, loading]);
    return (
        <DrawerPanelLayout><AddProduct/></DrawerPanelLayout>
        )
}