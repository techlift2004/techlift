import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Event from "./pages/event/page";
import Contact from "./pages/contact/page";
import Resource from "./pages/resource/page";
import AuthForm from "./pages/auth/AuthForm";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import ResetPassword from "./pages/auth/ResetPassword";

export default function App() {
  return (
    <>
      {/* 🔥 Toast container — renders globally */}
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
              primary: "#A855F7", // light purple accent
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444", // red accent
              secondary: "#fff",
            },
          },
        }}
      />

      {/* ⚙️ App Routing */}
      <BrowserRouter>
        <Routes>
          {/* Auth Route */}
          <Route path="/auth" element={<AuthForm />} />

          {/* Layout + Protected Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="event"
              element={
                <ProtectedRoute>
                  <Event />
                </ProtectedRoute>
              }
            />
            <Route
              path="reset-password"
              element={
                <ProtectedRoute>
                  <ResetPassword />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
