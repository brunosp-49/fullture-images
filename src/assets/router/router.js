import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Search from "../../pages/search/Search";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/search/:param" element={<Search/>}/>
                <Route path="*" element={<div>Error 404 - Page not found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;