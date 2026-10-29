import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main" id="main">
        <div className="route-outlet">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
