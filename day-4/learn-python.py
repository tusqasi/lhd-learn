
#task : dict


# adds a task to tasks dict
def add_task(task_name, task_desc, tasks):

    tasks[task_name] = task_desc
    return tasks


# prints all tasks in `tasks`
def view_tasks(tasks):
    for key, value in tasks.items():
        print(f"name: {key}\ndescription: {value}\n")

# removes given tasks
def remove_task(task_name, tasks):
    del tasks[task_name]
    return tasks


def main():

    while True:
        # take input to check what action to do
        action = input(
            "What do you want to do?\
        \n A) Add task\
        \n V) View tasks\
        \n R) Remove tasks")

        # check input from user
        if (action == "a") or (action == "A"): # when action is 'a' or 'A' this is run

            task_name = input("Give task name")
            task_desc = input("Give task description")
            
            tasks = add_task(task_name, task_desc, tasks)
            tasks = view_tasks(tasks)


def testing():
    tasks = {
        "task_one": "make a todo list app",
        "task_two": "learn python",
    }
    view_tasks(tasks)
    tasks = remove_task("task_one", tasks)
    view_tasks(tasks)


testing()
