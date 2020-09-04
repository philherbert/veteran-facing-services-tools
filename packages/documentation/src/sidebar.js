module.exports = {
  sections: [
    {
      id: 'getting-started',
      name: 'Getting started',
      href: '/getting-started',
      indexmdx: true,
      items: [
        {
          name: 'VA.gov workflow',
          items: [
            {
              name: 'Overview',
              href: '/getting-started/workflow/overview',
            },
            {
              name: 'Write',
              href: '/getting-started/workflow/write',
            },
            {
              name: 'Review',
              href: '/getting-started/workflow/review',
            },
            {
              name: 'Deploy',
              href: '/getting-started/workflow/deploy',
            },
          ],
        },
        {
          name: 'Common tasks',
          items: [
            {
              name: 'Run and build VA.gov',
              href: '/getting-started/common-tasks/run-build',
            },
            {
              name: 'Running tests',
              href: '/getting-started/common-tasks/test',
            },
            {
              name: 'Debugging tests',
              href: '/getting-started/common-tasks/debugging-tests',
            },
            {
              name: 'Adding a new feature to VA.gov',
              href: '/getting-started/common-tasks/new-feature',
              items: [
                {
                  name: 'Applications',
                  href: '/getting-started/common-tasks/new-application',
                },
                {
                  name: 'Widgets',
                  href: '/getting-started/common-tasks/new-widget',
                },
                {
                  name: 'Content pages',
                  href: '/getting-started/common-tasks/new-page',
                },
                {
                  name: 'Analytics',
                  href: '/getting-started/common-tasks/analytics',
                },
              ],
            },
            {
              name: 'Writing a unit test',
              href: '/getting-started/common-tasks/new-unit-test',
            },
            {
              name: 'Writing an end-to-end test',
              href: '/getting-started/common-tasks/new-end-to-end-test',
            },
            {
              name: 'Updating Formation',
              href: '/getting-started/common-tasks/updating-formation',
            },
            {
              name: 'URL Routing',
              href: '/getting-started/common-tasks/routing',
            },
          ],
        },
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      href: '/frontend',
      indexmdx: true,
      items: [
        {
          name: 'Startup Guide',
          items: [
            {
              name: 'Setup VA.gov locally',
              href: '/startup-guide/setup-va-gov',
            },
            {
              name: 'Access internal tools',
              href: '/startup-guide/access-internal-tools',
            },
          ],
        },
        {
          name: 'Forms',
          items: [
            {
              name: 'Overview',
              href: '/forms/forms-overview',
            },
            {
              name: 'Tutorial',
              href: '/forms/tutorial',
            },
            {
              name: 'Documentation',
              href: '/forms/documentation',
            },
          ],
        },
        {
          name: 'Platform',
          items: [
            {
              name: 'Overview',
              href: '/platform/platform-overview',
            },
            {
              name: 'Site structure',
              href: '/platform/site-structure',
            },
            {
              name: 'Architecture',
              href: '/platform/architecture',
            },
            {
              name: 'Frontend standards',
              href: '/platform/front-end-standards',
            },
            {
              name: 'Tools',
              href: '/platform/tools',
            },
          ],
        },
        {
          name: 'Visual Design',
          items: [
            {
              name: 'Overview',
              href: '/visual-design/visual-design-overview',
            },
            {
              name: 'Formation components',
              href: '/visual-design/formation-components',
            },
          ],
        },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      href: '/backend',
      indexmdx: true,
      items: [
        {
          name: 'Onboarding',
          items: [
            {
              name: 'Onboarding resources',
              href: '/backend/onboarding',
            },
          ],
        },
        {
          name: 'Setup',
          items: [
            {
              name: 'Setting up your development environment',
              href: '/backend/setup',
            },
          ],
        },
        {
          name: 'Development',
          items: [
            {
              name: 'Development process and documentation',
              href: '/backend/development',
            },
          ],
        },
        {
          name: 'Testing',
          items: [
            {
              name: 'Testing tools and procedures',
              href: '/backend/testing',
            },
          ],
        },
        {
          name: 'Deployment',
          items: [
            {
              name: 'Deployment resources',
              href: '/backend/deployment',
            },
          ],
        },
        {
          name: 'Monitoring',
          items: [
            {
              name: 'Monitoring resources',
              href: '/backend/monitoring',
            },
          ],
        },

      ],
    },
    {
      id: 'operations',
      name: 'Operations',
      href: '/operations',
      indexmdx: true,
      items: [
        
      ],
    },
    {
      id: 'documentation',
      name: 'Documentation guide',
      href: '/documentation-guide',
      indexmdx: true,
      items: [
        {
          name: 'Documentation style guide',
          href: '/documentation-guide/documentation-style-guide',
        },
        {
          name: 'Adding new pages to this site',
          href: '/documentation-guide/doc-page',
        },
        {
          name: 'Adding pages from Github to this site',
          href: '/documentation-guide/external-doc-page',
        },
        {
          name: 'Add graphs to MDX',
          href: '/documentation-guide/add-graphs-to-mdx',
        },
        {
          name: 'Creating a Gatsby plugin',
          href: '/documentation-guide/creating-gatsby-plugins',
        },
      ],
    },
  ],
};
