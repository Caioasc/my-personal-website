# /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/notes.md

# 🚀 Deployment & Maintenance Notes

## 1. Commit & Push Changes

```sh
git add .
git commit -m "Chore(ci): update site and workflows. Don't forget to commit"
git push
```

- **Always use the commit message convention:**
  - `Feat(component): add new component`
  - `Fix(api): fix API error`
  - `Docs(readme): update Readme`
  - `Refactor(utils): refactor utils`
  - `Style(tailwind): add new Tailwind class`
  - `Test(unit): add unit test`
  - `Chore(deps): update dependencies`
  - **Last line:** `Don't forget to commit`

---

## 2. Deploy & Release (GitHub Actions)

### Manual Trigger via GitHub CLI

```sh
gh workflow run "deploy-enterprise.yml" \
  --field version="vX.Y.Z" \
  --field deployment_strategy="github-actions-optimized"
```

- Replace `vX.Y.Z` with your release version (e.g., `v1.0.2`).
- This will:
  - Build the project
  - Generate changelog
  - Create a GitHub Release with artifact
  - Deploy to Hostinger via FTP

### Manual Trigger via GitHub UI

1. Go to your repository on GitHub.
2. Click the **Actions** tab.
3. Select **🏢 Enterprise Deploy Pipeline - Advanced Network Optimization**.
4. Click **Run workflow** (top right).
5. Enter the **version** (e.g., `v1.0.2`) and choose the deployment strategy.
6. Click **Run workflow**.

---

## 3. Hostinger FTP Secrets (required in GitHub repo settings)

- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`
- `HOSTINGER_FTP_SERVER`

---

## 4. Best Practices

- Always increment the version for each deploy.
- Monitor the Actions tab for errors or failed deployments.
- After successful deploy, verify the site at [https://caiocastilho.com](https://caiocastilho.com).
- Use only trusted GitHub Actions for deployment (e.g., SamKirkland/FTP-Deploy-Action).
- Keep this `notes.md` updated with any new commands or procedures.

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
