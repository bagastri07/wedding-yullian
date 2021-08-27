import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import Aos from "aos"
import "aos/dist/aos.css"

import Akad from './Akad'
import Dokumentasi from './Dokumentasi'
import Footer from './Footer'
import Header from './Header'
import Penutup from './Penutup'
import Undangan from './Undangan'
// import Amplop from './Amplop'
// import Ucapan from './Ucapan'

import btnOn from '../../assets/images/On.png'
import btnOff from '../../assets/images/Off.png'
// import audioku from '../../assets/images/audio.mp3'

const Home = () => {    
    const [music, setMusic] = useState(false);    
    const [scrolling, setScrolling] = useState(false);           
    useEffect(() => {
        Aos.init({duration: 1500, once: true});                           

    }, []);  // eslint-disable-line react-hooks/exhaustive-deps      
    
    const handleSound = () => {
        if(music) {
            document.getElementById("myAudio").pause()
            setMusic(false)
        }
        else {
            document.getElementById("myAudio").play()
            setMusic(true)
        }
    }
    const handleBacksound = () => {
        if(music) {
            document.getElementById("myAudio").pause()
            setMusic(false)
        }   
    }
    const handleMore = () => {
        if (scrolling === false) {    
            setScrolling(true)   
            setMusic(true)     
            document.getElementById("myAudio").play()
        }
    }

    return (
        <div className="home-container">
            <Header more={handleMore} heightHead={scrolling} />
            {
                scrolling?
                <>
                <Undangan />
                <Akad />
                <Dokumentasi handleBacksound={handleBacksound} />                
                {/* <Amplop /> */}
                {/* <Ucapan /> */}
                <Penutup />            
                <Footer />
                </>
                :''
            }                        
            <div className="btn-audio">     
                {
                    // music?
                    // <iframe src="https://res.cloudinary.com/bagastri07/video/upload/v1620572921/y2mate.com_-_Marry_Me_Thomas_Rhett_Lyrics_btvj9e.mp3"
                    //     frameBorder='0'
                    //     allow='autoplay; encrypted-media'                            
                    //     title='video'
                    //     width="0"
                    //     height="0"
                    // /> 
                    // :
                    // ''
                }         
                <audio  id="myAudio">
                    <source src="https://res.cloudinary.com/bagastri07/video/upload/v1629038085/y2mate.com_-_Perfect_Ed_Sheeran_Beyonc%C3%A9_Boyce_Avenue_acoustic_cover_on_Spotify_Apple_wevma3.mp3" type="audio/mpeg" />                    
                </audio>
                {/* <iframe id="existing-iframe-example"
                        width="0" height="0"
                        src="https://www.youtube.com/embed/p_IwENcMPOA?enablejsapi=1&start=5&playlist=p_IwENcMPOA&loop=1"
                        frameborder="0"    
                        title="video"                        
                ></iframe> */}
                {                           
                    <img src={music? btnOn: btnOff} onClick={handleSound} id="audioku" alt="" />                                                
                    
                }
            </div>
        </div>
    )
}

export default Home
