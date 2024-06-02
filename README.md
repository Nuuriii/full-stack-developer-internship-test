# Full Stack Developer Internship Test

Welcome to the selection process for the Full Stack Developer Internship position at Gema Phala Ananta. This test is designed to evaluate your ability to build a web application using Next.js, integrate it with a database, and deploy it to the cloud.

## Application Features

- **Add Task**: Users can add a new task.
- **View Tasks**: Users can view all tasks that have been added.
- **Edit Task**: Users can edit an existing task.
- **Delete Task**: Users can delete an existing task.

## Tech Stack

- Typescript (Programming Language)
- MongoDB (Database )
- Nextjs (Framework)
- Styled Components (Styling)
- Vercel (Deployment)

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/Nurrohmann/todo-app.git
   ```

2. Install Dependencies:

   ```sh
   bun install
   ```

3. Environment Variables:

   ```sh
   DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority"
   ```

4. Prisma Setup:

   ```sh
   bun prisma migrate dev --name init
   bun prisma generate
   ```

5. Start the Development Server::
   ```sh
   bun dev
   ```
