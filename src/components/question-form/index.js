import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { FileInput } from '@8base/file-input';
import { toast } from 'react-toastify';
import 'react-tagsinput/react-tagsinput.css';
import './form.css';

const QuestionForm = ({ closeModal, questionCreate }) => {
  const [questionForm, setQuestion] = useState({
    options: [],
    question: '',
    image: {},
    answer: '',
  });

  const inputProps = {
    placeholder: 'Add an option and press enter',
    className: 'question-input',
  };
  const handleSubmit = async (e) => {
    // TODO -- 2
  };
  const handleInputChange = (event) => {
    // TODO -- 3
  };
  const handleTagsChange = (options) => {
    // TODO -- 4
  };
  const handleImageChange = (value) => {
    // TODO -- 5
  };
  return (
    // TODO -- 1
  );
};

const QUESTION_CREATE_MUTATION = gql`mutation QuestionCreate($data: QuestionCreateInput!) {
    questionCreate(data: $data) {
      id
    }
  }`;
export default graphql(QUESTION_CREATE_MUTATION, {
  name: 'questionCreate',
})(QuestionForm);