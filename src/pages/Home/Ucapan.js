import React from 'react'
import Slider from "react-slick";
import pic1 from '../../assets/images/ucapan_3.png'
import pic2 from '../../assets/images/ucapan_2.png'
import pic3 from '../../assets/images/ucapan_4.png'
import pic4 from '../../assets/images/ucapan_5.png'
import pic5 from '../../assets/images/ucapan_6.png'
import pic6 from '../../assets/images/ucapan_7.png'
import arrBack from "../../assets/images/Slider/ArrowBack.png";
import arrNext from "../../assets/images/Slider/ArrowNext.png";

function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-next"
        onClick={onClick}
      >
          <img src={arrNext} alt="" />
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-back"        
        onClick={onClick}
      >
          <img src={arrBack} alt="" />
      </div>
    );
  }
  const Ucapan = () => {
    // const ref = useRef(null);      
    // console.log(width)  

    const settings = {
      className: "center",
      dots: true,      
      infinite: true,      
      speed: 500,
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,     
      adaptiveHeight: true,   
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };  
    const people = [ 
        {
            url: pic1,
            name: 'Lucita Sibarani',
            pesan: 'Pernikahan membuat orang mengetahui bahwa hidup tidak satu warna, namun ada banyak warna yang membahagiakan. Beli kayu. Di kota Kendari. Selamat Mba Ayu Udah sah jadi Istri. Selamat menempuh hidup baru yang penuh warna Ayu & Beka'
        },
        {
            url: pic2,
            name: 'Bayu Mahendra',
            pesan: 'Tidak semua yang diberikan harus dikatakan, Seperti Cinta yang selalu ada dalam Doa disepanjang jalan menuju persinggahan'
        },
        {
            url: pic3,
            name: 'Aulia Qotrunnada',
            pesan: 'Tak selamanya yang dianggap pahit akan berujung pahit, begitu juga yang dianggap indah tak selamanya berujung indah. Semua tergantung dengan pemikiran masing-masing individu. Tetapi akan berbeda cerita jika telah menemukan seseorang yang dengan tulus mencintai. Apa yang dianggap indah akan selalu indah, tanpa ada kepahitan di dalamnya'
        },
        {
            url: pic4,
            name: 'Nani Surdayani',
            pesan: 'Perjalanan hidup manusia itu tidak mudah. Begitu pula dengan perjalanan hati yang berjuang menemukan cintanya. Ketika hati berhasil menemukan cintanya, maka cintailah tanpa syarat'
        },
        {
            url: pic5,
            name: 'Remy Rashilla Abdan',
            pesan: "Wishing you a lifetime of love and happiness"
        },
        {
            url: pic6,
            name: 'Zidan Febrian',
            pesan: "Love is truly amazing. There’s been up, there’s been down. But the fighter of love still able to survive. If you believe in love, love will guide you until happiness"
        },
    ] 
    return (
        <div className="ucapan-container" id="gal-wed" data-aos="fade-up">            
          <h1 className="title">Dari Sahabat</h1>            
          {/* <div ref={ref} style={{width: '100%'}}>Hello</div> */}
          <div className="carousel" style={{width: '80%'}} data-aos="fade-up">
            <Slider {...settings} >
              {
                people.map(person => (
                  <div >
                      <div className="carousel-img">
                          <img src={person.url} alt="" />
                        <h3>{person.name}</h3>
                        <p>"{person.pesan}"</p>
                      </div>
                  </div>   

                ))
              }
                                
            </Slider>
          </div>          
        </div>
    )
}

export default Ucapan
