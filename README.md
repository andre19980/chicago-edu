# ChicagoEdu

Aplicação para visualização de dados educacionais baseada no dataset [Chicago Public Schools - School Progress Reports SY2425](https://data.cityofchicago.org/Education/Chicago-Public-Schools-School-Progress-Reports-SY2/twrw-chuq/about_data), com foco em indicadores como desempenho acadêmico, frequência, evasão e percepções do ambiente escolar.

## Requerimentos
- Node: `^20.19.0 || >=22.12.0`

## Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/andre19980/chicago-edu.git

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

### Variáveis de ambiente
Para o projeto se conectar com a API do Portal de Chicado, é necessário criar um arquivo `.env` na raiz do projeto e inseir as seguintes variáveis

```sh
VITE_API_URL=https://data.cityofchicago.org/api/v3/views/twrw-chuq/query.json
VITE_API_TOKEN=<seu-token>
```

Confira [nesse link o passo-a-passo para gerar um api token](https://support.socrata.com/hc/en-us/articles/210138558-Generating-App-Tokens-and-API-Keys)

### Compilar e Hot-Reload para Desenvolvimento

```sh
npm run dev
```

### Verificar Tipos, Compilar e Minificar para Produção

```sh
npm run build
```

### Rodar em modo Produção
Após ter executado o `build`:
```sh
npm run preview
```

A aplicação estará disponível em:

```
http://localhost:4173
```

### Rodar Testes Unitários com [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Rodar Testes End-to-End com [Playwright](https://playwright.dev)

```sh
# Instale os navegadores na primeira execução
npx playwright install

# Ao testar em CI, é necessário buildar o projeto antes
npm run build

# Executa os testes end-to-end
npm run test:e2e
# Executa os testes apenas no Chromium
npm run test:e2e -- --project=chromium
# Executa os testes de um arquivo específico
npm run test:e2e -- tests/example.spec.ts
# Executa os testes em modo debug
npm run test:e2e -- --debug
```

### Lint com [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Considerações Técnicas
- A paginação da listagem das escolas foi feita exclusivamente no lado do cliente, ainda que a API do Portal de Chicago (construída com [SODA3 API](https://support.socrata.com/hc/en-us/articles/34730618169623-SODA3-API)) disponha dos recursos para paginação via servidor. Tal decisão foi baseada no número de escolas da base e da [capacidade de processamento das tabelas TanStack](https://tanstack.com/table/latest/docs/guide/data#how-much-data-can-tanstack-table-handle) empregadas na aplicação, visando, portanto, um menor número de requisições e uma experiência mais rápida para o usuário durante a nevagação da tabela.
