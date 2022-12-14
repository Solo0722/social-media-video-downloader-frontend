import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SecondaryNav from "./components/SecondaryNav";
import {
  Facebook,
  Home,
  Instagram,
  Twitter,
  Youtube,
  YoutubePlaylist,
} from "./pages";
import styled from "styled-components";
import GlobalProvider from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar />
        <SecondaryNav />
        <RoutesContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/youtube-playlist" element={<YoutubePlaylist />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/twitter" element={<Twitter />} />
          </Routes>
        </RoutesContainer>
      </GlobalProvider>
    </BrowserRouter>
  );
}

const RoutesContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  padding: 1rem;
`;

export default App;
