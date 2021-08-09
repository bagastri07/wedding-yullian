import React from 'react'
import avaPria from '../../assets/images/pic_pria.png'
import love from '../../assets/images/love.png'
import avaWanita from '../../assets/images/pic_wanita.png'
import stroke from '../../assets/images/stroke.png'
import strokeMirror from '../../assets/images/stroke_mirror.png'
import Countdown from 'react-countdown';

const Undangan = () => {    
    const dday = new Date(2021, 8, 10)
    // console.log(dday)
    const renderer = ({ formatted: { days, hours, minutes, seconds }}) => {        
        // return <span>Ends in:  {hours} : {minutes} : {seconds}</span>
        return (
            <div className="countdown">
                <div className="time">
                    <h1>{days}</h1>
                    <p>Hari</p>                    
                </div>
                <div className="divider">
                    :            
                </div>
                <div className="time">
                    <h1>{hours}</h1>
                    <p>Jam</p>                    
                </div>
                <div className="divider">
                    :            
                </div>
                <div className="time">
                    <h1>{minutes}</h1>
                    <p>Menit</p>                    
                </div>
                <div className="divider">
                    :            
                </div>
                <div className="time">
                    <h1>{seconds}</h1>
                    <p>Detik</p>                    
                </div>
            </div>
        )
    };
    return (
        <div  id="undangan-wed">

            <div className="undangan-container" data-aos="fade-up">
                <div className="salam">
                    <p>Assalamualaikum</p>
                </div>
                <div className="stroke">
                    <img src={stroke} alt="" />
                </div>
                <Countdown date={dday} renderer={renderer} />
                {/* <div className="countdown">
                    {
                        dataWaktu.map((data, key) => (
                        <>
                            <div className="time" key={key}>
                                <h1>{data.num}</h1>
                                <p>{data.text}</p>                    
                            </div>
                            {
                                key !== 3?
                                <div className="divider">
                                    :            
                                </div>
                                :''
                            }
                        </>
                        ))
                    }                
                </div> */}
                <div className="deskripsi">
                    <p>Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan.</p>                
                </div>
                <div className="pasangan">
                    <div className="profil-info">
                        <p>Sumiyati</p>
                        <p>Putri dari Bapak Sahe dan Ibu Yulian</p>
                    </div>
                    <div className="profil-pic">
                        <img className="round-ava" src={avaWanita} alt="" />
                        <img className="love" src={love} alt="" />
                        <img className="round-ava" src={avaPria} alt="" />
                    </div>
                    <div className="profil-info">
                        <p>Yulian</p>
                        <p>Putra dari Bapak Sayuti dan Ibu Arliah</p>
                    </div>
                </div>
                <div className="stroke">
                    <img src={strokeMirror} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Undangan
