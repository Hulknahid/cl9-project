import React, {Component} from 'react';
import {Form,FormGroup,Label,Input,Container,Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            mobile: '',
            url: '',
            errors:{}
        }

    }

    //set state on change value
    changeHandler=(e)=>{
        let {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    //submitting the form
    submitForm=()=>{
        let {firstname,lastname,email,password,mobile,url} = this.state;
        let userJSON = {
            firstname,
            lastname,
            email,
            password,
            mobile,
            url
        }
        localStorage.setItem('@USER',JSON.stringify(userJSON))
        toast('User Added Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.clearState()
    }
    clearState=()=>{
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            mobile: '',
            url: '',
            errors:{}
        })
    }
    render() {

        let {firstname,lastname,email,password,mobile,url} = this.state;

        return (
            <Container>

                <ToastContainer />

                    <FormGroup>
                        <Label htmlFor="firstname">
                            First Name
                        </Label>
                        <Input
                            value={firstname}
                            onChange={this.changeHandler}
                            id="firstname"
                            name="firstname"
                            placeholder="First Name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastname">
                            Last Name
                        </Label>
                        <Input
                            value={lastname}
                            onChange={this.changeHandler}
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="exampleEmail">
                            Email
                        </Label>
                        <Input
                            value={email}
                            onChange={this.changeHandler}
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            value={password}
                            onChange={this.changeHandler}
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="mobile">
                            Mobile
                        </Label>
                        <Input
                            value={mobile}
                            onChange={this.changeHandler}
                            id="mobile"
                            name="mobile"
                            placeholder="Mobile"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="exampleUrl">
                            Url
                        </Label>
                        <Input
                            value={url}
                            onChange={this.changeHandler}
                            id="exampleUrl"
                            name="url"
                            placeholder="url placeholder"
                            type="url"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Button onClick={this.submitForm} className="btn btn-primary btn-lg">Save User</Button>

                    </FormGroup>
            </Container>
        );
    }
}
export default App;