import React from 'react';
import Button from '../Resusable/Button';
import Nav from '../Resusable/Nav';
import './Home.css';
import Illustration from '../Icons/illustration-intro.svg';
import Benefits from '../Resusable/Benefits';
import Slider from '../Resusable/Slider';
import Mobile from '../Resusable/Mobile-Slider'
import Footer from '../Resusable/Footer';

const Home = () => {
    return (
        <div>
            <div className='bck'>
                <div className='bck-2'>
                    <Nav />
                    <div className='build-better'>
                        <div className='build-words'>
                            <h1>
                                Bring everyone together to build better projects.
                            </h1>
                            <p>
                                Manage makes it simple for the software teams <br />
                                to plan day-to-day tasks while keeping the <br />
                                larger team goal in view.
                            </p>
                            <Button words={'Get Started'} />
                        </div>

                        <div>
                            <img src={Illustration} alt='Illustraion' />
                        </div>
                    </div>

                    <div className='differ'>
                        <div>
                            <h2 className='differ-heading'>
                                What's different about Manage?
                            </h2>
                            <p className='differ-words'>
                                Manage provides all the functionality your <br />
                                team needs, without all the complexity. Our <br />
                                software is tailor-made for mordern digital <br />
                                product teams.
                            </p>
                        </div>

                        <div>
                            <Benefits id={1}
                                headings={`Track company-wide progress`}
                                words={`See how your day-to-day task fit into the wider vision.
                                      Go from tracking progress at the milestone level all the 
                                      way done to the smallest details. Never lose sight of the bigger picture again`}
                            />

                            <Benefits id={2}
                                headings={`Advanced builts-in reports`}
                                words={`Set internal delivery estimates and track progress toward
                                       company goals. Our customisable dashboard helps you 
                                       build out the reports you need to keep key stakeholders
                                       informed.`}
                            />

                            <Benefits id={3}
                                headings={`Everything you need in one place`}
                                words={`Stop jumping from one service another 
                                      to communicate, stores files, track tasks and share
                                      document. Manage offers an all-in-one team
                                      productivity solution.`}
                            />
                        </div>

                    </div>

                    <div className='sliders-cont'>
                        <Slider />
                        <Mobile />
                        <Button words={'Get Started'} />
                    </div>
                </div>
            </div>


            <div className='simplify-container'>
                <h1>
                    Simplify how your team works today.
                </h1>

                <Button white={`white`} words={`Get Started`} />


            </div>

            <Footer />
        </div>
    )
}

export default Home