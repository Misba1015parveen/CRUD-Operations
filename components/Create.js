 
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
 
function Create() {

    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [course, setcourse] = useState("");
 
    let history = useNavigate();
 
    const handelSubmit = (e) => {
        e.preventDefault(); 
 
        const ids = uuid(); 
        let uni = ids.slice(0, 8); 

        let a = name,
            b = age,
            c = course;
        if (name === "" || age === "" || course === "") {
            alert("invalid input");
            return;
        }
        array.push({ id: uni, Name: a, Age: b, Course: c});

        history("/");
    };
 
    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* Fetching a value from input textfirld 
                    in a setname using usestate*/}
                    {/* ... (other form controls) */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
 
                {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicAge"
                >
                    <Form.Control
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Enter Age"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicCourse"
                >
                    <Form.Control
                        onChange={(e) =>
                            setcourse(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Course"
                        required
                    />
                </Form.Group>
 
                {/* handing a onclick event in button for
                    firing a function */}
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
 
                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
 
export default Create;