import type { Task } from "../features/routine/types/routine.domain";

export const tasks: Task[] = [
  // Categoria BODY
  {
    id: "t-101",
    category: 'BODY',
    title: "Cold Shower",
    description: "A deliberate hard choice to open the day. Trains resistance.",
    isMandatory: false
  },
  {
    id: "t-102",
    category: 'BODY',
    title: "Morning Sunlight",
    description: "Get 10-20 minutes of natural light to anchor your circadian rhythm.",
    isMandatory: true
  },

  // Categoria CARE
  {
    id: "t-201",
    category: 'CARE',
    title: "Skincare Routine",
    description: "Cleanse, treat, and protect. Don't skip the sunscreen.",
    isMandatory: true
  },
  {
    id: "t-202",
    category: 'CARE',
    title: "Hydration Check",
    description: "Drink 500ml of water immediately upon waking up.",
    isMandatory: true
  },

  // Categoria MIND
  {
    id: "t-301",
    category: 'MIND',
    title: "Meditation / Breathwork",
    description: "10 minutes of stillness to clear the mental clutter before deep work.",
    isMandatory: false
  },
  {
    id: "t-302",
    category: 'MIND',
    title: "Journaling",
    description: "Dump your thoughts and set the top 3 priorities for the day.",
    isMandatory: true
  },

  // Categoria STUDY
  {
    id: "t-401",
    category: 'STUDY',
    title: "Deep Work Session",
    description: "52 minutes of focused coding with zero distractions.",
    isMandatory: true
  },
  {
    id: "t-402",
    category: 'STUDY',
    title: "Language Practice",
    description: "Review vocabulary cards and practice conversation.",
    isMandatory: false
  }
];