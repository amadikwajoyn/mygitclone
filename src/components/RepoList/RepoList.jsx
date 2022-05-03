import React, { useLayoutEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { useAPI } from "../../hooks/useAPI";
import { ReactComponent as Stars } from "../../assets/header/stars.svg";

import "./RepoList.css";
import { useSelector } from "react-redux";

function RepoList() {
  const { getUserRepos } = useAPI();
  const { list } = useSelector((state) => state.userRepositories);

  console.log(list);

  useLayoutEffect(() => {
    getUserRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-100">
      {list.length
        ? list.map((repo) => (
            <div className="repo-list-container">
              <div className="repo-list-texts">
                <div className="repo-list-texts-list">
                  <p className="repo-list-texts-name">{repo.name}</p>
                  <p className="repo-list-texts-btn repo-list-texts-btn-public">
                    {repo.visibility.slice(0,1).toUpperCase() + repo.visibility.slice(1)}
                  </p>
                </div>

                <div
                  class="btn-group btn-repo-star"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <button type="button" class="btn btn btn-repo-star-text">
                    <Stars /> Star
                  </button>
                  <div
                    class="btn-group btn-repo-star btn-repo-star-text"
                    role="group"
                  >
                    <NavDropdown
                      id="basic-nav-dropdown"
                      className="btn-repo-star-text"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Future Idea
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        My Stack
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </div>
              </div>
              <div className="repo-list-texts">
                <div className="repo-list-texts-list">
                  {repo.language ? (
                    <p>
                      <span class="repo-language-color"></span>
                      {repo.language}
                    </p>
                  ) : null}
                  <p>{new Date(repo.updated_at).toLocaleDateString()}</p>
                </div>
                <div className="repo-list-texts-list">
                  <p>line...............</p>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default RepoList;
