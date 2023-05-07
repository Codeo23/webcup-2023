import { faCheck, faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

export const Pricing = (props: Props) => {
    return (
        <section className='pricing'>
           <h2 className='title-section'>Entre rêves et des cauchemars</h2>
            <div className='pricing-card'>
                <div className='icones'>
                    <div className='first'></div>
                    <div className='second'></div>
                    <div className='icone'><div className='icone-wrapper'></div></div>
                    <div className='third'></div>
                    <div className='fourth'></div>
                </div>
                <h1 className='title'>Consulter un professionnel</h1>
                <p className='desc'>Les cauchemars récurrents peuvent être effrayants et vous empêcher de dormir paisiblement.</p>
                <div className='tarifs'>
                    <div className='monthly'>

                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Mais ne laissez pas ces rêves vous hanter</p>
                        </div>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Il est temps de prendre soin de vous et de votre sommeil.</p>
                        </div>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Si vous êtes victime de cauchemars récurrents, il est temps de parler à un professionnel. </p>
                        </div>
                    </div>

                    <div className='monthly'>

                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Ne souffrez pas en silence</p>
                        </div>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Prenez rendez-vous dès maintenant et commencez votre voyage vers un sommeil plus serein</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}