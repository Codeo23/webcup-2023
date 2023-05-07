import { faCheck, faDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

export const Pricing = (props: Props) => {
    return (
        <section className='pricing'>
           <h2 className='title-section'>Découvrez nos tarifs <br/>de consultation d'un professionel</h2>
            <div className='pricing-card'>
                <div className='icones'>
                    <div className='first'></div>
                    <div className='second'></div>
                    <div className='icone'><div className='icone-wrapper'>
                    <FontAwesomeIcon icon={faDollar}/></div></div>
                    <div className='third'></div>
                    <div className='fourth'></div>
                </div>
                <h1 className='title'>Select your Plan</h1>
                <p className='desc'>Séléctionnez le tarif qui vous correspond.<br/> et après veuillez le confirmer!</p>
                <div className='tarifs'>
                    <div className='monthly'>
                        <button>Monthly</button>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Pricing Feature Here</p>
                        </div>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Pricing Feature Here</p>
                        </div>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Pricing Feature Here</p>
                        </div>
                    </div>

                    <div className='monthly'>
                        <button>Monthly</button>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Pricing Feature Here</p>
                        </div>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Pricing Feature Here</p>
                        </div>
                        <div className='tarifs-item'>
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <p>Pricing Feature Here</p>
                        </div>
                    </div>
                </div>

                <div className='price'>
                    <p><span>$48.00</span>/mo</p>
                    <button>Activer</button>
                </div>
            </div>
        </section>
    )
}