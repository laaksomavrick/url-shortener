import React, { Component } from 'react';
import { Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import { isUrl } from '../../services/UrlService'

class Shortener extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
        this.getValidationState = this.getValidationState.bind(this) 
        this.handleChange = this.handleChange.bind(this)              
    }

    getValidationState() {
        if (this.state.url.length <= 0) return null
        const valid = isUrl(this.state.url)
        if (valid) return 'success'
        else return 'error'
    }

    handleChange(e) {
        this.setState({ url: e.target.value });
    }

    render() {
        return (
            <div className="row">
                <h1>Gem Url</h1>
                
                <form>
                    <FormGroup 
                        controlId="formBasicText" 
                        validationState={this.getValidationState()}>
                        <InputGroup>
                        <FormControl
                            type="text"
                            value={this.state.url}
                            placeholder="Enter a url to shorten"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Button>
                            <Button>Submit</Button>
                        </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </form>


            </div>
        )
    }

}

export default Shortener