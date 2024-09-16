import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// pages 
import Home from './pages/home';
import About from './pages/about';
import Faq from "./pages/help/faq";
import Contact, { contactAction } from "./pages/help/contact";
import NotFound from "./pages/notfound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";


// layouts
import RootLayout from "./layouts/rootlayout";
import HelpLayout from "./layouts/helplayout";
import CareersLayout from "./layouts/CareersLayout";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />} >
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />} >
        <Route 
        index 
        element={<Careers />} 
        loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)


function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App
