import { HomeContainer, Product } from "@/styles/pages/home";
import { useKeenSlider } from "keen-slider/react"

import Image from "next/image";

import shirt1 from "@/assets/camisetas/1.png"
import shirt2 from "@/assets/camisetas/2.png"
import shirt3 from "@/assets/camisetas/3.png"

import "keen-slider/keen-slider.min.css"

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.8,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide" href="/">
        <Image src={shirt1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide" href="/">
        <Image src={shirt2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide" href="/">
        <Image src={shirt3} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide" href="/">
        <Image src={shirt3} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide" href="/">
        <Image src={shirt3} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
