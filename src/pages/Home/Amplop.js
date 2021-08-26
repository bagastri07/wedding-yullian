import React, { useState } from 'react'
import imgBarcode from '../../assets/images/barcode.jpeg'
import imgBarcode1 from '../../assets/images/transfer_bank.jpg'

const Amplop = () => {
    const [btn, setBtn] = useState(true)
    return (
        <div className="amplop-container">
            <h1 className="title" data-aos="fade-up">Amplop Online</h1>
            <p className="deskripsi" data-aos="fade-up">Bagi para undangan yang ingin memberikan amplop secara digital dapat menggunakan metode yang ada di bawah ini</p>
            <div className="option" data-aos="fade-up">
                <div className="option-online">
                    <div className="btn" onClick={() => setBtn(true)}>
                        Dana
                    </div>
                    <div className="btn" onClick={() => setBtn(false)}>
                        Transfer
                    </div>
                </div>
                <div className="option-barcode">
                    {
                        btn?
                        <>
                            <img src={imgBarcode} alt="" />
                            <p>A/N Sumiyati</p>
                        </>
                        :
                        <>
                            <img className="transfer" src={imgBarcode1} alt="" />
                            <p className="norek">8585191040</p>
                            <p>A/N Yulian</p>
                        </>
                    }                    
                </div>
            </div>
        </div>
    )
}

export default Amplop
