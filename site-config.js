const descriptionMd = `All in one Social Media Post Creator`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'Social Poster🚀',
  descriptionMd,
  description,
  url: 'https://www.seongland.com',
  twitterUsername: '@rohanfizz',
  email: 'rohans.ping@gmail.com',
  socials: {
    GitHub: 'https://github.com/Rohanfizz/',
    Linkedin: 'https://www.linkedin.com/in/rohanfizz/',
  },
  bgColor: '#1A202C',
  themeColor: '#46c0aE',
}
