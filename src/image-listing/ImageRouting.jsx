import React from 'react'
import ImageListing from './ImageListing'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import ViewImage from './ViewImage'
import NotFound from './NotFound'


const ImageRouting = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<ImageListing/>} />
                    <Route path='/photos/:id' element={<ViewImage/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Router>
        </>
    )
}

export default ImageRouting