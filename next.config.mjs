import createMDX from '@next/mdx'
import rehypePrettyCode from "rehype-pretty-code";
 
/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
  // theme: "github-light",
  // theme: "catppuccin-latte",
  keepBackground: true,
  // grid: false,
  theme: {
    dark: "catppuccin-mocha",
    light: "catppuccin-latte",
  },
};
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  devIndicators: {

    buildActivityPosition: 'bottom-right',

  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)