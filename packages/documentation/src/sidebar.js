module.exports = {
  sections: [
    {
      id: 'platform-101',
      name: 'Platform 101',
      href: '/platform-101',
      indexmdx: true,
      items: [
        {
          name: 'Overview',
          items: [
            {
              name: 'Welcome to VSP',
               href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Welcome%20to%20VSP.md',
            },
            {
              name: 'What we do',
              href: '/platform-101',
            },
          ],
        },
        {
          name: 'Main repositories',
          items: [
            {
              name: 'Docs',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team',
            },
            {
              name: 'Backend source',
              href: 'https://github.com/department-of-veterans-affairs/vets-api',
            },
            {
              name: 'Frontend source',
              href: 'https://github.com/department-of-veterans-affairs/vets-website',
            },
          ],
        },
        {
          name: 'Our stack',
          items: [
            {
              name: 'Frontend',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team',
            },
            {
              name: 'Content',
              href: 'https://github.com/department-of-veterans-affairs/vets-api',
            },
            {
              name: 'Content Integration',
              href: 'https://github.com/department-of-veterans-affairs/vets-website',
            },
            {
              name: 'Backend',
              href: 'https://github.com/department-of-veterans-affairs/vets-website',
            },
          ],
        },
        {
          name: 'Github',
          items: [
            {
              name: 'Repositories',
              href: '/platform-101/github/github-repositories',
            },
            {
              name: 'Links',
              href: '/platform-101/github/github-links',
            },
            {
              name: 'Guidelines',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md',
            },
            {
              name: 'Norms',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/README.md',
            },
          ],
        },
        {
          name: 'Slack',
          items: [
            {
              name: 'Overview',
              href: '/platform-101/slack/slack-overview',
            },
            {
              name: 'Requests',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/slack-requests.md',
            },
          ],
        },
        {
          name: 'Zenhub',
          items: [
            {
              name: 'Introduction',
              href: 'https://help.zenhub.com/support/solutions/articles/43000010778-what-is-zenhub-an-intro-to-zenhub-in-github',
            },
            {
              name: 'Onboarding',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/zenhub_onboarding.pdf',
            },
          ],
        },

        {
          name: 'First steps',
          items: [
            {
              name: 'Engineering onboarding',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/engineeringonboarding.md',
            },
            {
              name: 'Getting access to tools',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md',
            },
            {
              name: 'Product development checklist',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md',
            },
          ],
        },
        {
          name: 'Policies',
          items: [
            {
              name: 'Code review guidelines',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md',
            },
            {
              name: 'Accessibility',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md',
            },
            {
              name: 'Sensitive documentation guidance',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/sensitive-guidance.md',
            },
            {
              name: 'Norms for communication',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/norms-communication.md',
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
          name: 'Getting started',
          indexmdx: true,
          items: [
            {
              name: 'Startup guide',
              items: [
                {
                  name: 'Set up VA.gov locally',
                  href: '/frontend/getting-started',
                },
                {
                  name: 'Access internal tools',
                  href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md',
                },
              ],
            },
            {
              name: 'VA.gov workflow',
              items: [
                {
                  name: 'Overview',
                  href: '/frontend/getting-started/workflow/workflow-overview',
                },
                {
                  name: 'Write',
                  href: '/frontend/getting-started/workflow/write',
                },
                {
                  name: 'Review',
                  href: '/frontend/getting-started/workflow/review',
                },
                {
                  name: 'Deploy',
                  href: '/frontend/getting-started/workflow/deploy',
                },
              ],
            },
            {
              name: 'Common tasks',
              items: [
                {
                  name: 'Run and build VA.gov',
                  href: '/frontend/getting-started/common-tasks/run-build',
                },
                {
                  name: 'Running tests',
                  href: '/frontend/getting-started/common-tasks/test',
                },
                {
                  name: 'Debugging tests',
                  href: '/frontend/getting-started/common-tasks/debugging-tests',
                },
                {
                  name: 'Adding a new feature to VA.gov',
                  href: '/frontend/getting-started/common-tasks/new-feature',
                  items: [
                    {
                      name: 'Applications',
                      href: '/frontend/getting-started/common-tasks/new-application',
                    },
                    {
                      name: 'Widgets',
                      href: '/frontend/getting-started/common-tasks/new-widget',
                    },
                    {
                      name: 'Content pages',
                      href: '/frontend/getting-started/common-tasks/new-page',
                    },
                    {
                      name: 'Analytics',
                      href: '/frontend/getting-started/common-tasks/analytics',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Visual Design',
          items: [
            {
              name: 'Overview',
              href: '/frontend/visual-design/visual-design-overview',
            },
            {
              name: 'Formation components',
              query: 'componentList',
            },
          ],
        },
        {
          name: 'Forms',
          items: [
            {
              name: 'Tutorial',
              items: [
                {
                  name: '1. Basic',
                  href: '/frontend/forms/form-tutorial-basic',
                },
                {
                  name: '2. Intermediate',
                  href: '/frontend/forms/form-tutorial-intermediate',
                },
                {
                  name: '3. Advanced',
                  href: '/frontend/forms/form-tutorial-advanced',
                },
                {
                  name: '4. Setting up Save in Progress',
                  href: '/frontend/forms/save-in-progress',
                },
                {
                  name: '5. Using the Save in Progress menu',
                  href: '/frontend/forms/save-in-progress-menu',
                },
                {
                  name: '6. Forms in production',
                  href: '/frontend/forms/forms-in-production',
                },
              ],
            },
            {
              name: 'Documentation',
              items: [
                {
                  name: 'About the schema and uiSchema objects',
                  href: '/frontend/forms/about-the-schema-and-uischema-objects',
                },
                {
                  name: 'Available widgets',
                  href: '/frontend/forms/available-widgets',
                },
                {
                  name: 'Common patterns',
                  href: '/frontend/forms/common-patterns-for-building-forms',
                },
                {
                  name: 'Config options',
                  href: '/frontend/forms/config-options',
                },
                {
                  name: 'Component hierarchy',
                  href: '/frontend/forms/component-hierarchy',
                },
                {
                  name: 'Creating a form config file',
                  href: '/frontend/forms/creating-a-form-config-file',
                },
                {
                  name: 'Creating custom fields and widgets',
                  href: '/frontend/forms/creating-custom-fields-and-widgets',
                },
                {
                  name: 'Form features and usage guidelines',
                  href: '/frontend/forms/available-features-and-usage-guidelines',
                },
                {
                  name: 'Using available fields',
                  href: '/frontend/forms/using-available-fields',
                },
              ],
            },
          ],
        },
        {
          name: 'Platform',
          items: [
            {
              name: 'Site structure',
              items: [
                {
                  name: 'Client overview',
                  href: '/frontend/platform/site-structure/client-overview',
                },
                {
                  name: 'VA.gov environments',
                  href: '/frontend/platform/site-structure/environments',
                  indexmdx: true,
                },
                {
                  name: 'Bundles and code organization',
                  href: '/frontend/platform/site-structure/bundles-and-code-organization',
                },
                {
                  name: 'Styling',
                  href: '/frontend/platform/site-structure/styling-overview',
                },
                {
                  name: 'Page and application Javascript structure',
                  href: '/frontend/platform/site-structure/application-structure',
                },
              ],
            },
            {
              name: 'Architecture',
              items: [
                {
                  name: 'Metalsmith static site',
                  href: '/frontend/platform/architecture/static-site',
                  indexmdx: true,
                  items: [
                    {
                      name: 'How are URLs created',
                      href: '/frontend/platform/architecture/static-site/urls',
                    },
                    {
                      name: 'How templates work',
                      href: '/frontend/platform/architecture/static-site/templates',
                    },
                    {
                      name: 'How to create collections and related links',
                      href: '/frontend/platform/architecture/static-site/collections',
                    },
                  ],
                },
                {
                  name: 'CMS overview',
                  href: '/frontend/platform/architecture/cms',
                },
                {
                  name: 'Continuous integration and deployment flows',
                  href: '/frontend/platform/architecture/build-deploy-flows',
                },
                {
                  name: 'Teamsite',
                  href: '/frontend/platform/architecture/teamsite',
                },
                {
                  name: 'How do end-to-end tests work?',
                },
              ],
            },
            {
              name: 'Front End Standards',
              items: [
                {
                  name: 'React standards',
                  href: '/frontend/platform/front-end-standards/react',
                },
                {
                  name: 'Redux standards',
                  href: '/frontend/platform/front-end-standards/redux',
                },
                {
                  name: 'Styles',
                  href: '/frontend/platform/front-end-standards/styles',
                },
                {
                  name: 'Accessibility',
                  href: '/frontend/platform/front-end-standards/accessibility',
                },
                {
                  name: 'Security',
                  href: '/frontend/platform/front-end-standards/security',
                },
                {
                  name: 'Unit testing',
                  href: '/frontend/platform/unit-testing',
                },
                {
                  name: 'Automated code quality',
                  href: '/frontend/platform/front-end-standards/manual-reviews',
                },
                {
                  name: 'Documented Decisions',
                  href: '/frontend/platform/front-end-standards/documented-decisions/summary',
                },
              ],
            },
            {
              name: 'Tools',
              items: [
                {
                  name: 'Visual regression testing',
                  href: '/frontend/platform/tools/visual-regression-testing',
                },
                {
                  name: 'Feature toggles',
                  href: '/frontend/platform/tools/feature-toggles',
                },
                {
                  name: 'Downtime notifications',
                  href: '/frontend/platform/tools/downtime-notifications',
                },
                {
                  name: 'Application generator',
                  href: '/frontend/platform/tools/generator',
                },
              ],
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
              name: 'Engineering onboarding',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/engineeringonboarding.md',
            },
          ],
        },
        {
          name: 'Setup',
          items: [
            {
              name: 'Setting up your development environment',
              href: 'https://github.com/department-of-veterans-affairs/vets-api/blob/master/README.md',
            },
          ],
        },
        {
          name: 'Development',
          items: [
            {
              name: 'Development process and documentation',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/vets-api/development.md',
            },
          ],
        },
        {
          name: 'Testing',
          items: [
            {
              name: 'Testing tools and procedures',
              href: '',
            },
          ],
        },
        {
          name: 'Deployment',
          items: [
            {
              name: 'Deployment process',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/deployment.md',
            },
          ],
        },
        {
          name: 'Monitoring',
          items: [
            {
              name: 'Internal tools',
              href: 'https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md',
            },
          ],
        },

      ],
    },
    {
      id: 'faq',
      name: 'FAQ',
      href: '/faq',
      indexmdx: true,
      items: [
        {
          name: 'FAQ',
          items: [
            {
              name: 'Question 1',
              href: '/faq',
            },
            {
              name: 'Question 2',
              href: '/faq',
            },
            {
              name: 'Question 3',
              href: '/faq',
            },
          ],
        },

      ],
    },
  ],
};
