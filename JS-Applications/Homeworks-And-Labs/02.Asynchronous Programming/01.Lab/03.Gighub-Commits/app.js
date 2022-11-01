async function loadCommits() {

    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commits = document.getElementById('commits');

    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

        if (response.ok == false) {
            throw new Error(`${response.status} (${response.statusText})`);
        }

        const data = await response.json();

        commits.innerHTML = '';

        for (const { commit } of data) {
            commits.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`;
        }
    } catch (error) {
        commits.innerHTML = `<li>Error: ${error.message}</li>`;
    }
}