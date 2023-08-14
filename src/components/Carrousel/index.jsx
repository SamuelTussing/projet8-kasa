import ArrowLeft from '../../assets/arrow_left.png'
import ArrowRight from '../../assets/arrow_right.png'
import React, {useState} from "react"




function Carrousel(carrouselPics) {
    
let nbrPictures = carrouselPics.data.length
let dataPics =carrouselPics.data




    //UseState to define img index
    const [currentImageIndex, setCurrentImageIndex] = useState(0)



    //on click on right arrow add +1 to slide -1 for left arrow.
    //if we are at slide 1 and go left we arrive at last slide
    //if we are at last slide and go right we arrive on first slide
    const previousImage = () => {
        // Fonction pour afficher l'image précédente
        setCurrentImageIndex((index) => (index === 0 ? nbrPictures - 1 : index - 1));
      };
    
      const nextImage = () => {
        // Fonction pour afficher l'image suivante
        setCurrentImageIndex((index) => (index === nbrPictures - 1 ? 0 : index + 1));
      };

      // variable to show the pagination
    const displayImageCount = `${currentImageIndex + 1}/${nbrPictures}`

    if(nbrPictures === 1){
        
        //arrows and bulletpoints are visible only if there is more than 1 image in database
    return <div className="carousel">

    {/*click handle with arrows on left and right*/ }
    <div className='arrow arrow_left' onClick={previousImage}>
    {nbrPictures > 1 ? <img src={ArrowLeft} alt='précédent' /> : ""}
    </div>
    <div className='arrow arrow_right' onClick={nextImage}>
    {nbrPictures > 1 ? <img src={ArrowRight} alt='suivant' /> : ""}
    </div>

    {/*picture that is shown*/ }
    <img src={dataPics[currentImageIndex]} alt={dataPics.alt} className= "slide"/>

    </div>


    }else{
        return <div className="carousel">

    {/*click handle with arrows on left and right*/ }
    <div className='arrow arrow_left' onClick={previousImage}>
    {nbrPictures > 1 ? <img src={ArrowLeft} alt='précédent' /> : ""}
    </div>
    <div className='arrow arrow_right' onClick={nextImage}>
    {nbrPictures > 1 ? <img src={ArrowRight} alt='suivant' /> : ""}
    </div>

    {/*picture that is shown*/ }
    <img src={dataPics[currentImageIndex]} alt={dataPics.alt} className= "slide"/>
    <div className="pagination">{displayImageCount}</div>
    </div>
    }

}    


export default Carrousel 