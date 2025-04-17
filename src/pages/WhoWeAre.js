import React from "react";
import PageLayout from "../components/PageLayout";

function Home() {
  return (
    <PageLayout>
      <h1>Who We Are?</h1>
      <img
        src="/images/team.png"
        alt="Our Team"
        style={{ maxWidth: "100%", borderRadius: "10px" }}
      />
      ;
      <p>
        "At Framenta, Nemer, a full-stack developer specializing in front-end
        development, leads a passionate team of web developers focused on
        delivering high-quality, custom websites. We are dedicated to crafting
        digital solutions that not only look amazing but also drive business
        success by enhancing user experience and performance."
      </p>
    </PageLayout>
  );
}

export default Home;
