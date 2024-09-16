import { Link } from "react-router-dom";

     
 
const NotFound = () => {
    return (
        <div>
            <h1>Sorry!!!</h1>
            <h2>Page not found</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus animi dolorem vero aliquam sed? Obcaecati id eum, suscipit maxime ratione pariatur in doloremque saepe repudiandae? Dolore deserunt, impedit consequatur voluptatibus nihil reprehenderit unde magni eius nam autem aliquid libero voluptatem explicabo necessitatibus beatae rerum! Accusantium quas cupiditate illum laboriosam magni!</p>
            <h4><Link to="/">Click Here</Link> to go back to the Home Page.</h4>
        </div>

    );
}
 
 
export default NotFound;