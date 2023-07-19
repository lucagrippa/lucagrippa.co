const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const namedCodeBlocks = require('markdown-it-named-code-blocks');


module.exports = function(eleventyConfig) {
    // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy("src/javascript/dark_mode.js");
    eleventyConfig.addPassthroughCopy("src/javascript/mobile_menu.js");
    eleventyConfig.addPassthroughCopy("src/images");
    
    // Returns a collection of blog posts in reverse date order
    eleventyConfig.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });
    
    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("excerpt", (post) => {
        return post.substr(0, post.lastIndexOf(" ", 200)) + "...";
    });

    
    // Add syntax highlighting plugin to markdown-it
    const md = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
    }).use(markdownItPrism);
    eleventyConfig.amendLibrary("md", mdLib => mdLib.use(namedCodeBlocks));
    eleventyConfig.setLibrary('md', md);

    return {
        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: 'liquid',
        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: 'liquid',
        // pre-processing global data JSON files: (default: `liquid`)
        dataTemplateEngine: 'liquid',
        
        dir: {input: 'src', output: '_site'}
    };
  };
