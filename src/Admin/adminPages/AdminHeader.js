import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  const [header, setHeader] = useState([]);
  const [solutionPages, setSolutionPages] = useState([]);
  const [solution1Pages, setSolution1Pages] = useState([]);
  const [productPages, setProductPages] = useState([]);

  useEffect(() => {
    Axios.get("/header").then((res) => setHeader(res.data));

    Axios.get("/solution2-get").then((res) => setSolutionPages(res.data));

    Axios.get("/solution1-get").then((res) => setSolution1Pages(res.data));

    Axios.get("/product-get").then((res) => setProductPages(res.data));
  }, []);

  return (
    <>
      {header.map((value, index) => (
        <nav className="navbar navbar-expand-lg" key={index}>
          <div className="container">
            <div className="logo-container-sec ">
              <Link to="/admin-dashboard">
                <img
                  src={`/images/${value.logo}`}
                  // src={NavLogo}
                  className="NavLogo"
                  alt="NavLogo"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="hover-underline-animation"
                    to="/admin-dashboard"
                    onClick={(e) => navigate("/admin-dashboard")}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    {value.home}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="hover-underline-animation"
                    to="/admin-why-razor-edge"
                    onClick={(e) => navigate("/admin-why-razor-edge")}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    {value.whyrazoredge}
                  </Link>
                </li>
                <li className="nav-item  dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {value.platform}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="row">
                      <div className="col-md-6 ">
                        {productPages.map((value, index) =>
                          !(index % 2) ? (
                            <Dropdown.Item
                              key={index}
                              to={`/admin-product/${value.pageName.replace(
                                /\s+/g,
                                "-"
                              )}`}
                              onClick={(e) =>
                                navigate(
                                  `/admin-product/${value.pageName.replace(
                                    /\s+/g,
                                    "-"
                                  )}`
                                )
                              }
                              data-bs-toggle="collapse"
                              data-bs-target=".navbar-collapse.show"
                            >
                              <h6>{value.pageName}</h6>
                              <p>{value.pageDesc}</p>
                            </Dropdown.Item>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                      <div className="col-md-6 ">
                        {productPages.map((value, index) =>
                          index % 2 ? (
                            <Dropdown.Item
                              key={index}
                              to={`/admin-product/${value.pageName.replace(
                                /\s+/g,
                                "-"
                              )}`}
                              onClick={(e) =>
                                navigate(
                                  `/admin-product/${value.pageName.replace(
                                    /\s+/g,
                                    "-"
                                  )}`
                                )
                              }
                              data-bs-toggle="collapse"
                              data-bs-target=".navbar-collapse.show"
                            >
                              <h6>{value.pageName}</h6>
                              <p>{value.pageDesc}</p>
                            </Dropdown.Item>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {value.solution}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="row">
                      <div className="col-md-6 ">
                        {solution1Pages.map((value, index) => (
                          <Dropdown.Item
                            key={index}
                            to={`/admin-solution1/${value.pageName.replace(
                              /\s+/g,
                              "-"
                            )}`}
                            onClick={(e) =>
                              navigate(
                                `/admin-solution1/${value.pageName.replace(
                                  /\s+/g,
                                  "-"
                                )}`
                              )
                            }
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse.show"
                          >
                            <h6>{value.pageName}</h6>
                            <p>{value.pageDesc}</p>
                          </Dropdown.Item>
                        ))}
                        {solutionPages.map((value, index) =>
                          index % 2 ? (
                            <Dropdown.Item
                              key={index}
                              to={`/admin-solution/${value.pageName.replace(
                                /\s+/g,
                                "-"
                              )}`}
                              onClick={(e) =>
                                navigate(
                                  `/admin-solution/${value.pageName.replace(
                                    /\s+/g,
                                    "-"
                                  )}`
                                )
                              }
                              data-bs-toggle="collapse"
                              data-bs-target=".navbar-collapse.show"
                            >
                              <h6>{value.pageName}</h6>
                              <p>{value.pageDesc}</p>
                            </Dropdown.Item>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                      <div className="col-md-6 ">
                        {solutionPages.map((value, index) =>
                          !(index % 2) ? (
                            <Dropdown.Item
                              key={index}
                              to={`/admin-solution/${value.pageName.replace(
                                /\s+/g,
                                "-"
                              )}`}
                              onClick={(e) =>
                                navigate(
                                  `/admin-solution/${value.pageName.replace(
                                    /\s+/g,
                                    "-"
                                  )}`
                                )
                              }
                              data-bs-toggle="collapse"
                              data-bs-target=".navbar-collapse.show"
                            >
                              <h6>{value.pageName}</h6>
                              <p>{value.pageDesc}</p>
                            </Dropdown.Item>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="hover-underline-animation"
                    to="/admin-client"
                    onClick={(e) => navigate("/admin-client")}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    {value.clients}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="hover-underline-animation"
                    to="/admin-career"
                    onClick={(e) => navigate("/admin-career")}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    {value.career}
                  </Link>
                </li>
              </ul>
              <form className="d-flex btn-nav-sec">
                <ul className="navbar-nav navbar-navsec">
                  <li className="nav-item">
                    <a href={value.registerUrl}>
                      <button className="register" type="button">
                        {value.register}
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href={value.signinUrl}>
                      <button
                        className="sign-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                      >
                        {value.signin}
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to={`/admin-dashboard/update-header/${value._id}`}>
                      <button
                        className="sign-in"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                      >
                        Edit
                      </button>
                    </Link>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      ))}
    </>
  );
};

export default AdminHeader;
