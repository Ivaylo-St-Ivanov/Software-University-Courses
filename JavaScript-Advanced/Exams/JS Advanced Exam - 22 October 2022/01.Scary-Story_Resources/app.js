window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');

  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publish);

  const previewList = document.getElementById('preview-list');
  const mainDiv = document.getElementById('main');

  function publish() {
    const firstNameInput = firstName.value;
    const lastNameInput = lastName.value;
    const ageInput = age.value;
    const storyTitleInput = storyTitle.value;
    const genreInput = genre.value;
    const storyInput = story.value;

    if (!firstNameInput || !lastNameInput || !ageInput || !storyTitleInput || ! storyInput) {
      return;
    }

    const li = document.createElement('li');
    li.className = 'story-info';
    li.innerHTML = `<article>
                      <h4>Name: ${firstNameInput} ${lastNameInput}</h4>
                      <p>Age: ${ageInput}</p>
                      <p>Title: ${storyTitleInput}</p>
                      <p>Genre: ${genreInput}</p>
                      <p>${storyInput}</p>
                    </article>
                    <button class="save-btn">Save Story</button>
                    <button class="edit-btn">Edit Story</button>
                    <button class="delete-btn">Delete Story</button>`;
    previewList.appendChild(li);
    publishBtn.disabled = true;

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    story.value = '';

    li.querySelector('.edit-btn').addEventListener('click', () => {
      firstName.value = firstNameInput;
      lastName.value = lastNameInput;
      age.value = ageInput;
      storyTitle.value = storyTitleInput;
      story.value = storyInput;

      publishBtn.disabled = false;
      li.remove();
    });

    li.querySelector('.save-btn').addEventListener('click', () => {
      mainDiv.innerHTML = `<h1>Your scary story is saved!</h1>`;
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
      publishBtn.disabled = false;
      li.remove();
    });
  }
}
