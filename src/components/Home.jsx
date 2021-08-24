import { Carousel, Col, Container, Row } from 'react-bootstrap'
import dishes from '../data/menu.json'
import { Component } from 'react'
// dishes is an array of 5 objects
// each object is a pasta dish
// I want to create a carousel slide for each pasta dish

// now we'll implement a STATE in the Home component
// the state can be declared ONLY in CLASS COMPONENTS
// because Home currently is a FUNCTIONAL COMPONENT,
// we need to convert it! it's pretty easy :)

class Home extends Component {
    // the only mandatory method in a class component is render()
    // render() is in charge of returning the JSX

    // but now we can have a state!
    state = {
        // let's set our initial state, the starting point every time the page refreshes
        selectedDish: null,
        // the state of a component is READ-ONLY
    }

    sayHello = (name) => 'hello' + name

    render() {
        return (
            <>
                {/* this is called a react fragment, useful for wrapping multiple elements */}
                {/* out of the return statement of a react component */}
                <Container>
                    <Row className="mt-3 justify-content-center">
                        <Col xs={12} md={6}>
                            <Carousel>
                                {
                                    dishes.map(dish => (
                                        <Carousel.Item key={dish.name}>
                                            <img
                                                className="d-block w-100"
                                                src={dish.image}
                                                alt={dish.name}
                                                // you cannot do something like
                                                // this.state.selectedDish = dish
                                                // THAT IS SUPER WRONG
                                                onClick={() => this.setState({
                                                    // setState is the ONLY WAY
                                                    // to change the state
                                                    selectedDish: dish
                                                })}
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
                        </Col>
                    </Row>
                    <Row>
                        <ul>
                            {
                                // the list is listening to the state in order to know when to refresh!
                                this.state.selectedDish?.comments.map(c => (
                                    <li key={c.id}>{c.comment}</li>
                                ))
                            }
                        </ul>
                        {/* we want to bind our interface to the state */}
                        {/* because we're not going to manipulate the DOM anymore */}
                        {/* (I'm not going anymore to select the <li> and replace them) */}
                        {/* I'll just have to update the state */}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home

// 'this' is a thing just in CLASS COMPONENTS
// this is an object
// it's containing a bunch of things, all belonging to the CURRENT INVOCATION OF THE CLASS COMPONENT
// the 'this' is pointing to the current INSTANCE of the CLASS
// 'this' contains a lot of things, especially:
// the props
// the state
// the setState
// the sayHello function (this.sayHello('Stefano))