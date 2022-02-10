import React from 'react';
import { Helmet } from 'react-helmet';

function Head({ title = 'Saikat Saikim' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="author" content="Moniruzzaman Saikat" />
      <meta
        name="keywords"
        content="web designer, freelance webdesigner, saikat, saikim, moniruzzaman saikat"
      />
      <meta
        name="description"
        content="Saikat is fullstack web developer. He works on modern web technologies in a best way."
      />
    </Helmet>
  );
}

export default Head;
