
import Slider from '../../components/Slider'

import { annoncesList } from '../../datas/test'

function Logement() {
    return (
        <div className='container'>
            <Slider data={annoncesList} />
        </div>
    )
}

export default Logement