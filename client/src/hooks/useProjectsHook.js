import { useState } from 'react';

const useProjectsHook = () => {
  const [projects] = useState([
    {
      title: 'CourseBuzz',
      category: 'Fullstack',
      featured: true,
      description:
        'In this beautiful responsive and animation based web application users can create and sign in to their accounts. Can filter a add prefered foods catgories based. Users can edit their cart or remove items from their cart.',
      used: [
        'react',
        'firebase ',
        'context api',
        'node',
        'mongodb',
        'heroku',
      ],
      live: 'https://course-buzz.herokuapp.com/',
      code: 'https://github.com/moniruzzamansaikat/course-buzz',
      images: [
        '/img/projects/course-buzz/img1.png',
      ],
    },
    {
      title: 'FizzFood',
      category: 'Fullstack',
      featured: true,
      description:
        'In this beautiful responsive and animation based web application users can create and sign in to their accounts. Can filter a add prefered foods catgories based. Users can edit their cart or remove items from their cart.',
      used: [
        'react',
        'firebase ',
        'context api',
        'node',
        'mongodb',
        'heroku',
      ],
      live: 'https://fizz-food.web.app/',
      code: 'https://github.com/moniruzzamansaikat/fizz-food',
      images: [
        '/img/projects/fizz-food/img1.jpg',
      ],
    },
    {
      title: 'Restor Buzz',
      category: 'Frontend',
      featured: true,
      description:
        'This is a one page website that is designed to help users find the best resturant in their area. It is just a simple one page animated and responsive website.',
      used: ['html', 'css', 'bootstrap', 'javascript', 'github page'],
      code: 'http://github.com/moniruzzamansaikat/restor-buzz-static',
      live: 'https://moniruzzamansaikat.github.io/restor-buzz-static/',
      images: [
        '/img/projects/restorbuzz/img1.png',
      ],
    },
    {
      title: 'Darlence Cox',
      category: 'Frontend',
      featured: true,
      description:
        'This is a responsive onepage website. I got a PSD from the internet :) and I made it with HTML, CSS , bootstrap and some javascript.',
      used: ['html', 'css', 'bootstrap', 'javascript', 'netlify'],
      code: 'https://github.com/moniruzzamansaikat/darlence-cox',
      live: 'https://darlence-cox.netlify.app/',
      images: [
        '/img/projects/darlence-cox/img1.jpg',
      ],
    },
    {
      title: 'Xoxol',
      category: 'Frontend',
      featured: true,
      description:
        'In this beautiful responsive and animation based web application users can create and sign in to their accounts. Can filter a add prefered foods catgories based. Users can edit their cart or remove items from their cart.',
      used: [
        'html', 'css', 'bootstrap', 'javascript',
      ],
      live: 'https://moniruzzamansaikat.github.io/xoxol-template/',
      code: 'https://github.com/moniruzzamansaikat/xoxol-template',
      images: [
        '/img/projects/xoxol/img1.jpg',
      ],
    },
    {
      title: 'BitBuzz',
      category: 'Frontend',
      featured: true,
      description:
        'In this beautiful responsive and animation based web application users can create and sign in to their accounts. Can filter a add prefered foods catgories based. Users can edit their cart or remove items from their cart.',
      used: [
        'html', 'css', 'bootstrap',
      ],
      live: 'https://moniruzzamansaikat.github.io/bit-buzz/',
      code: 'https://github.com/moniruzzamansaikat/bit-buzz',
      images: [
        '/img/projects/bit-buzz/img1.jpg',
      ],
    },
    {
      title: 'Newz Website',
      category: 'Frontend',
      featured: false,
      description:
        `This is simple responsive website built with svelte. I started building this app because the previous day (when I built this:) watched a video and I figured out that svelte is amazing 🤟🏼. That's why I built this app. With css grid and custom navbar[NO CSS FRAMEWORK👀]. I have used https://inshortsapi.vercel.app/news?{possibleCategory} for fetching news.`,
      used: [
        'html', 'css', 'svelte',
      ],
      live: 'https://svelte-news-app.netlify.app/',
      code: 'https://github.com/moniruzzamansaikat/svelte-news-app',
      images: [
        '/img/projects/newz-website/img1.jpg',
      ],
    },

  ]);

  const getProjectByTitle = (title) => {
    return projects.find((project) => project.title === title);
  };

  const featuredProjects = projects.filter((project) => project.featured);

  return { projects, featuredProjects, getProjectByTitle };
};

export default useProjectsHook;
