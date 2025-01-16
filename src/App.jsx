import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Layout from "./components/layout/Layout";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<AllMeetups />} />
        <Route path="/new-meetups" element={<NewMeetups />} />
        <Route path="/favorites" element={<p>My Favorites</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
