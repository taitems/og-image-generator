const getGithubRepo = async (username, repo) => {
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
    return res.json();
}

export { getGithubRepo };