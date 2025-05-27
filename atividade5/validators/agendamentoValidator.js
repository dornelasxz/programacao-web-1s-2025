const { body, validationResult } = require('express-validator');

const validarAgendamento = [
    // Validações dos dados do paciente
    body('nome')
        .notEmpty().withMessage('O nome é obrigatório')
        .isLength({ min: 2 }).withMessage('O nome deve ter pelo menos 2 caracteres'),
    
    body('sobrenome')
        .notEmpty().withMessage('O sobrenome é obrigatório')
        .isLength({ min: 2 }).withMessage('O sobrenome deve ter pelo menos 2 caracteres'),
    
    body('cpf')
        .notEmpty().withMessage('O CPF é obrigatório')
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).withMessage('CPF deve estar no formato XXX.XXX.XXX-XX'),
    
    body('dataNascimento')
        .notEmpty().withMessage('A data de nascimento é obrigatória')
        .isDate().withMessage('Data de nascimento inválida'),
    
    body('telefone')
        .notEmpty().withMessage('O telefone é obrigatório')
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/).withMessage('Telefone deve estar no formato (XX) XXXXX-XXXX'),
    
    body('cep')
        .notEmpty().withMessage('O CEP é obrigatório')
        .matches(/^\d{5}-\d{3}$/).withMessage('CEP deve estar no formato XXXXX-XXX'),
    
    body('endereco')
        .notEmpty().withMessage('O endereço é obrigatório')
        .isLength({ min: 5 }).withMessage('O endereço deve ter pelo menos 5 caracteres'),

    // Validações dos dados da consulta
    body('clinica')
        .notEmpty().withMessage('A clínica é obrigatória'),
    
    body('especialidade')
        .notEmpty().withMessage('A especialidade é obrigatória'),
    
    body('dataHoraAgendamento')
        .notEmpty().withMessage('A data e hora do agendamento são obrigatórias')
        .custom((value) => {
            const dataAgendamento = new Date(value);
            const dataAtual = new Date();
            
            if (dataAgendamento <= dataAtual) {
                throw new Error('A data do agendamento deve ser posterior à data atual');
            }
            return true;
        }),

    // Middleware para verificar os resultados das validações
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validarAgendamento; 