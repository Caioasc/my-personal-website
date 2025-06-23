# /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/notes.md

# 🚀 Deployment & Maintenance Notes

## 1. How It Works Now (The New Process)

Our CI/CD system has been professionally refactored for automation and reliability.

- **Continuous Deployment:** Every `git push` to the `main` branch automatically triggers the `deploy.yml` workflow. This builds the project and deploys it to production at `caiocastilho.com`. You no longer need to run a manual deployment.
- **Manual Releases:** To create a formal version (Git tag and GitHub Release), you manually trigger the `release.yml` workflow. This is for versioning, not for deploying.

---

## 2. How to Run Workflows Manually

### A. Create a New Release (The Main Manual Action)

Use this command to create a new version tag and a corresponding GitHub Release.

```sh
gh workflow run "release.yml" --field version="vX.Y.Z"
```

- Replace `vX.Y.Z` with your new semantic version (e.g., `v1.1.3`).
- This command **only creates the release**, it does not deploy. Deployment is automatic.

### B. Run Network Diagnostics (For Debugging Only)

If you are experiencing connectivity issues, you can run the diagnostics workflow.

```sh
gh workflow run "diagnostics.yml"
```

---

## 3. Hostinger FTP Secrets (required in GitHub repo settings)

- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`

*Note: The server is now hardcoded in the workflow for reliability.*

---

## 4. Best Practices

- **Commit frequently** to the `main` branch to keep the live site updated.
- After a push, verify the deployment was successful in the **Actions** tab.
- After successful deploy, verify the site at [https://caiocastilho.com](https://caiocastilho.com).
- Keep this `notes.md` updated with any new procedures.

---

## 5. Useful Links

- [GitHub CLI Documentation](https://cli.github.com/manual/)
- [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Hostinger FTP Setup Guide](https://www.hostinger.com/tutorials/how-to-use-ftp)

---

## 6. Maintenance

- For any workflow or deployment changes, update this file.
- For new team members, share this doc as the single source of truth for deployment.

---

# END OF NOTES
