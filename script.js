document.getElementById("githubForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let username = document.getElementById("usernameInput").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("avatar").src = data.avatar_url;

      document.getElementById("username").innerHTML = `Username: ${data.login}`;
      document.getElementById("name").innerHTML = ` Name: ${
        data.name || "N/A"
      }`;

      document.getElementById(
        "publicRepos"
      ).innerHTML = `Public Repositories: ${data.public_repos}`;

      document.getElementById(
        "publicGists"
      ).innerHTML = `Public Gists: ${data.public_gists}`;
      document.getElementById("createdAt").innerHTML = `Profile Created At: ${
        new Date(data.created_at).toISOString().split("T")[0]
      }`;
      document.getElementById("userInfo").style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("User not found! Please enter a valid GitHub username.");
    });
});
