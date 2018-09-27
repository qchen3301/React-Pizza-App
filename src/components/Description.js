import React, {Component} from 'react'
import pizzaOven from '../images/pizzaoven.jpg'

class Description extends Component {
    render() {
        return (
            <div className="description">
                <img src={pizzaOven} alt="pizza oven" />
                <p>
                    Y'all ever just post some bullshit<br/>
                    On the stupid<br/>
                    Fucking<br/> 
                    internet??
                </p>
            </div>
        )
    }
}

export default Description