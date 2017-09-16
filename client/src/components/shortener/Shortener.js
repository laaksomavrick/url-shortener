import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import { isUrl, postUrl } from '../../services/UrlService'

class Shortener extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            key: null,            
            loading: false,
            error: false
        }
        this.getValidationState = this.getValidationState.bind(this) 
        this.handleChange = this.handleChange.bind(this)           
        this.handleKeyPress = this.handleKeyPress.bind(this)         
        this.submit = this.submit.bind(this)
        this.prevent = this.prevent.bind(this)                              
        this.copy = this.copy.bind(this)                              
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

    handleKeyPress(e) {
        if(e.charCode === 13){
            e.preventDefault()            
                this.submit()   
        }
    }

    submit() {
        if (this.getValidationState() !== 'success') { return }

        postUrl('http://localhost:3001', this.state.url)
            .then((json) => {
                if (json.key) {
                    this.setState({key: json.key})                    
                } else {
                    this.setState({error: true})
                }
            
            })

    }

    prevent(e) {
        e.preventDefault()
    }

    copy(e) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', `http://localhost:3000/${this.state.key}`);
    }

    render() {

        const ShortenedUrl = (props) => {

            if (props.encodedUrl === null) { return null }

            const shortenedUrl = `http://localhost:3000/${props.encodedUrl}`
            if (shortenedUrl) {
                return <form>
                <FormGroup 
                    controlId="formBasicText" 
                    validationState={this.getValidationState()}>
                    <InputGroup>
                    <FormControl
                        type="text"
                        value={shortenedUrl}
                        onChange={this.prevent}
                        onKeyPress={this.prevent}
                    />
                    <InputGroup.Button>
                        <Button
                            onClick={this.copy}
                        >
                            Copy
                        </Button>
                    </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
                </form>
            } else {
                return null;
            }
        }

        return (
            <div className="row">
                <h1>Long Url</h1>
                
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
                            onKeyPress={this.handleKeyPress}
                        />
                        <InputGroup.Button>
                            <Button
                                onClick={this.submit}
                            >
                                Submit
                            </Button>
                        </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </form>

                <ShortenedUrl encodedUrl={this.state.key}/>

            </div>
        )
    }

}

export default Shortener