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

  ]);

  const getProjectByTitle = (title) => {
    return projects.find((project) => project.title === title);
  };

  return { projects, getProjectByTitle };
};

export default useProjectsHook;
