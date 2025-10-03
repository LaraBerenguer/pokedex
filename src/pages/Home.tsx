import { Link } from "react-router";

function Home() {
  return (    
    <>
    <h1>This is the pokedex</h1>
    <div>These are pokemon</div>
    <Link to="/pokemon" className="btn">Go to details</Link>
    </>
  );
};

export default Home;