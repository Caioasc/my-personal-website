# /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/notes.md

# 🚀 Deployment & Maintenance Notes (Enterprise Standard)

## 1. Como funciona agora (Enterprise)

- **Deploy só ocorre quando uma nova release é publicada no GitHub.**
- **Cada release é uma versão única (tag vX.Y.Z) e rastreável.**
- **Nada é publicado automaticamente ao dar push na main.**

---

## 2. Como criar uma nova release e publicar

1. Faça commit e push normalmente para a branch `main`.
2. Quando quiser publicar uma nova versão, rode:

```sh
gh workflow run "release.yml" --field version="vX.Y.Z"
```
- Substitua `vX.Y.Z` pela nova versão (ex: `v1.2.3`).
- O workflow valida o formato, cria a tag e o release.
- O deploy é disparado automaticamente após a publicação da release.

---

## 3. Diagnóstico de rede (debug)

Se precisar testar conectividade, rode:
```sh
gh workflow run "diagnostics.yml"
```

---

## 4. Melhores práticas

- Use sempre versionamento semântico (`vX.Y.Z`).
- Commits devem seguir Conventional Commits.
- Releases devem ter changelog claro (automatizável no futuro).
- Monitore o Actions para sucesso/falha.
- Após release, verifique o site em [https://caiocastilho.com](https://caiocastilho.com).

---

## 5. Links úteis
- [GitHub CLI Documentation](https://cli.github.com/manual/)
- [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Hostinger FTP Setup Guide](https://www.hostinger.com/tutorials/how-to-use-ftp)

---

## 6. Manutenção
- Sempre atualize este arquivo ao mudar o fluxo.
- Compartilhe com novos membros do time.

---

# END OF NOTES
