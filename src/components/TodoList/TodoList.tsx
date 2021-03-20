import { Heading } from "@chakra-ui/react"
import { TodoListItems } from "./TodoListItems"

export const TodoList = () => {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  )
}
