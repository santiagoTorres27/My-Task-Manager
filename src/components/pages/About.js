import React from 'react'
import imgAbout from '../../assets/img/home-2.png'
import imgAbout2 from '../../assets/img/home.png'
import imgAbout3 from '../../assets/img/home-3.png'
import classes from './About.module.css'

const About = () => {
    return (
        <div className={classes.about}>
            <section>
                <div className={classes.ab}>
                    <img src={imgAbout} alt="" />
                    <div>
                        <h2 className='d-2'>Add future tasks</h2>
                        <p>Organize all your tasks with this application, just add them and you will have a record of all your future things to do.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className={classes.ab}>
                    <div>
                        <h2 className='d-2 white'>Organize your tassks</h2>
                        <p className='white'>Organize your next tasks by categories so you can have more control and organization.</p>
                    </div>

                    <img src={imgAbout2} alt="" />
                </div>
            </section>

            <section>
                <div className={classes.ab}>
                    <img src={imgAbout3} alt="" />
                    <div>
                        <h2 className='d-2'>Take control of your life</h2>
                        <p>Never forget your tasks again, organize them and keep a daily follow-up of your progress</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
