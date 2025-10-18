import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Lastest from "../LastestNews/Lastest";
import Navbar from "../Navbar/Navbar";
import LeftAside from "../HomeLayout'/LeftAside";
import RightAside from "../HomeLayout'/RightAside";
import Homes from "../../Pages/Homes";

const Home = () => {
  return (
    <div>
      <header>
        <Homes></Homes>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <Lastest></Lastest>
        </section>

        <section className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
        {/* left section */}
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        {/* main section */}
        <section className="col-span-6 px-5">
          <Outlet></Outlet>
        </section>
        {/* right section */}
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
