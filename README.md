# 🌐 Iglobe - Website Institucional (Portfólio de Frontend)

![Header Image](https://placehold.co/800x200/04169E/FFFFFF?text=IGLOBE+-+TECNOLOGIA+QUE+APROXIMA) 

> Este projeto é uma réplica e modernização de um website institucional, desenvolvido como um estudo de caso e item de portfólio para demonstrar proficiência em React, Next.js e design responsivo com Tailwind CSS.

---

## 🚀 Sobre o Projeto

O site da Iglobe é uma plataforma moderna e responsiva focada na venda de serviços de telecomunicações e segurança (Internet Fibra, Câmeras, Interfones). O objetivo principal era transformar um layout existente em um design mais limpo, usando as melhores práticas de desenvolvimento React e otimização de performance.

### 🔑 Principais Desafios e Soluções:

* **Design System:** Criação de um sistema de cores (Palette) baseado no branding original do cliente.
* **Componentização Modular:** Quebra do layout em componentes reutilizáveis (`Header`, `Footer`, `Benefits`, `CTA`) para facilitar a manutenção.
* **Navegação Avançada:** Implementação de um **Dropdown Interativo** no Header para a seção "Produtos e serviços" usando `useState` (Client Component).
* **Layouts Complexos:** Desenvolvimento de layouts de cards em Flexbox/Grid (como a seção **Benefícios**), garantindo a divisão horizontal (40% conteúdo / 60% imagem) em telas grandes.
* **Otimização de Imagem:** Uso do componente `next/image` com a sintaxe moderna (`fill`) para performance e adequação às últimas versões do Next.js.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido com uma stack moderna e escalável:

* **Frontend Framework:** React.js
* **Meta-Framework:** Next.js (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS (Para utility-first styling e responsividade)
* **Licença:** MIT (Código aberto e permissivo)

---

## 📦 Como Rodar o Projeto Localmente

Siga estas instruções para obter uma cópia local do projeto e colocá-lo em execução.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18+) e npm (ou yarn/pnpm) instalados em sua máquina.

### Instalação e Execução

1.  Clone o repositório:
    ```bash
    git clone [LINK DO SEU REPOSITÓRIO]
    cd iglobe
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
    O aplicativo estará acessível em `http://localhost:3000`.

---

## 🚀 Deploy (HostGator - Exportação Estática)

Este projeto foi configurado para ser exportado como um site estático, permitindo o deploy em provedores de hospedagem tradicionais (como HostGator, Apache ou Nginx).

### Comandos de Build e Exportação

1.  Compile o projeto (a flag `output: 'export'` no `next.config.js` garante que esta etapa gere os arquivos estáticos):
    ```bash
    npm run build
    ```
2.  Os arquivos de produção estarão na pasta **`out/`**.
3.  Faça o upload do **conteúdo** da pasta `out/` (todos os arquivos HTML, JS, CSS e a pasta `_next`) para o diretório `public_html` do seu servidor HostGator.

---

## 📄 Estrutura de Rotas

O projeto utiliza o App Router do Next.js para organizar as páginas:

| Rota (URL) | Descrição | Componentes-Chave |
| :--- | :--- | :--- |
| `/` | Página Inicial (Home) | `Header`, `Hero` (Genérico), `Footer` |
| `/sobre-nos` | Apresentação da empresa e benefícios. | `Hero`, `Benefits`, `Solutions`, `About` |
| `/produtos-e-servicos/internet` | Página de Serviço (Internet) | `HeroInternet`, `BenefitsInternet`, `Plans` |
| `/produtos-e-servicos/interfones` | Página de Serviço (Em desenvolvimento) | `HeroInterfones`, `InterfonesCTA` |
| `/planos` | Tabela de Preços (Seção Planos) | `Plans` (Reutilizado) |

---

## ✨ Contribuições (Licença)

Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para inspecionar, aprender e usar o código em seus próprios estudos e projetos.

**Copyright (c) [Ano Atual] [Seu Nome ou Nome da Sua Empresa]**# 🌐 Iglobe - Website Institucional (Portfólio de Frontend)

![Header Image](https://placehold.co/800x200/04169E/FFFFFF?text=IGLOBE+-+TECNOLOGIA+QUE+APROXIMA) 

> Este projeto é uma réplica e modernização de um website institucional, desenvolvido como um estudo de caso e item de portfólio para demonstrar proficiência em React, Next.js e design responsivo com Tailwind CSS.

---

## 🚀 Sobre o Projeto

O site da Iglobe é uma plataforma moderna e responsiva focada na venda de serviços de telecomunicações e segurança (Internet Fibra, Câmeras, Interfones). O objetivo principal era transformar um layout existente em um design mais limpo, usando as melhores práticas de desenvolvimento React e otimização de performance.

### 🔑 Principais Desafios e Soluções:

* **Design System:** Criação de um sistema de cores (Palette) baseado no branding original do cliente.
* **Componentização Modular:** Quebra do layout em componentes reutilizáveis (`Header`, `Footer`, `Benefits`, `CTA`) para facilitar a manutenção.
* **Navegação Avançada:** Implementação de um **Dropdown Interativo** no Header para a seção "Produtos e serviços" usando `useState` (Client Component).
* **Layouts Complexos:** Desenvolvimento de layouts de cards em Flexbox/Grid (como a seção **Benefícios**), garantindo a divisão horizontal (40% conteúdo / 60% imagem) em telas grandes.
* **Otimização de Imagem:** Uso do componente `next/image` com a sintaxe moderna (`fill`) para performance e adequação às últimas versões do Next.js.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido com uma stack moderna e escalável:

* **Frontend Framework:** React.js
* **Meta-Framework:** Next.js (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS (Para utility-first styling e responsividade)
* **Licença:** MIT (Código aberto e permissivo)

---

## 📦 Como Rodar o Projeto Localmente

Siga estas instruções para obter uma cópia local do projeto e colocá-lo em execução.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18+) e npm (ou yarn/pnpm) instalados em sua máquina.

### Instalação e Execução

1.  Clone o repositório:
    ```bash
    git clone [LINK DO SEU REPOSITÓRIO]
    cd iglobe
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
    O aplicativo estará acessível em `http://localhost:3000`.

---

## 🚀 Deploy (HostGator - Exportação Estática)

Este projeto foi configurado para ser exportado como um site estático, permitindo o deploy em provedores de hospedagem tradicionais (como HostGator, Apache ou Nginx).

### Comandos de Build e Exportação

1.  Compile o projeto (a flag `output: 'export'` no `next.config.js` garante que esta etapa gere os arquivos estáticos):
    ```bash
    npm run build
    ```
2.  Os arquivos de produção estarão na pasta **`out/`**.
3.  Faça o upload do **conteúdo** da pasta `out/` (todos os arquivos HTML, JS, CSS e a pasta `_next`) para o diretório `public_html` do seu servidor HostGator.

---

## 📄 Estrutura de Rotas

O projeto utiliza o App Router do Next.js para organizar as páginas:

| Rota (URL) | Descrição | Componentes-Chave |
| :--- | :--- | :--- |
| `/` | Página Inicial (Home) | `Header`, `Hero` (Genérico), `Footer` |
| `/sobre-nos` | Apresentação da empresa e benefícios. | `Hero`, `Benefits`, `Solutions`, `About` |
| `/produtos-e-servicos/internet` | Página de Serviço (Internet) | `HeroInternet`, `BenefitsInternet`, `Plans` |
| `/produtos-e-servicos/interfones` | Página de Serviço (Em desenvolvimento) | `HeroInterfones`, `InterfonesCTA` |
| `/planos` | Tabela de Preços (Seção Planos) | `Plans` (Reutilizado) |

---

## ✨ Contribuições (Licença)

Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para inspecionar, aprender e usar o código em seus próprios estudos e projetos.

**Copyright (c) [2025] [Joice Mota]**
