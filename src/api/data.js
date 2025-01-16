let tasks = [
  {
    id: 1,
    description: 'Rat holes by manholes',
    completed: false,
    category: 'pest control',
    cost: '500'
  },
  {
    id: 2,
    description: 'Rat one way valve',
    completed: false,
    category: 'pest control',
    cost: '500'
  },
  {
    id: 3,
    description: 'Baiting',
    completed: false,
    category: 'pest control 🐀',
    cost: '1000'
  },
  {
    id: 4,
    description: 'Fixing Toilet or a neighbour',
    completed: true,
    category: 'pest control',
    cost: '1000'
  },
  {
    id: 5,
    description: 'Consulting with Thames water or council',
    completed: false,
    category: 'pest control 🐀',
    cost: '0'
  },
  {
    id: 6,
    description: 'The ceilling is damp: consult with building control.',
    completed: false,
    category: 'Listing 🏰',
    cost: '0'
  }
]

export const getTasks = () => tasks

export const getTask = (id) => tasks.find((task) => task.id.toString() === id) //Tip: id is a string because it comes from the URL
export const deleteTask = async (id) =>
  (tasks = tasks.filter((task) => task.id !== id))
