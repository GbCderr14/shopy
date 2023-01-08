import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from './components/layout';
import Allitem from './components/pages/allitems';
import Favorites from "./components/pages/favorites";
import Wishlist from "./components/pages/wishlist";
function App() {
  return (
    <div className="App">
      
      <Layout>
      <Routes>
        <Route path="/shopy/" element={<Allitem />}/>
        <Route path="/shopy/favorites" element={<Favorites />}/>
        <Route path="/shopy/wishlist" element={<Wishlist />}/>
      </Routes>
      </Layout>
       </div>
  );
}
export default App;
