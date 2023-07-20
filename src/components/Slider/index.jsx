import ArrowLeft from '../../assets/arrow_left.png'
import ArrowRight from '../../assets/arrow_right.png'
import { annoncesList } from '../../datas/test'
import React, {useState} from "react"

function Slider({data}) {
    const [slide,setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }


//console.table(data)
console.log(slide)
    return <div className="carousel">
        <div className='arrow arrow_left' onClick={prevSlide}>
            <img src={ArrowLeft} alt='g' />
        </div>
        {data.map((item,index) =>{
        return <img
                src={item.src}
                key={data.index}
                alt={item.alt}
                className={slide === index ? "slide" : "slide slide_hidden"}/>
    })}
    <div className='arrow arrow_right' onClick={nextSlide}>
            <img src={ArrowRight} alt='d' />
        </div>
    <span className="indicators">
        {data.map((_,index) =>{
            return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator indicator_selected" : "indicator"}></button>
        })}
    </span>
    </div>
}

export default Slider