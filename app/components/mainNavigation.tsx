import { NavLink } from "@remix-run/react";

export default function MainNavigation(){
    return (
        <>
           <nav className="mainNav">
                <ul className="mainNav__links">
                    <li className="mainNav__links-item"> <NavLink to="/">Home</NavLink></li>
                    <li className="mainNav__links-item"> <NavLink to="/demo">Demo Page</NavLink></li>
                </ul>
           </nav>
        </>
    )
}