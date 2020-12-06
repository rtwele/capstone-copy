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
import asstan from '../assets/asstan.png'

const About = () => {

    return (
      <div>
      <div className="moveDown"></div>
      <div className="aboutcontainer">
        <div class="row">
          <div class="col-lg-4">
            <img src={Jheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a class="btn btn-lg btn-primary" href=" " role="button">Browse gallery</a></p>
          </div>
          <div class="col-lg-4">
            <img src={Sheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a class="btn btn-lg btn-primary" href=" " role="button">Browse gallery</a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <img src={Rheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a class="btn btn-lg btn-primary" href=" " role="button">Browse gallery</a></p>
          </div>
          <div class="col-lg-4">
            <img src={CHeadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a class="btn btn-lg btn-primary" href=" " role="button">Browse gallery</a></p>
          </div>
        </div>
      </div>

      

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Hard working crew <span class='sub'>It'll blow your mind.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette- img-fluid mx-auto" className='grip' src={group} alt="Generic placeholder " width='400' height='200'></img>
          <img class="featurette- img-fluid mx-auto" className='grip2' src={About2} alt="Generic placeholder " width='400' height='200'></img>
        </div>
      </div>

      

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="featurette- img-fluid mx-auto" className='ass' src={asstan} alt="Generic placeholder " width='400' height='200'></img>
        </div>
      </div>

      

     

      
     <FooterHome/>

    </div>

           
    )
}

export default About