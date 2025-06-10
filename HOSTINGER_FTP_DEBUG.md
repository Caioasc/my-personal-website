# 🔧 HOSTINGER FTP DEBUG GUIDE

## 🚨 ERRO ATUAL: 530 Login Incorrect

### **POSSÍVEIS CAUSAS:**

1. **Username Format Incorreto**
   - ❌ Atual: `u300282944.Caioasc`
   - ✅ Tente: `u300282944` (sem domínio)
   - ✅ Tente: `caioasc@caiocastilho.com` (formato email)
   - ✅ Tente: `caiocastilho.com` (domínio completo)

2. **Servidor FTP Incorreto**
   - ❌ Atual: `185.239.210.65`
   - ✅ Tente: `ftp.caiocastilho.com`
   - ✅ Tente: `files.hostinger.com`
   - ✅ Tente: `ftpupload.net`

3. **Porta Incorreta**
   - ❌ Atual: 21 (FTP padrão)
   - ✅ Tente: 22 (SFTP)
   - ✅ Tente: 2121 (FTP alternativo)

## 🛠️ SOLUÇÕES IMEDIATAS:

### **OPÇÃO A: Verificar no hPanel Hostinger**
1. Login em https://hpanel.hostinger.com
2. Ir em **Files > File Manager**
3. Clicar em **FTP Accounts**
4. Verificar:
   - 📊 **Hostname/Server**
   - 👤 **Username**
   - 🔐 **Password** (resetar se necessário)
   - 🔢 **Port**

### **OPÇÃO B: Testar Credenciais Manualmente**
```bash
# Teste local FTP
ftp 185.239.210.65
# Inserir username
# Inserir password
# Se conectar: pwd
```

### **OPÇÃO C: Usar SFTP ao invés de FTP**
- Hostinger pode ter desabilitado FTP por segurança
- SFTP é mais seguro e moderno

## 🎯 FORMATOS MAIS PROVÁVEIS:

### **Formato 1: Conta Principal**
```yaml
Server: files.hostinger.com
Username: u300282944
Password: [senha-do-hpanel]
Port: 21
```

### **Formato 2: Domínio Específico**
```yaml
Server: ftp.caiocastilho.com
Username: caioasc@caiocastilho.com
Password: [senha-especifica]
Port: 21
```

### **Formato 3: SFTP (Mais Seguro)**
```yaml
Server: 185.239.210.65
Username: u300282944
Password: [senha]
Port: 22
Protocol: SFTP
```

## 🚀 PRÓXIMOS PASSOS:

1. **Verificar hPanel** - Confirmar credenciais
2. **Atualizar GitHub Secrets** - Com credenciais corretas
3. **Executar Hotfix Workflow** - Testar conexão
4. **Deploy Sucesso** - Site online!

---
**📝 NOTA**: Este arquivo será removido após resolução do problema. 