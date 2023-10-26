import {useContext} from 'react'
import {ThemeContext} from './ThemeContent'

export const Box = () => {
  const theme = useContext(ThemeContext)

  return (
    <div style={{backgroundColor: theme.primary.main, color: theme.secondary.text}}>Theme Context</div>
  )
}
