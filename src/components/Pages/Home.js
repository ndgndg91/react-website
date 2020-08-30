import React, {Component} from 'react';
import Header from '../Common/Header'
import image from '../assets/smart-araromi.jpg'

class Home extends Component {

    render(){
        return (
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
            </div>
        )
    }
}

export default Home;