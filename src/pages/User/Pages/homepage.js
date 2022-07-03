
import { Match } from "@reach/router";
import { Router } from "@reach/router";
import React from "react"
import Appbar from "../Component/Appbar"
import Footer from '../Component/Footer'
import Home from "../Component/Home/Home"
import About from "./About/About";
import Cookies from "./Cookies/Cookies";
import DownloadApp from "./DownloadApp/DownloadApp";
import Help from "./Help/Help";
import Invest from "./Invest/Invest";
import PressKit from "./PressKit/PressKit";
import Privacy from "./Privacy/Privacy";
import SearchClubMain from "./SearchClub";
import SearchClub from "./SearchClub/SearchClub";
import Term from "./Term/Term";
export default function HomePage() {
  const NotFound = () => <p>Sorry, nothing here.</p>;
  return (

    <div style={{ background: 'white' }}>
      <Appbar />
      <Router  >
        <Home path="User/Pages/*" />
        <Match path="User/Pages/SearchClub/">
          <SearchClubMain />
        </Match>

        <Match path="User/Pages/About/About">
          <About />
        </Match>
        <Match path="User/Pages/PressKit/PressKit">
          <PressKit />
        </Match>
        <Match path="User/Pages/Invest/Invest">
          <Invest />
        </Match>
        <Match path="User/Pages/Term/Term">
          <Term />
        </Match>
        <Match path="User/Pages/Privacy/Privacy">
          <Privacy />
        </Match>
        <Match path="User/Pages/Cookies/Cookies">
          <Cookies />
        </Match>
        <Match path="User/Pages/DownloadApp/DownloadApp">
          <DownloadApp />
        </Match>
        <Match path="User/Pages/Help/Help">
          <Help />
        </Match>
        <NotFound default />
      </Router>
      <Footer />
    </div>

  )
}
