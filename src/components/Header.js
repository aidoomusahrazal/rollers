import React from 'react'
import fImg from '../images/image (5).png'
import sImg from '../images/image (6).png'
import tImg from '../images/image (7).png'
import ffImg from '../images/image (8).png'

export default function Header() {
    return (
        <div>
        <h1>Categories</h1>
            <div className="categories">
                <div className="images">
                <img src={fImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                
                <div className="images">
                <img src={sImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={tImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
            </div>

            <div className="recents">
            <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
                <div className="images">
                <img src={ffImg} alt="roller" />
                <h3>Design Pattern roller</h3>
                <p>170 cedis</p>
                </div>
            </div>
        </div>
    )
}
