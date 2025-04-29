import React from "react";
import PageLayout from "../components/PageLayout";

function Home() {
  return (
    <PageLayout>
      <h1>Who We Are?</h1>
      <img
        src="/images/team.jpg"
        alt="Our Team"
        style={{ maxWidth: "70%", borderRadius: "30px" }}
      />

      <p>
        "At Framenta, a web design company under Reem Al Njoom, Nemer — a
        full-stack developer specializing in front-end development — leads a
        passionate team of web developers focused on delivering high-quality,
        custom websites. We are dedicated to crafting digital solutions that not
        only look amazing but also drive business success through enhanced user
        experience, performance, and scalability. Our approach blends creativity
        with cutting-edge technologies to ensure that every website we build is
        responsive, SEO-friendly, and tailored to meet our clients’ unique
        goals. Whether you're a startup or an established brand, we work closely
        with you to transform your ideas into engaging digital experiences that
        stand out in today’s competitive market."
      </p>
    </PageLayout>
  );
}

export default Home;
