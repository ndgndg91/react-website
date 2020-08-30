import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import image_1 from '../assets/portfolio/01-thumbnail.jpg'
import image_2 from '../assets/portfolio/02-thumbnail.jpg'
import image_3 from '../assets/portfolio/03-thumbnail.jpg'
import image_4 from '../assets/portfolio/04-thumbnail.jpg'
import image_5 from '../assets/portfolio/05-thumbnail.jpg'
import image_6 from '../assets/portfolio/06-thumbnail.jpg'

const portfolio = [
    {title: 'Threads', subtitle: 'Illustration', image: image_1},
    {title: 'Explore', subtitle: 'Graphic Design', image: image_2},
    {title: 'Finish', subtitle: 'Identity', image: image_3},
    {title: 'Lines', subtitle: 'Branding', image: image_4},
    {title: 'Southwest', subtitle: 'Website Design', image: image_5},
    {title: 'Window', subtitle: 'Photography', image: image_6}
];

class Portfolio extends Component {
    render(){
        return(
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {portfolio.map((portfolio, index) => {
                            return <PortfolioItem {...portfolio} key={index}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;