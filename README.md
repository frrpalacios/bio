# Fernando Palacios - Site Oficial

> **2x World's Best Storyteller** | Showrunner | Entretenimento Estratégico & Storytelling Corporativo

Site oficial de Fernando Palacios, pioneiro do storytelling corporativo no Brasil.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

---

## 🎯 Sobre o Projeto

Site canônico otimizado para consolidar a autoridade digital de Fernando Palacios, com foco em:

- **SEO premium** (Schema.org, OG tags, hreflang)
- **AIEO** (AI Engine Optimization) para LLMs
- **Performance** (Core Web Vitals otimizados)
- **Conversão** (múltiplos caminhos narrativos)
- **Multilíngue** (PT, EN, ES)

---

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **i18n:** next-intl
- **Analytics:** Vercel Analytics + Speed Insights
- **Blog:** MDX
- **Deploy:** Vercel

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/frrpalacios/bio.git
cd bio

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com suas chaves

# Rode em desenvolvimento
npm run dev

# Abra http://localhost:3000/pt
```

---

## 🌍 Internacionalização

O site está disponível em 3 idiomas:

- **Português** (`/pt`) - Idioma padrão
- **Inglês** (`/en`)
- **Espanhol** (`/es`)

Traduções em: `/public/locales/*.json`

---

## 📄 Estrutura de Páginas

### ✅ Implementadas

- `/pt` - Homepage narrativa
  - Hero Section
  - Produtos (Talk de Midas, Story Storm, Curso)
  - Prova Social (Yamaha, Pfizer, IT Mídia)
  - Estatísticas (176K+, 30K+, 200+, 2x)
  - CTA Quiz

### 🚧 Em Desenvolvimento

- `/talk-de-midas` - Produto B2B Premium
- `/story-storm` - Agência Criativa
- `/curso` - Storytelling Para Não Criativos
- `/sobre` - Biografia narrativa
- `/metodo` - Timeline (Atos I-IV)
- `/casos` - Portfolio completo
- `/livro` - O Guia Completo do Storytelling
- `/blog` - Sistema de conteúdo MDX
- `/imprensa` - Press kit IA-optimized
- `/contato` - Formulários de conversão

---

## 🎨 Design System

**Paleta Cream + Ink** (inspirada no Claude)

```css
/* Backgrounds */
cream-50: #FDFCFB
cream-100: #FAF8F6 (principal)
cream-200: #F5F2ED

/* Textos */
ink-900: #18181F (principal)
ink-800: #2B2B35
ink-700: #40404C

/* Accents */
accent-gold: #D4AF37 (premium)
accent-sage: #87A96B (CTAs)
accent-bronze: #CD7F32 (destaques)
```

---

## 📊 SEO & Schema.org

Schemas JSON-LD implementados:

- ✅ **Person** - Fernando Palacios (Knowledge Graph)
- ✅ **Organization** - Storytellers
- ✅ **Article** - Posts do blog
- ✅ **Breadcrumb** - Navegação
- ✅ **Book** - O Guia Completo do Storytelling
- 🚧 **Event** - Cursos e palestras

---

## 🚀 Deploy no Vercel

### Método 1: Deploy Automático (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `frrpalacios/bio`
5. Configure as variáveis de ambiente:
   ```
   NEXT_PUBLIC_SITE_URL=https://www.fernandopalacios.com.br
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   GOOGLE_SITE_VERIFICATION=seu-codigo-aqui
   ```
6. Clique em "Deploy"

### Método 2: Vercel CLI

```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

---

## 🔧 Configuração do Domínio

No painel da Vercel:

1. Vá em **Settings** → **Domains**
2. Adicione: `www.fernandopalacios.com.br`
3. Adicione: `fernandopalacios.com.br` (redirect para www)
4. Configure os DNS conforme instruções da Vercel

---

## 📈 Analytics & Tracking

### Google Analytics 4

Adicione no `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Google Search Console

1. Vá em [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione a propriedade `https://www.fernandopalacios.com.br`
3. Use o código de verificação em `GOOGLE_SITE_VERIFICATION`

### Hotjar (opcional)

```
NEXT_PUBLIC_HOTJAR_ID=seu-id-aqui
```

---

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção local
npm start

# Linter
npm run lint

# Type check
npm run type-check
```

---

## 📝 Variáveis de Ambiente

Copie `.env.local.example` para `.env.local` e configure:

```bash
# Site
NEXT_PUBLIC_SITE_URL=https://www.fernandopalacios.com.br

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=

# Email (para formulários)
RESEND_API_KEY=
CONTACT_EMAIL=contarei@storytellers.com.br
PROPOSAL_EMAIL=contatarei@storytellers.com.br

# Hotmart
NEXT_PUBLIC_HOTMART_CHECKOUT_URL=

# Google Search Console
GOOGLE_SITE_VERIFICATION=
```

---

## 🎯 Roadmap

### Fase 1: Estrutura Base ✅
- [x] Configuração Next.js + TypeScript
- [x] Design system Cream + Ink
- [x] Sistema i18n (pt/es/en)
- [x] Schemas JSON-LD
- [x] Homepage narrativa
- [x] Deploy Vercel

### Fase 2: Páginas de Produtos 🚧
- [ ] Talk de Midas (B2B)
- [ ] Story Storm (Agência)
- [ ] Curso Storytelling

### Fase 3: Autoridade 🚧
- [ ] Sobre (biografia)
- [ ] Método (timeline)
- [ ] Casos (portfolio)
- [ ] Livro
- [ ] Imprensa

### Fase 4: Conversão 🚧
- [ ] Blog com MDX
- [ ] Formulários de contato
- [ ] Quiz arquétipo narrativo
- [ ] Integração Hotmart

### Fase 5: Otimização 🚧
- [ ] Performance audit
- [ ] Acessibilidade
- [ ] SEO avançado
- [ ] A/B testing

---

## 🤝 Contribuição

Este é um projeto privado. Para sugestões ou bugs, entre em contato com o desenvolvedor.

---

## 📄 Licença

© 2025 Fernando Palacios. Todos os direitos reservados.

---

## 📞 Contato

- **Site:** [www.fernandopalacios.com.br](https://www.fernandopalacios.com.br)
- **Email:** contarei@storytellers.com.br
- **Instagram:** [@__fernandopalacios](https://instagram.com/__fernandopalacios)
- **LinkedIn:** [/in/fernandopalacios](https://linkedin.com/in/fernandopalacios)

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e storytelling estratégico**
