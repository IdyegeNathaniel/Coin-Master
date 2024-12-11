import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  //const Route = createBrowserRouter(createRoutesFromElements());
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
