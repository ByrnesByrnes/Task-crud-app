export const state = {
  tasks: [
    {
      id: 1,
      title: 'Custom Title',
      titleColor: { hex: '#0E2748'},
      titleSize: 32,
      description: 'Custom body text',
      descriptionSize: 16,
      descriptionColor: { hex: '#4F4F4F'},
      panelRadius: 16,
      panelColor: {hex: '#fff'}
    }
  ]
}

export const reducer = (state, action) => {

  const index = state.tasks.findIndex(item => item.id === action.payload.id)

  switch (action.type) {
    case 'COPY_TASK':

      return state = {
        ...state, tasks: [...state.tasks, {
          ...action.payload,
          // id: state.tasks.length >= 1 ? state.tasks[0].id + 1: 1
          id: Math.floor(Math.random() * 100000)
        }]
      }

    case 'EDIT_TASK':
      // console.log(action.payload, "Payload Id")
      state.tasks[index] = { ...action.payload }
      return state = { ...state }

    case 'DELETE_TASK':
      const newTasks = [...state.tasks]

      // Check if index returns 0 or greater remove that index
      index >= 0 ? newTasks.splice(index, 1) : console.warn(`Task ${action.payload.id}: does not exist`)
      
      return {...state, tasks: newTasks}
    default:
      return state
  }
}