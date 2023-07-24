import { annoncesList } from '../../datas/test'


function CategoryButton(){
    const tags = annoncesList.reduce(
        (acc,annonces) =>
        acc.includes(annonces.tags) ? acc : acc.concat(annonces.tags),
        []
    )

    return (
        <div className='categoryButton'>
            <ul className='categoryButton_btn'>
                {tags.map((tag) =>(
                    <li key={`id/${tag}`}>{tag}</li>
                
                ))}
            </ul>
        </div>

    )
}

export default CategoryButton