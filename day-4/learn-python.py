# adds a task to tasks dict
def add_task(task_name: str, task_desc: str, tasks: dict) -> dict:
    tasks[task_name] = task_desc
    return tasks


# prints all tasks in `tasks`
def view_tasks(tasks: dict) -> None:
    for key, value in tasks.items():
        print(f"Name: {key}\nDescription: {value}\n")


# removes given tasks
def remove_task(task_name: str, tasks: dict) -> dict:
    del tasks[task_name]
    return tasks


def main():
    tasks: dict = {}
    while True:

        # take input to check what action to do
        action = input(
            "What do you want to do?\
          \nA) Add task \
          \nV) View tasks\
          \nR) Remove tasks\n"
        )
        view_tasks(tasks)
        # check input from user
        if (action == "a") or (action == "A"):  # when action is 'a' or 'A' this is run
            task_name = input("Give task name to add: ")
            task_desc = input("Give task description: ")
            tasks = add_task(task_name, task_desc, tasks)
            view_tasks(tasks)
        elif (action == "v") or (action == "V"):
            view_tasks(tasks)
        elif (action == "r") or (action == "R"):
            task_name = input("Give task name to remove")
            tasks = remove_task(task_name, tasks)
        else:
            print("Wrong input given")


if __name__ == "__main__":
    main()
