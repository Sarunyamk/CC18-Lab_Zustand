import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const TodoStore = (set) => ({

  arrText :[
    {id:1,text:'work'}
  ],
  addArrText :(newValue)=> set((el)=> ({
    arrText:[...el.arrText,{id:Date.now(),text:newValue}]
  })),
  delArrText:(id)=> set ((el)=> ({
    arrText : el.arrText.filter((item,index)=> item.id !== id)
  }))

})

const usePersist = {
  name : 'TodoStore',
  getStorage : ()=> localStorage,
  pertialize : (el)=> ({
    arrText : el.arrText
  })
}

const useStore = create(persist(TodoStore,usePersist))

export default useStore
