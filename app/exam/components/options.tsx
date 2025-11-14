
export function Options({ q, answers, onSelect }: any) {
return (
  <div className="space-y-3">
  {q.options.map((o: any, i: number) => (
    <label key={o.id} className={`flex items-center gap-2 border p-3 rounded cursor-pointer ${answers[q.id] === o.id
      ? "bg-blue-100 border-blue-500"
    : "border-gray-300" }`}>
<input type="radio" checked={answers[q.id] === o.id} onChange={() => onSelect(q.id, o.id)}/>
<span className="font-semibold">{String.fromCharCode(65 + i)}.</span>
<span>{o.text}</span>
</label>))}
</div>
)}