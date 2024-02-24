async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function demoGithubUser() {
    let name;
    do {
      name = prompt("Enter a name?", "iltakan");
      try {
        let user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Full name: ${user.name}`);
        return user;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("No such user, please reenter.");
        } else {
          throw err;
        }
      }
    } while (true);
  }
  
  demoGithubUser();