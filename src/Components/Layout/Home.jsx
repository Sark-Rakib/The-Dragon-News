import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../Header/Header";
import Lastest from "../LastestNews/Lastest";
import Navbar from "../Navbar/Navbar";
import LeftAside from "../HomeLayout'/LeftAside";
import RightAside from "../HomeLayout'/RightAside";
import Homes from "../../Pages/Homes";
import Loading from "../Loading/Loading";
import AosAnimation from "../AosAnimation";

const Home = () => {
  const { state } = useNavigate();
  return (
    <div className="bg-base-100 min-h-screen">
      <AosAnimation></AosAnimation>
      <header data-aos="fade-up">
        <Homes></Homes>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <Lastest></Lastest>
        </section>

        <section className="w-11/12 my-7 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </header>

      <main className="flex flex-col md:items-start mt-20 md:flex-row w-11/12 mx-auto my-3 gap-5">
        {/* left section */}
        <aside className="w-full md:w-3/12 mb-5 md:mb-0 md:sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>

        {/* main section */}
        <section className="w-full md:w-6/12 px-0 md:px-5 mb-5 md:mb-0">
          {state == "loading" ? <Loading /> : <Outlet></Outlet>}
        </section>

        {/* right section */}
        <aside className="w-full md:w-3/12 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
