import { Carousel } from 'react-bootstrap'
import dishes from '../data/menu.json'
// dishes is an array of 5 objects
// each object is a pasta dish
// I want to create a carousel slide for each pasta dish

const Home = () => (
    <Carousel>
        {
            dishes.map(dish => (
                <Carousel.Item key={dish.name}>
                    <img
                        className="d-block w-100"
                        src={dish.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )
        }
    </Carousel>
)

export default Home