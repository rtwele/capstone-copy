import React from 'react'
import FooterHome from '../components/FooterHome'
// import holder2 from '../img/holder2.jpg'   
import '../styles/About.css'
import '../styles/index.css'

import Jheadshot from '../assets/Jheadshot.jpg'
import Sheadshot from '../assets/Sheadshot.jpg'
import Rheadshot from '../assets/Rheadshot.JPG'
import Nippert_new1 from '../assets/Nippert_new1.jpg'

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
          </div>
          <div class="col-lg-4">
            <img src={Sheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <img src={Rheadshot} alt="Generic placeholder " width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          </div>
          <div class="col-lg-4">
            <img src="data:/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder " width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          </div>
        </div>
      </div>

      <hr class="featurette-divider"></hr>

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette- img-fluid mx-auto" data-src={Nippert_new1} alt="Generic placeholder "></img>
        </div>
      </div>

      <hr class="featurette-divider"></hr>

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="featurette- img-fluid mx-auto" src='' alt="Generic placeholder "></img>
        </div>
      </div>

      <hr class="featurette-divider"></hr>

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette- img-fluid mx-auto" src='' alt="Generic placeholder "></img>
        </div>
      </div>

      <hr class="featurette-divider"></hr>
     <FooterHome/>

    </div>

           
    )
}

export default About