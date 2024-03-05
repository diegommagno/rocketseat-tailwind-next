import { ComponentProps, createContext } from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
}

const FileInputContext = createContext({})

export function Root(props: RootProps) {
  return (
    <FileInputContext.Provider value=({ id: })>
      <div {...props} />
    </FileInputContext.Provider>
  )
}
