import "./css/header.css";

export function Header() {
    return (
        <header className="header">
            <img src="./src/components/img/new.png" alt="" />
            <ul className="menu">
                <li>Política</li>
                <li>Economia</li>
                <li>Esporte</li>
                <li>Entreterimento</li>
            </ul>
        </header>
    )
}