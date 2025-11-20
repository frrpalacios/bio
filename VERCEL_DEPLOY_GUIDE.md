# Guia de Deploy para Vercel - Fernando Palacios Bio

**Status:** ✅ Pronto para deploy  
**Build:** ✅ Passando sem erros  
**Schemas:** ✅ Validados (0 errors)

---

## 🚀 Deploy Rápido (3 Minutos)

### Opção 1: Via GitHub (Recomendado)

**1. Conectar Repositório ao Vercel**
```bash
# Acesse: https://vercel.com/new
# Clique em "Import Git Repository"
# Selecione: frrpalacios/bio
# Clique em "Import"
```

**2. Configurar Projeto**
```
Framework Preset: Next.js
Root Directory: ./
Build Command: pnpm build
Output Directory: .next
Install Command: pnpm install
```

**3. Environment Variables**
```bash
GOOGLE_SITE_VERIFICATION=seu_codigo_google_aqui
```

**4. Deploy**
```
Clique em "Deploy"
Aguarde 2-3 minutos
✅ Site publicado em: https://fernando-palacios.vercel.app
```

---

### Opção 2: Via Vercel CLI

**1. Instalar Vercel CLI**
```bash
npm i -g vercel
```

**2. Login**
```bash
vercel login
# Escolha método de autenticação (GitHub, GitLab, etc.)
```

**3. Deploy**
```bash
cd /home/ubuntu/bio
vercel --prod
```

**4. Responder Prompts**
```
? Set up and deploy "~/bio"? [Y/n] y
? Which scope? frrpalacios
? Link to existing project? [y/N] n
? What's your project's name? fernando-palacios
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

**5. Aguardar Deploy**
```
✅ Production: https://fernando-palacios.vercel.app
```

---

## 🔧 Configuração Avançada

### Custom Domain

**1. Adicionar Domínio no Vercel**
```
Vercel Dashboard > Project > Settings > Domains
Add: fernandopalacios.com.br
```

**2. Configurar DNS**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**3. Aguardar Propagação**
```
Tempo: 24-48 horas
Status: https://fernandopalacios.com.br ✅
```

### Environment Variables

**Adicionar no Vercel Dashboard:**
```bash
# Google Search Console
GOOGLE_SITE_VERIFICATION=abc123xyz

# Analytics (se necessário)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Outros
NODE_ENV=production
```

### Build & Development Settings

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

---

## ✅ Verificação Pós-Deploy

### 1. Testar Site
```bash
# Homepage
curl -I https://fernando-palacios.vercel.app/pt
# Deve retornar: 200 OK

# Schemas
curl -s https://fernando-palacios.vercel.app/pt | grep -c "application/ld+json"
# Deve retornar: 2
```

### 2. Validar Schemas

**Schema.org Validator:**
```
URL: https://validator.schema.org/
Input: https://fernando-palacios.vercel.app/pt
Resultado esperado: 0 ERRORS
```

**Google Rich Results Test:**
```
URL: https://search.google.com/test/rich-results
Input: https://fernando-palacios.vercel.app/pt
Resultado esperado: Person e Organization detectados
```

### 3. Testar Multilíngue
```bash
# Português
https://fernando-palacios.vercel.app/pt

# Inglês
https://fernando-palacios.vercel.app/en

# Espanhol
https://fernando-palacios.vercel.app/es
```

### 4. Performance

**Vercel Speed Insights:**
```
Dashboard > Analytics > Speed Insights
Métricas esperadas:
- FCP: < 1.8s
- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms
```

---

## 🔄 CI/CD Automático

### GitHub Actions (Já Configurado)

Vercel detecta automaticamente pushes em `main` e faz deploy:

```yaml
# .github/workflows/vercel-deploy.yml (automático)
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### Preview Deployments

Cada Pull Request gera um preview:
```
PR #123 → https://fernando-palacios-git-feature-abc.vercel.app
```

---

## 📊 Monitoramento

### Vercel Analytics

**Ativar:**
```tsx
// src/app/layout.tsx (já configurado)
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics /> {/* ✅ Já ativado */}
      </body>
    </html>
  );
}
```

**Métricas:**
- Pageviews
- Unique visitors
- Top pages
- Referrers
- Devices

### Google Search Console

**1. Adicionar Propriedade**
```
URL: https://search.google.com/search-console
Add Property: https://fernandopalacios.com.br
```

**2. Verificar Propriedade**
```
Method: HTML tag
Code: <meta name="google-site-verification" content="abc123">
```

**3. Enviar Sitemap**
```
URL: https://fernandopalacios.com.br/sitemap.xml
```

**4. Monitorar:**
- Impressões
- Cliques
- CTR
- Posição média
- Rich Results

---

## 🐛 Troubleshooting

### Build Falha

**Erro:** `Module not found`
```bash
# Solução: Limpar cache e reinstalar
rm -rf .next node_modules
pnpm install
pnpm build
```

**Erro:** `Type error in layout.tsx`
```bash
# Solução: Verificar tipos
pnpm tsc --noEmit
```

### Schemas Não Aparecem

**Problema:** Schemas não detectados por crawlers
```bash
# Verificar HTML gerado
curl -s https://fernando-palacios.vercel.app/pt > /tmp/html.html
grep -A 10 "application/ld+json" /tmp/html.html

# Deve mostrar schemas completos
```

### Performance Lenta

**Problema:** LCP > 2.5s
```bash
# Solução: Otimizar imagens
# Usar next/image com width/height
# Ativar Vercel Image Optimization
```

---

## 📝 Checklist Pré-Deploy

- [x] ✅ Build passando sem erros
- [x] ✅ Schemas validados (0 errors)
- [x] ✅ Multilíngue funcionando (PT/EN/ES)
- [x] ✅ Analytics integrado
- [x] ✅ Speed Insights integrado
- [ ] Imagens otimizadas
- [ ] Favicon configurado
- [ ] OG Image criado
- [ ] Sitemap.xml gerado
- [ ] robots.txt configurado

---

## 🎯 Pós-Deploy (Primeira Semana)

### Dia 1
- [ ] Verificar deploy bem-sucedido
- [ ] Testar todos os idiomas (PT/EN/ES)
- [ ] Validar schemas em produção
- [ ] Configurar Google Search Console

### Dia 3
- [ ] Enviar sitemap para Google
- [ ] Monitorar indexação
- [ ] Verificar rich results

### Dia 7
- [ ] Analisar métricas Vercel Analytics
- [ ] Verificar performance (Speed Insights)
- [ ] Ajustar conforme necessário

---

## 📞 Suporte

### Vercel
- **Docs:** https://vercel.com/docs
- **Support:** https://vercel.com/support
- **Status:** https://vercel-status.com

### Next.js
- **Docs:** https://nextjs.org/docs
- **Discord:** https://nextjs.org/discord
- **GitHub:** https://github.com/vercel/next.js

---

## ✅ Conclusão

Deploy para Vercel é simples e automático. Com esta configuração:

- ✅ Build otimizado (SSG)
- ✅ Schemas em HTML estático
- ✅ Analytics integrado
- ✅ Performance otimizada
- ✅ CI/CD automático

**Tempo estimado:** 3-5 minutos  
**Dificuldade:** Fácil  
**Status:** ✅ **PRONTO PARA DEPLOY**

---

**Próximo passo:** Executar deploy via GitHub ou Vercel CLI
