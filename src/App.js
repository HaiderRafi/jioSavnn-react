import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

import SongContainer from "./components/SongContainer";
import SongDetails from "./components/SongDetails";
import MainContainer from "./components/MainContainer";
import Radio from "./components/Radio";
import { Provider } from "react-redux";
import store from "./utils/store";
import SignIn from "./components/SignIn";


let appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/music",
      element:<MainContainer/>
    },
    {
      path:"/radio",
      element:<Radio/>
    },
    {
      path:"/signin",
      element:<SignIn/>
    },
    {
      path:"/songs/:id",
      element:<SongDetails/>
    },
   
  ]
}])



function App() {
  return (
    <>
    <Provider store={store}>
      <div className="">
        {/* <Header/> */}
        {/* <Body/> */}
        <Footer/>
       
        <RouterProvider router={appRouter}/> 
         {/* <Footer/> */}

      </div>
      </Provider>
      
    </>
  );
}

export default App;
