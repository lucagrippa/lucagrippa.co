const EleventyFetch = require("@11ty/eleventy-fetch");
const github_data = require('./projects.json');

module.exports = async function() {
    console.log( "Fetching new github stargazers count…" );
    const projects = [];
    for (const project of github_data["projects"]) {
        // GitHub API: https://developer.github.com/v3/repos/#get
        let json = await EleventyFetch(`https://api.github.com/repos/${github_data["username"]}/${project["repo_name"]}`, {
            duration: "1d", // 1 day
            type: "json" // also supports "text" or "buffer"
        });

        // prune the data to return only what we want
        projects.push({
            name: json.name,
            description: json.description,
            html_url: json.html_url,
            stargazers: json.stargazers_count,
            created_at: json.created_at,
            language: json.language,
            post: project["post"],
            demo: project["demo"],
        });
    }

    return projects
};