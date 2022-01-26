import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './Components/Error';
import Home from './Components/Home';
import ArtistProfile from './Components/Artist-Details'
import StartPage from './Components/start'
import Header from './Components/Header'


let App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/artists/:id" element={<ArtistProfile />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;