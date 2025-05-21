'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../atoms/main/input/Input';
import Textarea from '../../atoms/main/textArea/TextArea';
import Radio from '../../atoms/main/radio/Radio';
import Checkbox from '../../atoms/main/checkbox/Checkbox';
import Button from '../../atoms/main/button/Button';

const cadastroSchema = z.object({
    nome: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
    email: z.string().email({ message: 'Email inválido.' }),
    senha: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres.'}),
    mensagem: z
        .string()
        .min(10, { message: 'A mensagem deve ter no mínimo 10 caracteres.' })
        .max(500, { message: 'A mensagem deve ter no máximo 500 caracteres.' }),
    termos: z.boolean().refine((val) => val === true, {
        message: 'Você deve aceitar os termos para continuar.',
    }),
    genero: z.enum(['masculino', 'feminino', 'outro'], {
        errorMap: () => ({ message: 'Selecione uma opção de gênero.' }),
    }),
});

type CadastroFormData = z.infer<typeof cadastroSchema>;

const opcoesGenero = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'outro', label: 'Outro' },
];

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CadastroFormData>({
        resolver: zodResolver(cadastroSchema),
        defaultValues: {
            nome: '',
            email: '',
            mensagem: '',
            termos: false,
            genero: undefined,
        },
    });

    const onSubmit = async (data: CadastroFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(`Cadastro realizado com sucesso por ${data.nome}!`);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg"
        >
            <Input label="Nome completo" placeholder="Seu nome" {...register('nome')} error={errors.nome?.message} />

            <Input label="Email" type="email" placeholder="seu@email.com" {...register('email')} error={errors.email?.message} />

            <Input label="Senha" type="password" placeholder="Digite sua senha" {...register('senha')} error={errors.senha?.message} />

            <Radio label="Gênero" options={opcoesGenero} {...register('genero')} error={errors.genero?.message} />

            <Textarea label="Mensagem" placeholder="Escreva uma mensagem..." rows={4} {...register('mensagem')} error={errors.mensagem?.message} />

            <Checkbox label="Li e aceito os termos de uso" {...register('termos')} error={errors.termos?.message} />

            <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => reset()} disabled={isSubmitting}>
                    Limpar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Cadastrar'}
                </Button>
            </div>
        </form>
    );
};

export default SignUpForm;
