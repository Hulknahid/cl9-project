import React, {useEffect, useState} from 'react';
import {Form,FormGroup,Label,Input,Container,Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App =()=> {
    // firstname: '',
    //     lastname: '',
    //     email: '',
    //     password: '',
    //     mobile: '',
    //     url: '',
    //     errors:{}



    const [user,setUser] = useState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            mobile: '',
            url: '',

    })

    const [users,setUsers] = useState([])
    useEffect(()=>{
        let userList = localStorage.getItem('@USER');
        console.log(userList)
        if(userList != null){
            setUsers([...JSON.parse(userList)])
        }
    },[])
    //set state on change value
    const changeHandler=(e)=>{
        let {name,value} = e.target
        setUser({...user,[name]:value})
    }

    //submitting the form
    const submitForm=()=>{
        let {firstname,lastname,email,password,mobile,url} = user;
        let userJSON = {
            firstname,
            lastname,
            email,
            password,
            mobile,
            url
        }
        //setting data in localstorage
        //to store data must need to make the
        //object to json using json.stringify

        let list = users

        list.push(userJSON)


        localStorage.setItem('@USER',JSON.stringify(list))

        setUsers([...list])

        toast('User Added Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        clearState()
    }
    const clearState=()=>{
        setUser({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            mobile: '',
            url: '',
        })
    }

        let {firstname,lastname,email,password,mobile,url} = user;



        return (
            <Container>

                <ToastContainer />

                    <FormGroup>
                        <Label htmlFor="firstname">
                            First Name
                        </Label>
                        <Input
                            value={firstname}
                            onChange={changeHandler}
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
                            onChange={changeHandler}
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
                            onChange={changeHandler}
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
                            onChange={changeHandler}
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
                            onChange={changeHandler}
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
                            onChange={changeHandler}
                            id="exampleUrl"
                            name="url"
                            placeholder="url placeholder"
                            type="url"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Button onClick={submitForm} className="btn btn-primary btn-lg">Save User</Button>

                    </FormGroup>


                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last name</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>Mobile</td>
                            <td>Url</td>
                        </tr>
                        </thead>
                        <tbody>
                        {users.length > 0 && users.map((user,key)=>{
                            return (
                                <tr>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.url}</td>
                                </tr>
                            )
                        })}
                        </tbody>




                    </table>


            </Container>
        );

}
export default App;