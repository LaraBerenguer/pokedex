import { Link } from "react-router";

function Details() {
  return (    
    <>
    <h1>This is a pokemon</h1>
    <div>Look how nice</div>
    <Link to="/" className="btn">Back</Link>
    </>
  );
};

export default Details;