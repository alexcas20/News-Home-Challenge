import { NewsArticle } from "./NewsArticle";

const data = [
  {
    title: "Hydrogen VS Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const NewsContainer = () => {
  return (
    <aside className="bg-Verydarkblue px-[20px] text-Off-white flex-none lg:w-[350px] ">
      <h1 className="text-Softorange text-3xl py-3 font-bold ">New</h1>
      {data.map((article, i) => (
        <NewsArticle key={i} data={article} />
      ))}
    </aside>
  );
};
