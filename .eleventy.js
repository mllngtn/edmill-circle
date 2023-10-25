module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/_redirects');

    return {
        // When a passthrough file is modified, rebuild the pages:
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'dist',
            data: 'data',
            includes: 'templates/includes',
            layouts: 'templates/layouts'
        }
    };
};
