// src/pages/Home.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to Seal Startup</h1>
        <p>Your tagline goes here.</p>
      </main>
      <Footer />
    </div>
  );
}
