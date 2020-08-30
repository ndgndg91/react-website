import React, {Component} from 'react';
import TeamMember from './TeamMember';

import image_1 from "../assets/team/1.jpg"
import image_2 from "../assets/team/2.jpg"
import image_3 from "../assets/team/3.jpg"

const teamMembers = [
    {memberName: '남동길', jobTitle: 'Software Engineer', image: image_1},
    {memberName: 'John Doe', jobTitle: 'Software Engineer', image: image_2},
    {memberName: 'Alen d vue', jobTitle: 'Software Engineer', image: image_3}
];

class Team extends Component {
    render(){
        return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => {
                        return <TeamMember {...member} key={index} />
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}

export default Team;