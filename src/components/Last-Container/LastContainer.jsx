import { ArticlesContainer} from "./ArticlesContainer"

import imgGaming from '../../assets/images/image-gaming-growth.jpg'
import imgKey from '../../assets/images/image-top-laptops.jpg'
import imgRetro from '../../assets/images/image-retro-pcs.jpg'


const data = [
    {
        number: '01',
        title: 'Reviving Retro PCs',
        desc: 'What happens when old PCs are given modern upgrades?',
        image: imgRetro

    },
    {
        number: '02',
        title: 'Top 10 Laptops of 2022',
        desc: 'Our best picks for various needs and budgets.',
        image: imgKey

    },
    {
        number: '03',
        title: 'The Growth of Gaming',
        desc: 'How the pandemic has sparked fresh opportunities.',
        image: imgGaming

    },
]

export const LastContainer = () => {
  return (
    <section className="mt-8 md:flex md:flex-wrap md:gap-10 lg:pt-10 xl:pt-20">
        {
            data.map((section) => 
                <ArticlesContainer key={section.number} data={section}/>
            
            )
        }
    </section>
  )
}


  


 
