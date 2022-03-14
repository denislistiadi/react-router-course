import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Players from "./Players";
import TeamPage from "./TeamPage";
import Teams from "./Teams";
import Player from "./Player";
import Team from "./Team";
import Articles from "./Articles";
import Article from "./Article";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route
              path=""
              element={<h2 className="sidebar-instruction">Select a Player</h2>}
            />
            <Route path=":playerId" element={<Player />} />
          </Route>
          <Route path="/teams" element={<Teams />}>
            <Route
              path=""
              element={<h2 className="sidebar-instruction">Select a Team</h2>}
            />
            <Route path=":teamId" element={<Team />} />
          </Route>
          <Route path="/:teamId" element={<TeamPage />} />
          <Route path="/:teamId/articles" element={<Articles />}>
            <Route
              path=""
              element={<h2 className="sidebar-instruction">Select an Article</h2>}
            />
            <Route path=":articleId" element={<Article />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
