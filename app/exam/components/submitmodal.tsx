export function SubmitModal({ open, onClose, stats, onConfirm, formatTime }: any) {

if (!open) return null;

return (
 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white w-96 p-6 rounded-xl shadow-xl relative">
<button className="absolute top-2 right-3 text-xl" onClick={onClose}>×</button>

<h2 className="text-lg font-semibold mb-4">Are you sure you want to submit the test?</h2>

<div className="space-y-3 text-sm">
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-gray-800 rounded-sm"></span>
<span>Remaining Time: <b>{formatTime()}</b></span>
</div>
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-yellow-500 rounded-sm"></span>
<span>Total Questions: <b>{stats.total}</b></span>
</div>
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-green-600 rounded-sm"></span>
<span>Questions Answered: <b>{stats.answered}</b></span>
</div>
<div className="flex items-center gap-2">
<span className="w-4 h-4 bg-purple-600 rounded-sm"></span>
<span>Marked for Review: <b>{stats.marked}</b></span>
</div>
</div>

<button onClick={onConfirm} className="w-full bg-blue-900 text-white py-2 mt-5 rounded-lg">Submit Test</button>
</div>
</div>
);
}