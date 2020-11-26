// Get all Projects
async function getProjects() {
    var projects;
    await fetch("https://app.paymoapp.com/api/projects/", {
            headers: {
                "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
            },
        })
        .then(res => res.json())
        .then(data => {
            projects = data;
        })
    return projects;
}
// Get all Tasklists
async function getTasklists() {
    var tasklists;
    await fetch("https://app.paymoapp.com/api/tasklists/", {
            headers: {
                "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
            },
        })
        .then(res => res.json())
        .then(data => {
            tasklists = data;
        })
    return tasklists;
}
// Get all Tasks
async function getTasks() {
    var tasks;
    await fetch("https://app.paymoapp.com/api/tasks/", {
            headers: {
                "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
            },
        })
        .then(res => res.json())
        .then(data => {
            tasks = data;
        })
    return tasks;
}

async function createList() {
    let projects;
    let tasklists;
    let tasks;

    await getProjects().then((res) => {
        projects = res.projects;
    })

    await getTasklists().then((res) => {
        tasklists = res.tasklists;
    })

    await getTasks().then((res) => {
        tasks = res.tasks;
    })


    var list = {};

    projects.forEach(element => {
        element.tasklists = {};
        let subList = {
            name: element.name,
            tasklists: {}
        }
        list[element.id] = subList;
    });

    tasklists.forEach(element => {
        element.tasks = {};
        let subList = {
            name: element.name,
            tasks: {}
        }
        list[element.project_id].tasklists[element.id] = subList;
    });

    tasks.forEach(element => {
        list[element.project_id].tasklists[element.tasklist_id].tasks[element.id] = element.name;
    });

    console.log(list);
}

createList();