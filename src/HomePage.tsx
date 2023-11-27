import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h1> Welcome to Home Page</h1>

        <p>This is the Note App where you can add your notes...</p>
        <p>
          If you want to manage your notes, you can edit, delete or add the new
          one...
        </p>

        <Link to="/notes">
          <h3>Go to Notes</h3>
        </Link>
      </main>
    </>
  );
};

export default Home;
