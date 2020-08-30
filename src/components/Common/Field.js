import React, {Component} from 'react';

class Field extends Component {

    render(){
        return(
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input 
                        className="form-control" 
                        id={this.props.id} 
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required="required" 
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                :
                    <textarea 
                        className="form-control" 
                        id={this.props.id} 
                        placeholder={this.props.placeholder}
                        required="required" 
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                }
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors)}
                </p>
            </div>
        )
    }
}

export default Field;