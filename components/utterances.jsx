"use client"
import React, { useEffect } from 'react';
import { useTheme } from "next-themes"

export default async function Utterances() {
    const { theme } = useTheme()

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.setAttribute('repo', '[ENTER REPO HERE]');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('theme',
            theme === 'light' ? 'github-light' : 'github-dark'
        );
        script.setAttribute('crossorigin', 'anonymous');
        document.getElementById('utterances-container').appendChild(script);
    }, []);

    return <div id="utterances-container" />;
}
