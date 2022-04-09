import './modal.css' 
import OwlCarousel from 'react-owl-carousel';

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
  return (
      <div className="modalContainer" id='addressModal'>
          <div className="modal">
              <h2>{heading} Stores</h2>
             <OwlCarousel className='owl-theme'   autoplay   loop margin={10} nav dots={false} responsive={state.responsive}>
                {stores?.map((store,index)=><div class='item'>
                   <h3>Store # {index +1}</h3>
                   <span>{store.address}</span>
                   <span>{store.city} - {store.postalCode}</span>
                   <span>{store.contact}</span>
                </div>)}
                
            </OwlCarousel> 
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