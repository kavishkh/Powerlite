# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/cd8addba-f88b-4efc-bd24-21791b23cf18

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cd8addba-f88b-4efc-bd24-21791b23cf18) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Email Functionality

This project now includes email functionality for the Contact and Contact Sales pages.

### Quick Start

1. Configure your email settings in the `.env` file
2. Start both servers: `npm run start:dev`
3. Visit http://localhost:5173/contact

### Detailed Setup

For detailed setup instructions, see:
- [STARTUP_GUIDE.md](STARTUP_GUIDE.md) - Complete startup guide
- [EMAIL_SETUP.md](EMAIL_SETUP.md) - Email configuration details
- [GMAIL_SETUP.md](GMAIL_SETUP.md) - Specific Gmail setup for no-reply-powerlote@gmail.com
- [KAVISH_EMAIL_SETUP.md](KAVISH_EMAIL_SETUP.md) - Specific setup for kavishkhanna06@gmail.com
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common issues and solutions
- [NETWORK_TROUBLESHOOTING.md](NETWORK_TROUBLESHOOTING.md) - Network connectivity issues
- [JSON_ERROR_TROUBLESHOOTING.md](JSON_ERROR_TROUBLESHOOTING.md) - JSON parsing errors
- [EMAIL_TROUBLESHOOTING.md](EMAIL_TROUBLESHOOTING.md) - Email authentication issues
- [PATH_RESOLUTION_FIX.md](PATH_RESOLUTION_FIX.md) - Fix for import path resolution errors

### Features

- Contact form submissions sent via email
- Sales inquiry form submissions sent via email
- Form validation and error handling
- Loading states and user feedback
- Comprehensive error logging
- Proxy configuration for development
- Testing utilities

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/cd8addba-f88b-4efc-bd24-21791b23cf18) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
