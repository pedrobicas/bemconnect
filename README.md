# BemConnect - Portal de Acompanhamento Hospitalar

BemConnect é um aplicativo que visa facilitar o acompanhamento de familiares próximos a pessoas que estão em estado de internação nos hospitais. Ele proporciona uma conexão segura entre pacientes e familiares, permitindo o acesso a recursos específicos mediante permissão do paciente.
## Integrantes
- Luigi Ferrara Sinno RM98047
- Pedro Henrique Bicas Couto RM99534
  
## Tecnologias Utilizadas

- React (frontend)
- JSON Server (simulação de backend)
- React Router (navegação entre páginas)
- Sass (pré-processador CSS)

## Passo a Passo para Rodar a Aplicação

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

### 1. Clone o Repositório

```bash
git clone https://github.com/pedrobicas/bemconnect.git
cd bemconnect
```

### 2.  Instale as Dependências

```bash
npm install
```

### 3.  Inicie o JSON Server (Simulação de Backend)

```bash
npm run backend
```

### 4. Em Outro Terminal, Inicie o Aplicativo Vite + React

```bash
npm run dev
```
O aplicativo Vite + React será iniciado na porta 5173 (Verificar a porta ao rodar o comando no terminal).

### 5. Acesse o Aplicativo no Navegador

Abra seu navegador e acesse http://localhost:5173.

Agora, você pode explorar o BemConnect e todas as suas funcionalidades.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `src/`: Contém o código-fonte da aplicação React.
  - `components/`: Componentes React reutilizáveis.
  - `styles/`: Arquivos de estilo Sass.
  - `App.jsx`: Componente principal da aplicação.
  - `Home.jsx`: Página principal do aplicativo.
  - `Login.jsx`: Página de login.
  - `Cadastro.jsx`: Página de cadastro.
  - `Profile.jsx`: Página de perfil do usuário.
- `db.json`: Arquivo utilizado pelo JSON Server para simular um backend.

## Personalizações

Você pode personalizar o aplicativo de acordo com suas necessidades:

- **Dados:** O arquivo `db.json` contém dados fictícios. Substitua esses dados pelos dados reais do seu aplicativo.
- **Estilos:** Os estilos estão em arquivos Sass na pasta `styles/`. Sinta-se à vontade para ajustá-los conforme necessário.

## Notas Adicionais
- Este projeto é um exemplo educativo e pode não ser adequado para ambientes de produção sem melhorias adicionais.

Divirta-se explorando o BemConnect! Se encontrar problemas ou tiver sugestões de melhorias, sinta-se à vontade para contribuir com o projeto.
