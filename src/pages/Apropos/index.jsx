import Banner from '../../components/Banner';
import Accordion from '../../components/VerticalAccordion'
import bannerPicture from '../../assets/Image source 2.png'
import aboutData from '../../datas/apropos.json'

function aPropos() {
    return (
      <div className='apcontainer'>
        <Banner 
              image = {bannerPicture}
              alt = "Photo de montagne"
              title = ""/>
          {aboutData.map((data, index) => (
          <Accordion key={index} title={data.title} content={data.description} />
        ))}
        <Accordion />
      </div>
  
  );
  }
  
  export default aPropos;