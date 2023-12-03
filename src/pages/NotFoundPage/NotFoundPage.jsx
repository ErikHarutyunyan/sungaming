import SEO from "components/SEO";
// Route
import { Link } from "react-router-dom";
import { HOME } from "router/route-path";

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="404"
        description="404"
        url="https://sungaming.netlify.app/404"
      />
      <section className="error">
        <div className="container">
          <div className="error_content">
            <h1 className="error_title">404</h1>
            <div className="error_info">
              <h2 className="error_subtitle">Oops...</h2>
              <p className="error_description">
                We&apos;re sorry, but <br />
                something went wrong.
              </p>
              <Link
                to={HOME}
                className="box-style btn-box d-center go_home theme_button"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
