import React from 'react';
import { Helmet } from 'react-helmet';

function Head({ title = 'Saikat Saikim' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="author" content="Moniruzzaman Saikat" />
      <meta
        name="keywords"
        content="web designer, freelance webdesigner, saikat, saikim, moniruzzaman saikat, freelance web programmer, freelance developer"
      />
      <meta
        name="description"
        content="Moniruzzaman Saikat is full stack freelance web developer. Feel free to contact me for any web related projects."
      />
    </Helmet>
  );
}

export default Head;
