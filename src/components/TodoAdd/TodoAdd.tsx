import { Button, Grid, Input } from "@chakra-ui/react"
import { observer } from "mobx-react"
import { ChangeEvent } from "react"
import store from "store"

export const TodoAdd = observer(() => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    store.newTodo = e.target.value
  }

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={store.newTodo}
        onChange={handleChange}
      />
      <Button onClick={store.addTodo}>Add Todo</Button>
    </Grid>
  )
})
