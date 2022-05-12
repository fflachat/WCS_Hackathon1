import { Route, Routes } from "react-router-dom";
import Conseils from '../pages/Conseils';

export default function main() {
    return (
        <main>
            <Routes>
                <Route path="/conseils" element={<Conseils />} />
            </Routes>
        </main>
    );
}