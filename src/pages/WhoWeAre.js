import React from "react";

function Home() {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          marginTop: "4rem",
        }}
      >
        About Us
      </h2>
      <img
        src="/images/team.jpg"
        alt="Our Team"
        style={{
          maxWidth: "70%",
          borderRadius: "30px",
          display: "block", // Ensures image is centered
          margin: "0 auto", // Centers the image horizontally
        }}
      />

      <p>
        "At Framenta, a web design company based in Riyadh, under Reem Al Njoom
        Group, Nemer — a full-stack developer specializing in front-end
        development — leads a passionate team of web developers focused on
        delivering high-quality, custom websites. We are dedicated to crafting
        digital solutions that not only look amazing but also drive business
        success through enhanced user experience, performance, and scalability.
        Our approach blends creativity with cutting-edge technologies to ensure
        that every website we build is responsive, SEO-friendly, and tailored to
        meet our clients’ unique goals. Whether you're a startup or an
        established brand, we work closely with you to transform your ideas into
        engaging digital experiences that stand out in today’s competitive
        market."
      </p>
    </>
  );
}

export default Home;
