import { useEffect, useState, Dispatch, SetStateAction } from "react"

type ResponseProps<T> = [T, Dispatch<SetStateAction<T>>]

export function useStorageTheme<T>(key: string, initialState: T): ResponseProps<T> {
   const [state, setState] = useState(() => {
      const storageThemeValue = localStorage.getItem(key)

      if (storageThemeValue) {
         return JSON.parse(storageThemeValue)
      } else {
         return initialState
      }
   })

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state))
   }, [key, state])

   return [state, setState]
}
