const repositories = [
    {
        "repo_name": "fitdown-py",
        "description": "Markup language and parser for weightlifting logs. Developed after https://github.com/datavis-tech/fitdown",
        "post": "",
        "demo": ""
    },
    {
        "repo_name": "obsidian-ai-tagger",
        "description": "Simplify tagging in Obsidian. Instantly analyze and tag your document with one click for efficient note organization.",
        "post": "",
        "demo": ""
    },
    {
        "repo_name": "lucagrippa.io",
        "description": "The source code of this website",
        "post": "",
        "demo": ""
    },
    {
        "repo_name": "ana-lease",
        "description": "Analyze your lease using the power of LLMs.",
        "post": "",
        "demo": ""
    },
    {
        "repo_name": "cisa-kev-archive",
        "description": "Storing historical snapshots of the CISA Known Exploited Vulnerabilities (KEV) list",
        "post": "",
        "demo": ""
    },
    {
        "repo_name": "streamlit-chatbot-starter",
        "description": "A starter project for building a chatbot with Streamlit.",
        "post": "",
        "demo": ""
    },
    {
        "repo_name": "sorting-visualizer",
        "description": "Improve your understanding of sorting algorithms through visualization.",
        "post": "",
        "demo": ""
    },
    {
        "repo_name": "garden-design",
        "description": "A simple garden design app built in Java.",
        "post": "",
        "demo": ""
    },
    {
        "repo_name": "space-invaders",
        "description": "A simple Space Invaders clone built with Javascript and Firebase.",
        "post": "",
        "demo": ""
    },
]

export async function getProjects() {
    // for each repository, get data from github api, store in array, return array
    const projects = []
    for (const repo of repositories) {
        const url = `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.repo_name}`
        const response = await fetch(url, { next: { revalidate: 3600 } })

        if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            console.log(response.status)
            throw new Error('Failed to fetch data', response.status)
        }

        const json = await response.json()

        projects.push({
            id: json.id,
            key: json.id,
            name: json.name,
            description: repo.description,
            html_url: json.html_url,
            stargazers: json.stargazers_count,
            created_at: json.created_at,
            language: json.language,
            topics: json.topics,
            post: repo.post,
            demo: repo.demo,
        });
    }
    // console.log(projects)

    return projects
}