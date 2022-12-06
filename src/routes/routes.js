import { Outlet, Link } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Documentação</Link>
          </li>
          <li>
            <Link to="/tutorial">Tutorial</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/comunidade">Comunidade</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Routes;