import { useParams } from 'react-router-dom'
import { annoncesList } from '../../datas/annonces'



//this component shows the rating of the logement with stars
//useParams to get id of the logement
// then we find the logmeent in database and create a variable with rating value

//array value stars and set index +1 to have first index = 1
//return stars with classname if rating >= to star index then star is red else is grey
function RatingStar(){

    const { id } = useParams()
    const logement = annoncesList.find((opop) => opop.id === id)
    const ratingAnnonce = logement.rating
    console.log(ratingAnnonce)

return(
    <div className="rating" key="rating">
        {[...Array(5)].map((star, index) => {
            index +=1;
            return( <div key={`key${index}`}>           
                <i className={ratingAnnonce >= index ? "fa-solid fa-star red small" : "fa-solid fa-star small"} id={index} key={index}></i>
                <i className={ratingAnnonce >= index ? "fa-solid fa-star red big fa-2x" : "fa-solid fa-star big fa-2x"} id={index}key={`1+${index}`}></i>
                </div>  )
        })}
    </div>
)

}

export default RatingStar

