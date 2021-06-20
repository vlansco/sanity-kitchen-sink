export default {
  widgets: [
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
                  buildHookId: '60cf1be10db00b4a09edede5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h93ytavm',
                  apiId: 'a316cd80-3277-4d8d-8128-256345d29974'
                },
                {
                  buildHookId: '60cf1be26d9df7d190b924fc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uy66uxyi',
                  apiId: '27c571f6-9d49-4ba4-a9c0-999bd0d246a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vlansco/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uy66uxyi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
