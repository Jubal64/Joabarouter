
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return (
        <div className="help-layout">
            
            <h2>Get Quick Help</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, doloremque!</p>

            <nav>
                <NavLink to="faq">Check out the FAQs</NavLink>
                <NavLink to="contact">Contact us</NavLink>
            </nav>


            <Outlet />

        </div>
    );
}
 
 
export default HelpLayout;