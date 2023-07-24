import ArrowLeft from '../../assets/arrow_left.png'
import ArrowRight from '../../assets/arrow_right.png'
import { useParams } from 'react-router-dom'
import React, {useState} from "react"
import { annoncesList } from '../../datas/annonces'



function Slider({data}) {

    //UseState to know at wich slide we are
    const [slide,setSlide] = useState(0);

    //on click on right arrow add +1 to slide -1 for left arrow.
    //if we are at slide 1 and go left we arrive at last slide
    //if we are at last slide and go right we arrive on first slide
    const nextSlide = () => {
        setSlide(slide === logement.pictures.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? logement.pictures.length - 1 : slide - 1)
    }


    //useParams helps us to get the id of the annonce.
    // .find to get data from the logmeent having this ID
    const { id } = useParams()
    const logement = annoncesList.find((opop) => opop.id === id)
    
    //creating variable for the pictures to map it in <return>
    const data2 = logement.pictures



    return <div className="carousel">
                <div className='arrow arrow_left' onClick={prevSlide}>
                    <img src={ArrowLeft} alt='g' />
                </div>
                {data2.map((item,index) =>{
                    return <img
                        src={item}
                        key={item}
                        alt={item.alt}
                        className={slide === index ? "slide" : "slide slide_hidden"}/>
                })}
                <div className='arrow arrow_right' onClick={nextSlide}>
                    <img src={ArrowRight} alt='d' />
                </div>
                <span className="indicators">
                    {data2.map((_,index) =>{
                        return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator indicator_selected" : "indicator"}></button>
                    })}
                </span>
            </div>
}

export default Slider 