---
name: Join template
about: Welcome to Dominican Web3 Dev Hub, a community-driven repo highlighting Dominican
  developers and their Web3 projects.
title: ''
labels: new member
assignees: EnzoVezzaro

---

# Dominican Web3 Dev Hub - Contribution Guide

Welcome to the **Dominican Web3 Dev Hub** repository! This project aims to showcase all Web3 developers from the Dominican Republic and their work. If you are a Web3 developer and want to be featured, follow the steps below to add your information.

## How to Add Your Information

1. **Fork the Repository**
   - Click the "Fork" button at the top-right of this repo to create a copy under your GitHub account.

2. **Clone Your Forked Repository**
   ```sh
   git clone https://github.com/AWeb3Agency/dominican-dev-hub.git
   cd dominican-dev-hub
   ```

3. **Create a New Branch**
   ```sh
   git checkout -b add-your-name
   ```

4. **Edit the `developers.json` File**
   Open `developers.json` and add your details using the following format:

   ```json
   {
     "name": "Your Name",
     "bio": "Short description about you.",
     "website": "https://yourwebsite.com",
     "github": "private" or "https://github.com/yourgithub",
     "linkedin": "https://linkedin.com/in/yourlinkedin",
     "twitter": "https://twitter.com/yourtwitter",
     "technologies": ["Tech1", "Tech2", "Tech3"],
     "projects": [
       {
         "name": "Project Name",
         "description": "Brief description of the project.",
         "technologies": ["Tech1", "Tech2"],
         "url": "https://yourproject.com",
         "github": "https://github.com/yourproject"
       }
     ],
     "experience": [
       {
         "company": "Company Name",
         "position": "Your Role",
         "duration": "Start Year - End Year",
         "description": "Short description of your responsibilities."
       }
     ]
   }
   ```
   
5. **Commit Your Changes**
   ```sh
   git add developers.json
   git commit -m "Added [Your Name] to the developer list"
   ```

6. **Push Your Changes**
   ```sh
   git push origin add-your-name
   ```

7. **Create a Pull Request (PR)**
   - Go to the original repository: https://github.com/AWeb3Agency/dominican-dev-hub
   - Click "Compare & pull request."
   - Provide a short description of your addition.
   - Submit the pull request for review.

8. **Wait for Approval**
   - The maintainers will review your PR and merge it if everything is in order.

---

🚀 **Thank you for contributing!** If you have any questions, feel free to ask in the issues section.
