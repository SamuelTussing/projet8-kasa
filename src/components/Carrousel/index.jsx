import ArrowLeft from '../../assets/arrow_left.png'
import ArrowRight from '../../assets/arrow_right.png'
import React, {useState} from "react"




function Slider(carrouselPics) {
    
let nbrPictures = carrouselPics.data.length
let dataPics =carrouselPics.data



    //UseState to know at wich slide we are
    const [slide,setSlide] = useState(0);

    //on click on right arrow add +1 to slide -1 for left arrow.
    //if we are at slide 1 and go left we arrive at last slide
    //if we are at last slide and go right we arrive on first slide
    const nextSlide = () => {
        setSlide(slide === nbrPictures - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? nbrPictures - 1 : slide - 1)
    }

    const displayImageCount = `${slide + 1}/${nbrPictures}`

    //arrows and bulletpoints are visible only if there is more than 1 image in database
    return <div className="carousel">

                <div className='arrow arrow_left' onClick={prevSlide}>
                {nbrPictures > 1 ? <img src={ArrowLeft} alt='précédent' /> : ""}
                </div>
                <div className='arrow arrow_right' onClick={nextSlide}>
                {nbrPictures > 1 ? <img src={ArrowRight} alt='suivant' /> : ""}
                </div>

                {dataPics.map((item,index) =>{
                    return <img
                        src={item}
                        key={item}
                        alt={item.alt}
                        className={slide === index ? "slide" : "slide slide_hidden"}/>
                })}
                
                <div className="pagination">{displayImageCount}</div>

            </div>
}

export default Slider 