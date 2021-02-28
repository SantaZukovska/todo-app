import React from "react"
import Task from "./Task"
import DoneTask from "./DoneTask"

function MyTasks() {
  return (
    <div class="my-tasks">
      <h3>My tasks</h3>
      <hr />
      <Task text={"Walk the dog"} />
      <Task text={"Answer all the e-mails"} />
      <Task text={"Find out why my cat licks all the stuff and eats so much"} />
    </div>
  )
}

export default MyTasks
