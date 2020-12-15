const initialState = {
  friends: [
    {
      id: 1,
      name: 'Vasya',
      avatar: 'https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png'
    },
    {
      id: 2,
      name: 'Andrey',
      avatar: 'https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png'
    },
    {
      id: 3,
      name: 'Alewa',
      avatar: 'https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png'
    }
  ]
}

const sidebarReducer = (state = initialState) => {
  return state
}

export default sidebarReducer