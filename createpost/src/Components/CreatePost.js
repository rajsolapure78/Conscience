import React,{useState}  from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const createpost = (e)=>{
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank");
        }else{
            alert("Create post clicked");
        }

    }
    return (
        <div className="mx-3 my-3">
            <h3>Post Details</h3>
            <Form onSubmit={createpost}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange = {(e)=>{setTitle(e.target.value)}} /> 
                    
                   {/* <Form.Control type="text" placeholder="Description" value={description} onChange = {(e)=>{setDescription(e.target.value)}} onFocus = {(e)=>{e.target.value=""}} /> */}                 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={description} onChange = {(e)=>{setDescription(e.target.value)}} />
                    {/*<Form.Control type="text" placeholder="Description" value={description} onChange = {(e)=>{setDescription(e.target.value)}} onFocus = {(e)=>{e.target.value=""}} /> */}
                </Form.Group>
                <Button variant="success" type="submit">
                    Create Post
                </Button>
            </Form>
        </div>
    )
}
