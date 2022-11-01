async function loadRepos() {

	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');

	try {
		const response = await fetch(`https://api.github.com/users/${username}/repos`);

		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		const data = await response.json();

		list.innerHTML = '';

		for (const repo of data) {
			list.innerHTML += `<li>
		                        <a href="${repo.html_url}">
			                        ${repo.full_name}
		                        </a>
	                           </li>`;
		}
	} catch (error) {
		list.innerHTML = `${error.message}`;
	}
}