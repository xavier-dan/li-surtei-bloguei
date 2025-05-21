import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from '../SignUpForm';

describe('SignUpForm', () => {
    const fillFormCorrectly = async () => {
        const user = userEvent.setup();

        await user.type(screen.getByPlaceholderText('Seu nome'), 'Daniel Xavier');
        await user.type(screen.getByPlaceholderText('seu@email.com'), 'daniel@example.com');
        await user.type(screen.getByPlaceholderText('Digite sua senha'), '123456');
        await user.click(screen.getByText('Masculino'));
        await user.type(screen.getByPlaceholderText('Escreva uma mensagem...'), 'Mensagem de teste válida');
        await user.click(screen.getByText(/termos/i));
    };

    it('deve renderizar todos os campos do formulário', () => {
        render(<SignUpForm />);

        expect(screen.getByText(/Nome completo/i)).toBeInTheDocument();
        expect(screen.getByText(/email/i)).toBeInTheDocument();
        expect(screen.getByText(/senha/i)).toBeInTheDocument();
        expect(screen.getByText(/gênero/i)).toBeInTheDocument();
        expect(screen.getByText(/mensagem/i)).toBeInTheDocument();
        expect(screen.getByText(/termos/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /limpar/i })).toBeInTheDocument();
    });

    it('deve exibir mensagens de erro quando o formulário é enviado vazio', async () => {
        const user = userEvent.setup();
        render(<SignUpForm />);

        await user.click(screen.getByRole('button', { name: /cadastrar/i }));

        expect(await screen.findByText(/o nome deve ter pelo menos 3 caracteres/i)).toBeInTheDocument();
        expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
        expect(screen.getByText(/a senha deve ter pelo menos 6 caracteres/i)).toBeInTheDocument();
        expect(screen.getByText(/a mensagem deve ter no mínimo 10 caracteres/i)).toBeInTheDocument();
        expect(screen.getByText(/você deve aceitar os termos/i)).toBeInTheDocument();
        expect(screen.getByText(/selecione uma opção de gênero/i)).toBeInTheDocument();
    });

    it('deve enviar o formulário com sucesso quando preenchido corretamente', async () => {
        const user = userEvent.setup();
        render(<SignUpForm />);

        await fillFormCorrectly();

        await user.click(screen.getByRole('button', { name: /cadastrar/i }));

        await waitFor(() =>
            expect(window.alert).toHaveBeenCalledWith(
                expect.stringContaining('Cadastro realizado com sucesso por Daniel Xavier!')
            )
        );
    });

});
