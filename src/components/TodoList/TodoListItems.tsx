import { Button, Checkbox, Flex, Input } from "@chakra-ui/react"
import { observer } from "mobx-react"
import store, { Todo } from "store"

type TodoListItem = Pick<Todo, "id" | "text">

export const TodoListItems = observer(() => {
  return (
    <>
      {store.todos.map(({ id, text }: TodoListItem) => (
        <Flex pt={2} key={id}>
          <Checkbox />
          <Input mx={2} value={text} />
          <Button>Delete</Button>
        </Flex>
      ))}
    </>
  )
})
