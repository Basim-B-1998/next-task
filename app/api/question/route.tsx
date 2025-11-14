import { NextResponse } from "next/server";

export async function GET() {
  const questions = [
    {
      id: 1,
      question: "Identify the site shown in the image below, which is one of the major urban centers of the Indus Valley Civilization.",
      options: [
        { id: 1, text: "Pataliputra" },
        { id: 2, text: "Harappa" },
        { id: 3, text: "Mohenjo-Daro" },
        { id: 4, text: "Lothal" }
      ]
    },
    {
      id: 2,
      question: "Which of the following texts is considered the oldest scripture in Hinduism?",
      options: [
        { id: 1, text: "Ramayana" },
        { id: 2, text: "Mahabharata" },
        { id: 3, text: "Rig Veda" },
        { id: 4, text: "Upanishads" }
      ]
    },
    {
      id: 3,
      question: "Ashoka, the Mauryan emperor, embraced which religion after the Kalinga War?",
      options: [
        { id: 1, text: "Jainism" },
        { id: 2, text: "Buddhism" },
        { id: 3, text: "Hinduism" },
        { id: 4, text: "Zoroastrianism" }
      ]
    },
    {
      id: 4,
      question: "Harappan civilization is also known as which of the following?",
      options: [
        { id: 1, text: "Bronze Age Civilization" },
        { id: 2, text: "Copper Stone Civilization" },
        { id: 3, text: "Neolithic Civilization" },
        { id: 4, text: "Paleolithic Civilization" }
      ]
    },
    {
      id: 5,
      question: "Who founded the Maurya Empire in ancient India?",
      options: [
        { id: 1, text: "Ashoka" },
        { id: 2, text: "Bindusara" },
        { id: 3, text: "Chandragupta Maurya" },
        { id: 4, text: "Brihadratha" }
      ]
    }
  ];

  return NextResponse.json({
    success: true,
    questions,
    count: questions.length,
  });
}
