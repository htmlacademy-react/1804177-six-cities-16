import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="center-container">
      <div className="error-container">
        <h1 className="error-title">Error 404 - Page not found</h1>
        <p className="error-message">
          I think you are lost! The requested page was not found.
        </p>
        <p className="error-message">
          Go back to the
          <Link to="/" className="return-link">
            <span>home page</span>
          </Link>
        </p>
      </div>
    </div>

  );
}

export default NotFound;
