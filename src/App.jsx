import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./Layout";
import Home from "./pages/home/home";
import About from "./pages/about/page";
import Event from "./pages/event/page";
import Contact from "./pages/contact/page";
import Resource from "./pages/resource/page";
import Blog from "./pages/blog/page";
import BlogDetail from "./pages/blog/id/detail";
import Sponsor from "./pages/sponsor/page";
import AuthForm from "./pages/auth/AuthForm";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import ResetPassword from "./pages/auth/ResetPassword";
import Intro from "./pages/intro/page"

export default function App() {
  return (
    <>
      {/* 🔥 Global Toaster */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#4B0081",
            color: "#fff",
            borderRadius: "8px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#A855F7",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          {/* ❌ These pages should NOT show Layout */}
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
            <Route index element={<Intro />} />

          {/* ✅ All other pages should show Layout */}
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          

            <Route
              path="event"
              element={
                <ProtectedRoute>
                  <Event />
                </ProtectedRoute>
              }
            />

            <Route path="contact" element={<Contact />} />

            <Route
              path="resource"
              element={
                <ProtectedRoute>
                  <Resource />
                </ProtectedRoute>
              }
            />

            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id/detail" element={<BlogDetail />} />
            <Route path="sponsor" element={<Sponsor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
