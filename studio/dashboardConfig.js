export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60673039f6b18da12b34eec0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-32ajr7tf',
                  apiId: 'dfb2002f-11e1-4929-b112-5710357b4fa4'
                },
                {
                  buildHookId: '6067303942751788b9aabb40',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e1kd5o1d',
                  apiId: '17588b44-efe7-44cc-9735-c83ff52f9b30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mcilie/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e1kd5o1d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
