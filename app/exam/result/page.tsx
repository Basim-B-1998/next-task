"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const params = useSearchParams();

  const time = params.get("time");
  const total = params.get("total");
  const answered = params.get("answered");
  const marked = params.get("marked");
  const marks = params.get("marks");


  return (
    <div className="p-10 max-w-xl mx-auto mt-30 pl-40 border bg-cyan-950 text-white">

      <div className="space-y-2 text-2xl">
       <p className="text-xl"><b>Marks Obtained:</b><br/><span className="flex justify-center mr-25 mt-3 mb-3 text-5xl font-bold">{marks}/{total}</span></p>
       <p>Remaining Time: <b>{time}</b></p>
      <p>Total Questions: <b>{total}</b></p>
     <p>Questions Answered: <b>{answered}</b></p>
      <p>Marked for Review: <b>{marked}</b></p>
      </div>
    </div>
  );
}
