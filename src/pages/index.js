import React from "react"
import { Match } from '@reach/router'


export default function Home() {
  <>
    <Match path="/">
      {
        window.location.href="/User/Pages/homepage"
      }
    </Match>
  </>

}
