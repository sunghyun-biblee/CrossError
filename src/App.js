import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { Login } from "./pages/Login";
import { Detaile } from "./pages/Detaile";
import { SearchPage } from "./pages/Search";
import { Nav } from "./component/Nav";
import { useState } from "react";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      {/* outlet은 중첩라우팅을 사용할때만 사용가능 */}
      {/* outlet은 중첩라우팅으로 사용되며, 해당페이지에 호출되는 컴포넌트를 대신하는 곳이다. */}
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login></Login>} />
        {/* path상의 index는 localhost:3000번을 뜻함 */}
        <Route path="main" element={<MainPage></MainPage>} />
        <Route path="search" element={<SearchPage></SearchPage>} />
        <Route path=":movieId" element={<Detaile></Detaile>} />
      </Route>
    </Routes>
  );
}

export default App;
