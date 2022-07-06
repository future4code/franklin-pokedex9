import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path=""    index element={""} />
                <Route path=""    element={""}/>
                <Route path=""    element={""} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;