import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleDelete(id) {
    const notDeleted = questions.filter((question) => question.id !== id)
    setQuestions(notDeleted);

    fetch(`http://localhost:4000/questions/${id}`,
      {
      method: "DELETE",
    });

    //handle update, use map to handle it
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => 
          <QuestionItem 
          key={question.id} 
          question={question} />)
          }
      </ul>
    </section>
  );
}

export default QuestionList;
