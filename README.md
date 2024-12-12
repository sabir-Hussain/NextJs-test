# Next.js Live Coding Challenge

## Overview

This live coding challenge involves building a simple blog application using Next.js, interacting with an external API, and implementing basic routing. The goal is to assess your proficiency in using Next.js, handling APIs, and applying TypeScript in a real-world project setting.

## Tasks

### Task 1: Display Posts on Homepage

**Objective:** Fetch and display a list of blog posts on the homepage using an existing `PostCard` component.

**Requirements:**

- Fetch blog posts data from the JSON Placeholder API: [Posts API](https://jsonplaceholder.typicode.com/posts)
- Use the `PostCard` component to render each post. This component should display the post's title and a brief snippet of its body.
- Ensure the homepage is server-side rendered.

### Task 2: TypeScript Integration

**Objective:** Properly type all components and data interactions using TypeScript.

**Requirements:**

- Define TypeScript interfaces or types for the blog post data.
- Ensure all components, including `PostCard`, are typed correctly to handle the data structures involved.

### Task 3: Post Detail Page

**Objective:** Implement dynamic routing to a detail page for each post.

**Requirements:**

- When a user clicks on a post on the homepage, they should be routed to a detailed page for that specific post.
- The URL for the detail page should follow the pattern: `http://localhost:3000/post/[id]` where `[id]` is the post's unique identifier.
- On the post detail page, use the same `PostCard` component to render the full content of the blog post.
- Fetch the specific post's data from: [Post Detail API](https://jsonplaceholder.typicode.com/posts/1) replacing the `1` at the end with the appropriate post ID.
- Utilize Next.js's routing and data fetching enhancements (`getStaticPaths` and `getStaticProps` for static generation) to ensure optimal performance and SEO benefits.

## Additional Information

- For understanding API endpoints and data structures, refer to the JSON Placeholder documentation: [JSON Placeholder API](https://jsonplaceholder.typicode.com/)

## Evaluation Criteria

- Correct implementation of API requests and data handling.
- Proper use and configuration of TypeScript.
- Effective use of Next.js features (e.g., dynamic routing, data fetching methods).
- Code readability and component reusability.

## Setup

Before starting, ensure your development environment includes:

- Node.js installed (LTS version recommended).
- Access to a terminal and basic knowledge of Git commands.

Good luck with the challenge!

---

This README provides a structured guide for the candidate, detailing the tasks, requirements, and resources available for the coding challenge.
