# Sistema de Agendamento de Consultas

Sistema web para agendamento de consultas médicas com validação de dados.

## Funcionalidades

- Formulário de agendamento com duas seções:
  - Dados do Paciente
  - Dados da Consulta
- Validação completa dos campos
- Máscaras para CPF, telefone e CEP
- Interface responsiva com Bootstrap

## Requisitos

- Node.js
- npm

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

## Executando o projeto

Para iniciar o servidor em modo desenvolvimento:
```bash
npm run dev
```

Para iniciar o servidor em modo produção:
```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`

## Validações Implementadas

### Dados do Paciente
- Nome (obrigatório, mínimo 2 caracteres)
- Sobrenome (obrigatório, mínimo 2 caracteres)
- CPF (obrigatório, formato XXX.XXX.XXX-XX)
- Data de Nascimento (obrigatória, formato de data válido)
- Telefone (obrigatório, formato (XX) XXXXX-XXXX)
- CEP (obrigatório, formato XXXXX-XXX)
- Endereço (obrigatório, mínimo 5 caracteres)

### Dados da Consulta
- Clínica (obrigatória)
- Especialidade (obrigatória)
- Data e Hora do Agendamento (obrigatória, deve ser futura)
- Observação (opcional) 