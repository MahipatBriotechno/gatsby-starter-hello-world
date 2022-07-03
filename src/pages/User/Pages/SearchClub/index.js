import { AppBar } from '@material-ui/core'
import React from 'react'
import AppBarNew from '../../Component/Appbar'
import Footer from '../../Component/Footer'
import SearchClub from './SearchClub'

function SearchClubMain() {
    return (
        <div>
            <AppBarNew />
            <SearchClub />
            <Footer />
        </div>


    )
}

export default SearchClubMain