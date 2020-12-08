import React from 'react'
import FooterHome from '../components/FooterHome'
// import holder2 from '../img/holder2.jpg'   
import '../styles/About.css'
import '../styles/index.css'
import CHeadshot from '../assets/CHeadshot.jpg'
import Jheadshot from '../assets/Jheadshot.jpg'
import Sheadshot from '../assets/Sheadshot.jpg'
import Rheadshot from '../assets/Rheadshot.JPG'
import group from '../assets/group.png'
import About2 from '../assets/About2.jpg'
import AllNeighborhoods from '../assets/AllNeighborhoods.jpg'
import holder1 from '../assets/holder1.jpg'

const About = () => {

    return (
      <div className='background'>
      <div className="moveDown"></div>
      <div className="aboutcontainer">
        <div class="row">
          <div class="col-lg-4">
            <img src={Jheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Jacob Huff</h2>
            <p class='discription'>  Leader and brains of the group</p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/jacobhuff1/" role="button">View my Profile</a></p>
          </div>
          <div class="col-lg-4">
            <img src={Sheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Sierra Hudson</h2>
            <p class='discription'> The real leader of the group/Big boss </p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/sierra-hudson-75b8231b8/" role="button">View my profile</a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <img src={Rheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Ryan Twele</h2>
            <p class='discription'>Surrogate father figure of the group.</p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/ryan-twele-a168181b8/" role="button">View my profile</a></p>
          </div>
          <div class="col-lg-4">
            <img src={CHeadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Cameron Parker</h2>
            <p class='discription'> The guy </p>
            <p><a class="btn btn-lg btn-primary" href="https://www.linkedin.com/in/cameron-parker-47617b101/" role="button">View my profile</a></p>
          </div>
        </div>
      </div>
      
      

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Hard working team <span class='sub'>It'll blow your mind.</span></h2>
          <p class="lead"> Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img className='grip' src={group} alt="Generic placeholder " width='400' height='200'></img>
          <img className='grip2' src={About2} alt="Generic placeholder " width='400' height='200'></img>
        </div>
      </div>

      

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Our Wonderful City <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Cincinnati developed with fewer immigrants and less influence from Europe than East Coast cities in the same period. However, 
          it received a significant number of German-speaking immigrants, who founded many of the city's cultural institutions. 
          By the end of the 19th century, with the shift from steamboats to railroads drawing off freight shipping, trade patterns had altered and Cincinnati's growth slowed considerably. The city was surpassed in population by other inland cities, particularly Chicago, which developed based on strong commodity exploitation, economics, and the railroads, and St. Louis, which for decades after the Civil War served as the gateway to westward migration.</p>
        </div>
        <div class="col-md-5 order-md-1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166499.14050380012!2d-84.62152039172686!3d39.156970071885816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b1de3821f9%3A0x69fb7e8be4c09317!2sCincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1607461277924!5m2!1sen!2sus" width="725" height="500" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </div>

      

     

      
     <FooterHome/>

    </div>
           
    )
}

export default About