import { useState } from 'react'

function useSkillsHook() {
  const [activeCategory, setActiveCategory] =
    useState('all')
  const [skills] = useState([
    { category: 'all', img: null },
    {
      category: 'frontend',
      img: '/img/skills/html.png',
    },
    {
      category: 'frontend',
      img: '/img/skills/css.png',
    },
    {
      category: 'frontend',
      img: '/img/skills/sass.png',
    },
    {
      category: 'frontend',
      img: '/img/skills/bootstrap.png',
    },
    {
      category: 'frontend',
      img: '/img/skills/tailwindcss.png',
    },
    {
      category: 'language',
      img: '/img/skills/javascript.png',
    },
    {
      category: 'language',
      img: '/img/skills/typescript.png',
    },
    {
      category: 'language',
      img: '/img/skills/php.png',
    },
    {
      category: 'framework',
      img: '/img/skills/laravel.png',
    },
    {
      category: 'frontend',
      img: '/img/skills/jquery.png',
    },
    {
      category: 'frontend',
      img: '/img/skills/react.png',
    },
    {
      category: 'frontend',
      img: '/img/skills/redux.png',
    },
    {
      category: 'backend',
      img: '/img/skills/node.png',
    },
    {
      category: 'backend',
      img: '/img/skills/codeigniter.png',
    },
    {
      category: 'tools',
      img: '/img/skills/firebase.png',
    },
    {
      category: 'tools',
      img: '/img/skills/webpack.png',
    },
    {
      category: 'tools',
      img: '/img/skills/heroku.png',
    },
    {
      category: 'tools',
      img: '/img/skills/netlify.png',
    },
  ])

  // get categories
  const getCategories = () => {
    const categories = skills.map((skill) => skill.category)
    return [...new Set(categories)]
  }

  return {
    skills,
    getCategories,
    activeCategory,
    setActiveCategory,
  }
}

export default useSkillsHook
