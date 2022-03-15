import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
const Home = React.lazy(() => import ("./Home"));
const Players = React.lazy(() => import ("./Players"));
const TeamPage = React.lazy(() => import ("./TeamPage"));
const Teams = React.lazy(() => import ("./Teams"));
const Player = React.lazy(() => import ("./Player"));
const Team = React.lazy(() => import ("./Team"));
const Articles = React.lazy(() => import ("./Articles"));
const Article = React.lazy(() => import ("./Article"));

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <React.Suspense fallback={<Loading />}>
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
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}
