import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Event from "./pages/event/page"
import Contact from "./pages/contact/page"
import Resource from "./pages/resource/page"
import Blog from "./pages/blog/page" 
import Sponsor from "./pages/sponsor/page"   

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="event" element={<Event />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resource" element={<Resource />} />
          <Route path="blog" element={<Blog />} />
          <Route path="sponsor" element={<Sponsor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
