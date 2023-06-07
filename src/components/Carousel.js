import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpg';
import img5 from '../images/img5.PNG';


function UserCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ 'objectFit': 'fill' }}
                    src={img5}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ 'objectFit': 'contain' }}
                    src={img2}
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default UserCarousel;