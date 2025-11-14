'use client'

import { useEffect, useState } from "react";
import {ReadModal} from '../components/readmodal'
import { Options } from "../components/options";
import { SubmitModal } from "../components/submitmodal";

export default function StartExam() {
  
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({})
  const [marked, setMarked] = useState({})
  const [loading, setLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState(90 * 60)
  const [submitOpen, setSubmitOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const q = questions[index]

  useEffect(() => {
    fetch("/api/question")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions || [])
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((v) => (v > 0 ? v - 1 : 0))}, 1000)
    return () => clearInterval(t)}, [])

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60)
    const s = timeLeft % 60
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  }

  const handleSelect = (qid: number, oid: number) => {
    setAnswers((prev: any) => ({ ...prev, [qid]: oid }))
  };

  const handleMark = () => setMarked((prev: any) => ({ ...prev, [q.id]: true }))

  const getStatus = (qid: number) => {
    if (marked[qid] && answers[qid]) return "bg-purple-600 text-white";
    if (marked[qid]) return "bg-purple-500 text-white"
    if (answers[qid]) return "bg-green-600 text-white"
    return "bg-gray-200"
  }

  const handleSubmitRedirect = () => {
    const remainingTime = formatTime()
    const marksObtained = Object.keys(answers).length

    window.location.href = `/exam/result?time=${remainingTime}&total=${questions.length}&answered=${Object.keys(answers).length}&marked=${Object.keys(marked).length}&marks=${marksObtained}`}

  if (loading) return <div className="flex items-center justify-center p-10 text-xl font-semibold">Loading questions...</div>
  if (questions.length === 0) return <div className="p-10 text-center text-red-600 font-semibold">No questions found.</div>

  return (
    <div className="p-6 flex gap-6">
      <div className="w-2/3 bg-white p-6 rounded-lg shadow">

        <ReadModal open={open} onClose={() => setOpen(false)} />

        <h2 className="text-xl font-semibold mt-4 mb-3">
          Question {index + 1} of {questions.length}
        </h2>

        <p className="text-lg mb-4">{q.question}</p>

        <Options q={q} answers={answers} onSelect={handleSelect} />

        <div className="flex gap-4 mt-8">
          <button onClick={handleMark} className="flex-1 bg-purple-900 text-white py-3 rounded">
            Mark for Review
          </button>

          <button
            onClick={() => setIndex((i) => i - 1)}
            disabled={index === 0}
            className="flex-1 bg-gray-300 py-3 rounded"
          >
            Previous
          </button>

          {index < questions.length - 1 ? (
            <button
              onClick={() => setIndex((i) => i + 1)}
              className="flex-1 bg-cyan-950 text-white py-3 rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setSubmitOpen(true)}
              className="flex-1 bg-green-600 text-white py-3 rounded"
            >
              Submit
            </button>
          )}
        </div>

        <SubmitModal
          open={submitOpen}
          onClose={() => setSubmitOpen(false)}
          formatTime={formatTime}
          stats={{
            total: questions.length,
            answered: Object.keys(answers).length,
            marked: Object.keys(marked).length,
          }}
          onConfirm={handleSubmitRedirect}
        />
      </div>

      <div className="w-1/3 bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between mb-4 items-center">
          <h2 className="font-semibold">Question No. Sheet</h2>
          <div className="px-4 py-1 bg-black text-white rounded">⏱ {formatTime()}</div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {questions.map((qq, i) => (
            <button key={qq.id} onClick={() => setIndex(i)} className={`p-2 rounded text-center border font-medium ${getStatus(qq.id)}`}>{i + 1}</button>
          ))}
        </div>

        <div className="mt-6 text-sm space-y-2">
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-600"></div> Answered</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-purple-600"></div> Marked for Review</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-300"></div> Not Attempted</div>
        </div>
      </div>
    </div>
  );
}
