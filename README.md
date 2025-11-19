# Website Fernando Palacios - AIEO & Storytelling

![Assinatura Fernando Palacios](/public/logo.png)

Este repositório contém o código-fonte do website pessoal de Fernando Palacios, 2x World's Best Storyteller. O projeto foi reconstruído do zero com foco em **AIEO (Answer & Intelligence Engine Optimization)**, performance, acessibilidade e design premium.

---

## 🚀 Status Atual

**URL de Teste**: [https://3060-imt4hy7mdvnln8xp7g37g-62c0b230.manusvm.computer/pt](https://3060-imt4hy7mdvnln8xp7g37g-62c0b230.manusvm.computer/pt)

**Branch Principal**: `feature/about-page-content` (contém todas as últimas atualizações)

### ✅ Funcionalidades Implementadas

1.  **Reconstrução Completa (Next.js 16 + App Router)**
    - Migração de Pages Router para App Router
    - Atualização de Next.js 14 para 16
    - Atualização de next-intl para v4

2.  **AIEO (Answer & Intelligence Engine Optimization)**
    - Schema.org completo (Person, Organization, Book, FAQ, Website)
    - Meta tags otimizadas
    - Open Graph e Twitter Cards
    - Conteúdo estruturado para IAs

3.  **Design System Profissional**
    - Paleta de cores cream/ink/accent-gold
    - Tipografia hierárquica
    - 10+ animações com Tailwind CSS
    - Componentes prontos (cards, botões, badges)

4.  **Página "Sobre" Completa (3 Idiomas)**
    - Conteúdo rico em MDX
    - Narrativa em primeira pessoa
    - Timeline com anedotas
    - 24 imagens profissionais posicionadas estrategicamente

5.  **Branding e Identidade Visual**
    - Assinatura digital no header
    - Favicons personalizados (multi-size)

---

## 🛠️ Stack Tecnológica

| Categoria | Tecnologia | Versão | Uso |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | 16.0.3 | Estrutura principal |
| **Linguagem** | TypeScript | 5.5.2 | Tipagem e segurança |
| **Estilização** | Tailwind CSS | 3.4.4 | Design system e CSS |
| **Internacionalização** | next-intl | 4.5.3 | Multilíngue (pt/en/es) |
| **Conteúdo** | MDX | 2.3.0 | Páginas ricas em conteúdo |
| **Animações** | Framer Motion | 11.2.10 | Animações e transições |
| **Package Manager** | pnpm | 9.4.0 | Gerenciamento de pacotes |

---

## 📂 Estrutura de Diretórios

```
.
├── docs/                 # Documentação completa do projeto
├── public/               # Arquivos estáticos (imagens, favicons, logo)
│   ├── images/
│   │   └── about/        # Imagens da página Sobre
│   ├── logo.png          # Assinatura digital
│   └── favicon.ico       # Favicon
├── src/
│   ├── app/              # Rotas do App Router
│   │   └── [locale]/     # Rotas multilíngue
│   │       ├── sobre/    # Página Sobre
│   │       └── page.tsx  # Homepage
│   ├── components/       # Componentes React
│   │   └── layout/       # Header, Footer, etc.
│   ├── content/          # Conteúdo MDX
│   │   └── about/        # Conteúdo da página Sobre (pt/en/es)
│   ├── i18n/             # Configuração do next-intl
│   ├── lib/              # Funções utilitárias e constantes
│   ├── messages/         # Arquivos de tradução (JSON)
│   └── schemas/          # Schemas para AIEO
├── mdx-components.tsx    # Componentes customizados para MDX
└── next.config.js        # Configuração do Next.js
```

---

## 📜 Documentação Detalhada

Todo o processo de desenvolvimento foi documentado em detalhes. Consulte os seguintes arquivos para mais informações:

- **[Análise de Arquivos Iniciais](./docs/ANALISE_ARQUIVOS.md)**: Comparativo entre o projeto original e as melhorias propostas.
- **[Implementações Finais](./docs/IMPLEMENTACOES_FINAIS.md)**: Relatório completo sobre a implementação do schema generator, design system e outras melhorias.
- **[Imagens Adicionadas](./docs/IMAGENS_ADICIONADAS.md)**: Detalhes sobre a categorização e posicionamento estratégico das 24 imagens.
- **[Branding Implementado](./docs/BRANDING_IMPLEMENTADO.md)**: Relatório sobre a implementação da assinatura digital e favicons.

---

## 🚀 Como Rodar o Projeto

1.  **Clone o repositório**:
    ```bash
    gh repo clone frrpalacios/bio
    cd bio
    git checkout feature/about-page-content
    ```

2.  **Instale as dependências**:
    ```bash
    pnpm install
    ```

3.  **Crie o arquivo de ambiente**:
    ```bash
    cp .env.local.example .env.local
    ```

4.  **Rode o servidor de desenvolvimento**:
    ```bash
    pnpm dev
    ```

5.  **Acesse em**: [http://localhost:3000](http://localhost:3000)

---

## 🎯 Próximas Etapas

Consulte o arquivo **[ROADMAP.md](./ROADMAP.md)** para ver o plano de implementação das próximas funcionalidades, incluindo:

- Página "Contato"
- Página "Livro"
- Página "Cases"
- Página "Blog"
- Animações com Framer Motion
- Otimizações de performance

---

## 🤝 Contribuições

Este projeto é gerenciado pela **Manus AI**. Todas as contribuições são bem-vindas através de Pull Requests no branch `main`.
