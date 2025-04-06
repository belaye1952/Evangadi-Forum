import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../axiosConfig";
import styles from "./AnswerPage.module.css";
import Layout from "../../Layout/Layout";
import { IoPersonCircleOutline } from "react-icons/io5";
function AnswerPage() {
  const { questionid } = useParams();
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchQuestionAndAnswers();
  }, [questionid]);

  // fetch question and answers
  async function fetchQuestionAndAnswers() {
    try {
      // get single question
      const questionResponse = await axios.get(`/question/${questionid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuestion(questionResponse.data.question);
      // get all answers for a question
      const answersResponse = await axios.get(`/answer/${questionid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAnswers(answersResponse.data.answer);
      // console.log(answersResponse);
    } catch (error) {
      if (error.response) {
        setError(error?.response?.data?.message);
      }
    }
  }

  //handle submit answer
  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    if (newAnswer.trim() === "") {
      setError("Please fill in the answer field.");
      return;
    }

    try {
      const answer = await axios.post(
        "/answer",
        { questionid: questionid, answer: newAnswer },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setNewAnswer("");
      setError("");
      fetchQuestionAndAnswers(); // Refresh answers
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit answer.");
    }
  };

  return (
    <>
      <Layout>
        <div className={styles.answerPageContainer}>
          <div className={styles.questionSection}>
            <h1>QUESTION</h1>
            <h2 className={styles.question_title}>{question?.title}</h2>
            <p>{question?.content}</p>
          </div>
          <div className={styles.answersSection}>
            <h3>Answer From The Community</h3>
            <hr />
            {answers.length > 0 ? (
              answers.map((answer) => (
                <div className={styles.question_avatar_title}>
                  <div className={styles.avator_container}>
                    <IoPersonCircleOutline size={70} />
                    <small>{answer?.user_name}</small>
                  </div>
                  <div className={styles.title_container}>
                    <p> {answer?.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <span>
                <p style={{ color: "red" }}>{error}</p>
                <p>No answers yet. Be the first to answer!</p>
              </span>
            )}
          </div>

          <form onSubmit={handleSubmitAnswer} className={styles.answerForm}>
            <h3>Post Answer</h3>
            {error === "Please fill in the answer field." && (
              <div className={styles.formError}>{error}</div>
            )}
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Your answer..."
              className={styles.answerInput}
            />

            <button type="submit" className={styles.answerButton}>
              Post Answer
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default AnswerPage;
