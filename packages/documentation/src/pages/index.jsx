import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'gatsby';

export default function Index({ location }) {
  return (
    <Layout location={location}>
      <div className="site-l-wrapper">
        <p>
          Welcome! This site will help you get setup to develop on the platform for VA.gov.
        </p>
        <ul>
          <li>
            For information about the platform, visit the{' '}
            <Link to="/platform-101">Platform 101</Link> section.
          </li>
          <li>
            For information about the frontend, visit the{' '}
            <Link to="/frontend">Frontend</Link> section.
          </li>
          <li>
            For information about the backend, visit the{' '}
            <Link to="/backend">Backend</Link> section.
          </li>
          <li>
            For frequently asked questions, visit the{' '}
            <Link to="/faq">FAQ</Link> section.
          </li>
        </ul>
      </div>
    </Layout>
  );
}
