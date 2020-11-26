// Get all Projects
async function getProjects(){
    var projects;
    await fetch("https://app.paymoapp.com/api/projects/", {
        headers: {
            "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
        },
    })
    .then(res => res.json())
    .then(data => {
    projects = data;
    console.log(data)
})
}
getProjects();
// Get all Tasklists
async function getTasklists(){
    var tasklists;
await fetch("https://app.paymoapp.com/api/tasklists/", {
        headers: {
            "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
        },
    })
    .then(res => res.json())
    .then(data => {
    tasklists = data;
    console.log(data)})
}
getTasklists();
// Get all Tasks
async function getTasks(){
    var tasks;
await fetch("https://app.paymoapp.com/api/tasks/", {
        headers: {
            "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
        },
    })
    .then(res => res.json())
    .then(data => {
    tasks = data;
    console.log(data)})
}
getTasks();