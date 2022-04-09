import './modal.css' 
// import OwlCarousel from 'react-owl-carousel';
import Slider from "react-slick";


const AddressModal = ({stores,heading}) => {  
    
  const closeModal =()=>{ 
    document.getElementById('addressModal').classList.remove('active')
  } 
   
   const state={ responsive:{
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2.5,
        },
        1000: {
            items: 3,

        }
    }  }
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay:true,
        nav:true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
      <div className="modalContainer" id='addressModal'>
          <div className="modal">
              <h2>{heading} Stores</h2>
             <Slider className='owl-theme'   {...settings}>
                {stores?.map((store,index)=><div class='item'>
                   <h3>Store # {index +1}</h3>
                   <span>{store.address}</span>
                   <span>{store.city} - {store.postalCode}</span>
                   <span>{store.contact}</span>
                </div>)}
                
            </Slider> 
            {/* <div className='ModalAddressess'>
                <div className="ModalRow">
                    <div>
                       <strong> City</strong>
                    </div>
                   <div>
                        <strong>Contact</strong>
                    </div>
                     <div>
                        <strong>Address</strong>
                    </div>

                </div>
               {stores?.map(({city,address,contact,link})=> <div className="ModalRow">
                    <div> 
                        {city}
                    </div>
                    <div> 
                        {contact}
                    </div>
                    <div> 
                        <a href={link} target='_blank'>
                            {address}
                        </a>
                    </div>

                </div>)}
            </div> */}
                <button onClick={closeModal} >Back to Page</button>
          </div>
      </div>
  )
}

export default AddressModal