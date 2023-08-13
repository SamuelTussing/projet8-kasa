import Banner from '../../components/Banner';
import AccordeonChild from '../../components/Accordeon/index';
import bannerPicture from '../../assets/Image source 2.png'
import aboutData from '../../datas/apropos.json'

function aPropos() {
    return (
      <div className='apcontainer'>
        <Banner 
              image = {bannerPicture}
              alt = "Photo de montagne"
              title = ""/>
              <div className = 'apAccordion'>
                {aboutData.map((data, index) => (
                  <AccordeonChild 
                  key={data.id} 
                  title={data.title} 
                  content={data.content} />
                ))}
                  
        </div>
      </div>
  
  );
  }
  
  export default aPropos;