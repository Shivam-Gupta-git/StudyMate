import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FeedBack from "./pages/FeedBack";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import CSE from "./pages/CSE";
import IT from "./pages/IT";
import NotFound from "./pages/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Toast from "./Components/Toast";
import PageLoader from "./Components/PageLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [initialLoading, setInitialLoading] = useState(true);

  // Initial loader on first page mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast({ message: '', type: 'success' });
  };

  return (
    <>
      {initialLoading && <PageLoader />}

      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home onToast={showToast} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact onToast={showToast} />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/FeedBack" element={<FeedBack onToast={showToast} />} />
          <Route path="/SignIn" element={<SignIn onToast={showToast} />} />
          <Route path="/SignUp" element={<SignOut onToast={showToast} />} />
          <Route path="/SignOut" element={<SignOut onToast={showToast} />} />
          <Route path="/cse" element={<CSE />} />
          <Route path="/it" element={<IT />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer onToast={showToast} />
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      </BrowserRouter>
    </>
  );
}

export default App;
