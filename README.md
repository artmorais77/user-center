# 📘 Central de Usuários

Um dashboard moderno para visualização e gerenciamento de usuários, desenvolvido como parte de um teste técnico para vaga de Front-end Júnior.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

---

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (versão 20.19.0 ou superior)
- **npm** (versão 8.0.0 ou superior)
- **git** (Para clonar o repositório)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/artmorais77/user-center.git
cd user-center
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em seu navegador:
```
http://localhost:5173
```

---

## Tecnologias Utilizadas

### Core
- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9.3** - Superset JavaScript com tipagem estática
- **Vite 7.2.4** - Build tool e dev server de alta performance

### Roteamento
- **React Router 7.11.0** - Gerenciamento de rotas da aplicação

### Estilização
- **Tailwind CSS 4.1.18** - Framework CSS utility-first
- **Lucide React 0.562.0** - Biblioteca de ícones

### Requisições HTTP
- **Axios 1.13.2** - Cliente HTTP para consumo da API

### API Externa
- **JSONPlaceholder**
  - Usuários: `https://jsonplaceholder.typicode.com/users`
  - Posts: `https://jsonplaceholder.typicode.com/posts?userId={id}`

---

## Decisões Técnicas

### Arquitetura e Organização

**Estrutura de Pastas:**
```
src/
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas da aplicação
├── services/       # Configuração de APIs
├── types/          # Definições de tipos TypeScript
└── hooks/          # Custom hooks
```

Esta estrutura foi escolhida por sua simplicidade e escalabilidade, facilitando a manutenção e localização de código.

### Componentização

Criei componentes reutilizáveis:
- **Logo** - Componente de marca consistente
- **SearchBar** - Campo de busca isolado
- **UserCard** - Card de usuário na listagem
- **UserDetails** - Detalhes completos do usuário
- **UserPost** - Lista de posts do usuário
- **Loading** - Estado de carregamento padronizado
- **Error** - Tratamento de erros com mensagens amigáveis

### TypeScript

Optei por TypeScript para garantir:
- **Type safety** em toda a aplicação
- **Interfaces** bem definidas para User e Post
- **Melhor experiência de desenvolvimento** com autocomplete
- **Redução de bugs** em tempo de desenvolvimento

### Custom Hooks

**useDebounce:**
Implementei um hook personalizado para otimizar a busca em tempo real, evitando requisições excessivas à API e melhorando a performance.

```typescript
export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const time = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(time)
  }, [value, delay])
  
  return debouncedValue
}
```

### Tratamento de Estados

Implementei um gerenciamento de estados:
- **Loading** separados para User e Posts
- **Error** com mensagens contextualizadas
- **Feedback visual** para cada estado da aplicação

### Responsividade

Utilizei Tailwind CSS com abordagem mobile-first:
- **Grid system** adaptável (1 coluna → 2 colunas → 3 colunas)
- **Breakpoints** consistentes (md, xl)
- **Componentes flexíveis** que se adaptam a diferentes tamanhos de tela

### Roteamento com React Router

Implementei um sistema de rotas:

**Estrutura de Rotas:**
```typescript
<Routes>
  <Route path="/" index element={<Home />} />
  <Route path="/details/:id" element={<Details />} />
  <Route path="*" element={<Navigate to="/" replace/>}/>
</Routes>
```

**Navegação Programática:**
Utilizei o hook `useNavigate` para navegação entre páginas:
```typescript
const navigate = useNavigate()

function handlerViewProfile() {
  navigate(`/details/${user.id}`)
}
```

**Proteção de Rotas:**
Implementei o componente `<Navigate>` como fallback para rotas inválidas. Quando o usuário digita uma URL que não existe (como `/pagina-inexistente`), ele é automaticamente redirecionado para a home (`/`). O atributo `replace` evita que a rota inválida fique no histórico de navegação.

**Parâmetros Dinâmicos:**
Utilizei `useParams` para capturar o ID do usuário na URL:
```typescript
const { id } = useParams()
```

Isso permite URLs amigáveis e compartilháveis como `/details/1`, `/details/2`, etc.

### API Configuration

Centralizei a configuração do Axios em `services/api.ts`:
- **Base URL** configurável
- **Timeout** de 10 segundos
- **Headers** padronizados

---

## O que Melhoraria com Mais Tempo

1. Paginação tradicional com controles numéricos (1, 2, 3...)
2. Sistema completo de filtros: nome, email, cidade.
3. Incluir o termo pesquisado na url para que possa ser compartilhado com os filtros selecionados.
4. Modal de visualização rápida.

---

## Autor

Artur de Morais - artmorais77
