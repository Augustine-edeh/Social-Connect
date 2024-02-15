const Hero = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <section className="bg-[#82182C] text-white hidden lg:grid lg:w-1/2 place-content-center">
        <img src="" alt="vector-img" />

        <p className="text-center font-extrabold text-3xl">
          SocialConnect brings
          <br />
          people together.
        </p>
        <p className="text-center">
          Stay connected with friends and followers, share your
          <br />
          moments in one place.
        </p>
      </section>
    </div>
  );
};

export default Hero;
