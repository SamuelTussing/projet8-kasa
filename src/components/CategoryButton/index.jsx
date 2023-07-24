import { annoncesList } from '../../datas/annonces'
import { useParams } from 'react-router-dom'


function CategoryButton(){

    //useParams helps us to get the id of the annonce.
    // .find to get data from the logmeent having this ID
    const { id } = useParams()
    const logement2 = annoncesList.find((opop) => opop.id === id)
    //variable for the logmeent tags
    const data2 = logement2.tags

        //mapping data2 to create 1 li per tag
    return (
        <div className='categoryButton'>
            <ul className='categoryButton_btn'>
                {data2.map((tag) =>(
                    <li key={`id/${tag}`}>{tag}</li>
                
                ))}
            </ul>
        </div>

    )
}

export default CategoryButton 