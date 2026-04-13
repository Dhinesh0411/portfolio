import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Replace 'octocat' with your GitHub username
        const response = await fetch('https://api.github.com/users/octocat/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div className="loading">Loading projects...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My GitHub Projects</h2>
        <div className="projects-grid">
          {repos.map(repo => (
            <div key={repo.id} className="project-card">
              <h3>{repo.name}</h3>
              <p>{repo.description || 'No description available'}</p>
              <div className="project-details">
                <span className="language">{repo.language || 'N/A'}</span>
                <span className="stars">⭐ {repo.stargazers_count}</span>
              </div>
              <div className="project-links">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Code</a>
                {repo.homepage && <a href={repo.homepage} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;