import { useState } from "react";

export  function ReadModal() {

   const [open, setOpen] = useState(false)
 
  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="bg-cyan-950 text-white px-6 py-2 rounded"> Read Comprehensive Paragraph</button>
    );
  }

return (
<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
 <div className="bg-white w-[900px] max-h-[80vh] p-6 rounded-lg shadow-lg overflow-y-auto relative">
  <h2 className="text-lg font-semibold mb-3">Comprehensive Paragraph</h2>

<p className="text-sm leading-relaxed">
Ancient Indian history spans several millennia and offers a profound glimpse into the origins of one of the world's oldest and most diverse civilizations. It 
begins with the Indus Valley Civilization (c. 2500–1500 BCE), which is renowned for its advanced urban planning, architecture, and water management 
systems. Cities like Harappa and Mohenjo-Daro were highly developed, with sophisticated drainage systems and well-organized streets, showcasing the early 
brilliance of Indian civilization. The decline of this civilization remains a mystery, but it marks the transition to the next significant phase in Indian history.
Following the Indus Valley Civilization, the Vedic Period (c. 1500–600 BCE) saw the arrival of the Aryans in northern India. This period is characterized by the 
composition of the Vedas, which laid the foundations of Hinduism and early Indian society. <br/>It was during this time that the varna system (social hierarchy) began to develop, which later evolved into the caste system. The Vedic Age also witnessed the 
rise of important kingdoms and the spread of agricultural practices across the region, significantly impacting the social and cultural fabric of ancient India.<br/> The 6th century BCE marked a turning point with the emergence of new religious and philosophical movements. Buddhism and Jainism, led by Gautama 
Buddha and Mahavira, challenged the existing Vedic orthodoxy and offered alternative paths to spiritual enlightenment. These movements gained widespread 
popularity and had a lasting influence on Indian society and culture. During this time, the kingdom of Magadha became one of the most powerful, laying the 
groundwork for future empires.<br/>  The Maurya Empire (c. 322–185 BCE), founded by Chandragupta Maurya, became the first large empire to unify much of the Indian subcontinent. Under 
Ashoka the Great, the empire reached its zenith, and Buddhism flourished both in India and abroad. Ashoka's support for non-violence, his spread of Buddhist 
teachings, and his contributions to governance and infrastructure had a lasting legacy on Indian history. His reign marks one of the earliest and most notable 
examples of state-sponsored religious tolerance and moral governance.
</p>

 <div className="flex justify-end">
      <button onClick={() => setOpen(false)} className="mt-6 bg-gray-900 text-white px-6 py-2 rounded">Minimize</button>
   </div>
</div>
</div>
);
}