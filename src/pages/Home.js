import { useState } from "react";
import AddMoviesApp from "../components/addmoviesapp/AddMoviesApp";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import Navbar from "../components/navbar/Navbar";
import data from "../utils/constans/data";
function Main() {
    const [movies, setMovies] = useState(data);
    return(
        <div>
            <main>
                <Hero />
                <Movies movies={movies} setMovies={setMovies} />
                <AddMoviesApp movies={movies} setMovies={setMovies} />
            </main>
        </div>
    );
}

function Home() {
    return(
        <div>
        <Navbar/>
        <Main />
        <Footer />
        </div>
    );
}

export default Home;