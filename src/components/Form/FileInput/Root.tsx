'use client'

import { ComponentProps, createContext, useContext, useId } from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId() // Cria um id unico e persiste esse id entre as renderizacoes de componentes

  return (
    <FileInputContext.Provider value={{ id }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
