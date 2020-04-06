import React from "react";
import { useState } from 'react';
import { connect } from "react-redux";
import { addArticle } from "../js/actions/actions.js";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const ConnectedForm = (props) => {
    const [title, setTitle] = useState({title: ""});
    function handleChange(event) {
        setTitle({[event.target.id]: event.target.value});
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.addArticle(title);
        setTitle("");
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            value={title.title}
            onChange={handleChange}
            placeholder="Enter text here"
            style={{"margin-bottom": "20px"}}
          />
        </div>
        <button type="submit" style={{"padding": "10px 50px"}}>SAVE</button>
      </form>
    );
}

const Form = connect(
    null,
    mapDispatchToProps
  )(ConnectedForm);
export default Form;