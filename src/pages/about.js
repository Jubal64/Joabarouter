import { useState } from "react";
import { Navigate } from "react-router-dom";

function Home () {

    const [user, setuser] = useState('Sjay')

    if(!user){
        return <Navigate to='/' replace={true}/> 
    }

    return ( 
        <div className="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, impedit reprehenderit 
                at consectetur deserunt harum, nam accusamus sapiente perspiciatis eos optio minima quia 
                ipsa maxime possimus. Accusamus quod nulla amet.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, impedit reprehenderit 
                at consectetur deserunt harum, nam accusamus sapiente perspiciatis eos optio minima quia 
                ipsa maxime possimus. Accusamus quod nulla amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio voluptatem libero 
                labore rerum eveniet perferendis, iure nam, reiciendis, repellat enim illo beatae? 
                Molestiae quod explicabo at qui neque atque?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet quos harum quae, 
                tempora numquam. Dolores tempora exercitationem ut alias, hic nemo necessitatibus quam eius 
                laboriosam quisquam quis nam commodi?</p>

                <button onClick={() => setuser(null)}>logout</button>
        </div>
     );
}
 
export default Home;