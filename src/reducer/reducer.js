export const state = {
  // default state of task
  tasks: [
    {
      id: 1,
      title: '',
      titleColor: { hex: '#0E2748'},
      titleSize: 36,
      description: '',
      descriptionSize: 16,
      descriptionColor: { hex: '#4F4F4F'},
      panelRadius: 16,
      panelColor: {hex: '#fff'}
    }
  ]
}

export const reducer = (state, action) => {
  // finds the index of task
  const index = state.tasks.findIndex(item => item.id === action.payload.id)

  switch (action.type) {
    case 'COPY_TASK': 
      return state = {
        ...state, tasks: [...state.tasks,{
            ...action.payload,
            id: Math.floor(Math.random() * 100000)
          }]
      }

    case 'EDIT_TASK':
      const editTask = [...state.tasks]

      editTask[index] = {...action.payload}
      return state = { ...state, tasks: [...editTask] }

    case 'DELETE_TASK':
      const newTasks = [...state.tasks]

      // Check if index returns 0 or greater remove that index
      index >= 0 ? newTasks.splice(index, 1) : console.warn(`Task ${action.payload.id}: does not exist`)
      
      return {...state, tasks: [...newTasks]}
    default:
      return state
  }
}