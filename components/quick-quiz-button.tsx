"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ArrowRight, RotateCcw, X } from "lucide-react";

type QuizQuestion = {
  prompt: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    prompt: "You have KES 1,500 to stretch across 45 days. What is a useful daily guide?",
    options: ["About KES 33", "About KES 75", "About KES 150"],
    correctAnswer: 0,
    explanation: "KES 1,500 divided across 45 days is about KES 33 per day.",
  },
  {
    prompt: "A six-person chama saves 30 bob per person each week. How much goes into the pot weekly?",
    options: ["KES 180", "KES 300", "KES 1,800"],
    correctAnswer: 0,
    explanation: "Six members times KES 30 each adds KES 180 to the pot each week.",
  },
  {
    prompt: "Before taking a mobile-money advance with a daily fee, what should you check?",
    options: ["The total cost and repayment timing", "Only the amount you receive", "How much your friend borrowed"],
    correctAnswer: 0,
    explanation: "Knowing the total cost and repayment timing helps you make an informed choice.",
  },
];

type QuickQuizButtonProps = {
  children: ReactNode;
  className: string;
};

export function QuickQuizButton({ children, className }: QuickQuizButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const question = quizQuestions[questionIndex];

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function startQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsOpen(true);
  }

  function chooseAnswer(optionIndex: number) {
    if (selectedAnswer !== null || !question) return;
    setSelectedAnswer(optionIndex);
    if (optionIndex === question.correctAnswer) setScore((currentScore) => currentScore + 1);
  }

  function continueQuiz() {
    setSelectedAnswer(null);
    setQuestionIndex((currentIndex) => currentIndex + 1);
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
  }

  return (
    <>
      <button type="button" className={className} onClick={startQuiz}>
        {children}
      </button>
      <dialog
        ref={dialogRef}
        className="quiz-dialog"
        aria-labelledby={titleId}
        onCancel={(event) => {
          event.preventDefault();
          setIsOpen(false);
        }}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
      >
        <div className="quiz-dialog__panel">
          <div className="quiz-dialog__topline">
            <p className="quiz-dialog__eyebrow">MONEY IQ · 2 MINUTES</p>
            <button
              type="button"
              className="quiz-dialog__close"
              aria-label="Close quiz"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {question ? (
            <>
              <p className="quiz-dialog__progress">QUESTION {questionIndex + 1} OF {quizQuestions.length}</p>
              <h2 id={titleId} className="quiz-dialog__title">{question.prompt}</h2>
              <div className="quiz-options" role="group" aria-label={`Answers for question ${questionIndex + 1}`}>
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswer === optionIndex;
                  const isCorrect = optionIndex === question.correctAnswer;
                  const answerClass = selectedAnswer === null
                    ? "quiz-option"
                    : `quiz-option${isCorrect ? " quiz-option--correct" : isSelected ? " quiz-option--incorrect" : ""}`;

                  return (
                    <button
                      key={option}
                      type="button"
                      className={answerClass}
                      aria-pressed={isSelected}
                      disabled={selectedAnswer !== null}
                      onClick={() => chooseAnswer(optionIndex)}
                    >
                      <span className="quiz-option__letter">{String.fromCharCode(65 + optionIndex)}</span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
              {selectedAnswer !== null && (
                <p className="quiz-feedback" role="status" aria-live="polite">
                  {selectedAnswer === question.correctAnswer ? "That’s it. " : "Good try. "}
                  {question.explanation}
                </p>
              )}
              <div className="quiz-dialog__footer">
                <span>{questionIndex + 1} / {quizQuestions.length}</span>
                <button
                  type="button"
                  className="quiz-dialog__next"
                  disabled={selectedAnswer === null}
                  onClick={continueQuiz}
                >
                  {questionIndex === quizQuestions.length - 1 ? "See my score" : "Next question"}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </>
          ) : (
            <div className="quiz-result">
              <p className="quiz-dialog__progress">QUIZ COMPLETE</p>
              <h2 id={titleId} className="quiz-dialog__title">
                {score === quizQuestions.length ? "Money-wise moves. Nice." : "Good thinking starts with questions."}
              </h2>
              <p className="quiz-result__score">You got <strong>{score} of {quizQuestions.length}</strong> right.</p>
              <p className="quiz-result__copy">Keep asking questions, checking the details, and making a plan that fits your life.</p>
              <div className="quiz-result__actions">
                <button type="button" className="quiz-dialog__next" onClick={restartQuiz}>
                  Try again <RotateCcw size={15} aria-hidden="true" />
                </button>
                <button type="button" className="quiz-dialog__done" onClick={() => setIsOpen(false)}>
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
