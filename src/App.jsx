import { ThemeProvider } from "styled-components"
import { Home } from "./screens/Home"
import Light from './theme/Light'
import Dark from './theme/Dark'



function App() {
  return (
    <ThemeProvider theme={Light}>      
      <Home/>  
    </ThemeProvider>
  )
}

export default App
