import { Link, Outlet } from "react-router";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/" className="font-mono text-2xl text-center text-fuchsia-400 mx-8">Home</Link>
        <Link to="/about" className="font-mono text-2xl text-center text-fuchsia-400 mx-8 ">About</Link>
        <Link to="/articles/1" className="font-mono text-2xl text-center text-fuchsia-400 mx-8 ">Article 1</Link>
        <Link to="/articles/2" className="font-mono text-2xl text-center text-fuchsia-400 mx-8 ">Article 2</Link>
        <Link to="/articles/3" className="font-mono text-2xl text-center text-fuchsia-400 mx-8 ">Article 3</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;