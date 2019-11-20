import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const GET_QUESTIONS_QUERY = gql`query {
    questionsList {
      items {
        question
        options
        answer
        image
      }
    }
  }`;

  export default graphql(GET_QUESTIONS_QUERY, {
      props: result => {
          const { loading, data } = result;
          let items = [];
          if (data && data.questionsList) items = data.questionsList.items;
          return {
              loading,
              questions: items
          };
      }
  })