
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 
function Edit() {
 
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [course, setcourse] = useState("");
    const [id, setid] = useState("");
 
    let history = useNavigate();
 
    let index = array
        .map(function (e) {
            return e.id;
        })
        .indexOf(id);
 
   
    const handelSubmit = (e) => {
       
        e.preventDefault();
        if (name === "" || age === "" || course === "") {
            alert("Invalid Input");
            return;
        }
 
        let a = array[index];

        a.Name = name;
        a.Age = age;
        a.Course = course;
       
 
        history("/");
    };
 
    useEffect(() => {
        setname(localStorage.getItem("Name"));
        setage(localStorage.getItem("Age"));
        setcourse(localStorage.getItem("Course"));
        setid(localStorage.getItem("id"));
    }, []);
 
    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* setting a name from the 
                    input textfiled */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        value={name}
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>
 
                {/* setting a age from the input textfiled */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Control
                        value={age}
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder=" Enter Age"
                    />
                </Form.Group>

                   {/* setting a age from the input textfiled */}
                   <Form.Group
                    className="mb-3"
                    controlId="formBasicCourse"
                >
                    <Form.Control
                        value={course}
                        onChange={(e) =>
                            setcourse(e.target.value)
                        }
                        type="text"
                        placeholder=" Enter Course"
                    />
                </Form.Group>
 
                {/* Hadinling an onclick event 
                    running an edit logic */}
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>
 
                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
 
export default Edit;