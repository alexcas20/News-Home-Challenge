export const ArticlesContainer = ({ data }) => {
  const { number, title, desc, image } = data;
  return (
    <article className="flex mb-8 md:w-[343px] md:flex-grow ">
      <div className="w-[100px] flex-none">
        <img src={image} alt="" />
      </div>
      <div className="pl-6 flex flex-col place-content-evenly ">
        <p className="font-bold text-Softred text-3xl ">{number}</p>
        <h2 className="font-bold hover:text-Softorange cursor-pointer ">{title}</h2>
        <p className="text-Darkgrayishblue ">{desc}</p>
      </div>
    </article>
  );
};
