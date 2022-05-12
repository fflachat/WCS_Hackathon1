import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Simulateur from '../pages/Simulateur';
import Contacts from '../pages/Contacts';
import Conseils from '../pages/Conseils';

export default function main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/simulateur" element={<Simulateur />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/conseils" element={<Conseils />} />
            </Routes>
        </main>
    );
}