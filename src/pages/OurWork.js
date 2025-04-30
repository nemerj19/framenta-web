import React from "react";
//import PageLayout from "../components/PageLayout";

function OurWork() {
  return (
    <>
      <h2 style={{ marginBottom: "1rem" }}>Our Work</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Project 1: To-Do App */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            borderRadius: "8px",
            padding: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src="/images/plan-for-tomorrow.png"
            alt="To-Do App Project"
            style={{ width: "100%", borderRadius: "6px" }}
          />
          <h3 style={{ marginTop: "1rem" }}>To-Do App</h3>
          <p>A minimal productivity app to manage daily tasks efficiently.</p>
          <a
            href="https://github.com/nemerj19/plan-for-tomorrow"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00bfff", textDecoration: "underline" }}
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            borderRadius: "8px",
            padding: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src="/images/Travel-Blog.png"
            alt="Project 2"
            style={{ width: "100%", borderRadius: "6px" }}
          />
          <h3 style={{ marginTop: "1rem" }}>Travel Blog</h3>
          <p>Shows real-time users sharing blogs about traveling.</p>
          <a
            href="https://github.com/nemerj19/blog-f-b"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00bfff", textDecoration: "underline" }}
          >
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            borderRadius: "8px",
            padding: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src="/images/Rimstar .png"
            alt="Project 3"
            style={{ width: "100%", borderRadius: "6px" }}
          />
          <h3 style={{ marginTop: "1rem" }}>Client's Website</h3>
          <p>
            A personal client's Website to showcase web design and development
            work.
          </p>
          <a
            href="https://rimstarest.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00bfff", textDecoration: "underline" }}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default OurWork;
