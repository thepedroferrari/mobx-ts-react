import { Box, ChakraProvider, theme } from "@chakra-ui/react"

import { TodoAdd } from "components/TodoAdd"
import { TodoList } from "components/TodoList"
import { TopBar } from "components/Topbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box maxWidth="8xl" margin="auto" p={5}>
      <TopBar />
      <TodoList />
      <TodoAdd />
    </Box>
  </ChakraProvider>
)
