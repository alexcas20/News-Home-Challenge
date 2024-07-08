import mainImageMobile from "../../assets/images/image-web-3-mobile.jpg";
import mainImageDesktop from "../../assets/images/image-web-3-desktop.jpg";

export const MainComponent = () => {
  return (
    <section>
      <picture>
        <source media="(max-width: 640px)" srcSet={mainImageMobile} />
        <source media="(min-width: 641px)" srcSet={mainImageDesktop} />
        <img src={mainImageMobile} alt="Main image" />
      </picture>

      {/* parent container */}
      <div className="sm:flex">
        <div className="flex-1 pt-6">
          <h2 className="text-5xl font-bold mb-4 lg:text-6xl">
           
            The Bright Future of Web 3.0?
          </h2>
        </div>
        <div className="flex-1 sm:px-12 sm:pt-6">
          <p className="text-[20px] mb-10 text-Darkgrayishblue lg:text-[15.5px] xl:text-[20px] text-justify sm:mb-4">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-Softred w-[190px] p-3 mb-16 uppercase text-Verydarkblue font-bold hover:bg-Verydarkblue hover:text-Off-white">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
