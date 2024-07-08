export const NewsArticle = ({data}) => {

    const {title, desc} = data;
  return (
    <article className=" border-b-2 border-Grayishblue py-7 last:border-none ">
      <h2 className="font-bold text-2xl cursor-pointer hover:text-Softorange lg:text-[16px] xl:text-2xl mb-1">{title}</h2>
      <p className="text-[16px] text-Grayishblue text-justify">{desc}</p>
    </article>
  );
};
