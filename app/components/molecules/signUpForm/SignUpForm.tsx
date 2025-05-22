'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../atoms/main/input/Input';
import Textarea from '../../atoms/main/textArea/TextArea';
import Radio from '../../atoms/main/radio/Radio';
import Checkbox from '../../atoms/main/checkbox/Checkbox';
import Button from '../../atoms/main/button/Button';
import { useTranslations } from 'next-intl';

const cadastroSchema = z.object({
    nome: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
    email: z.string().email({ message: 'Email inválido.' }),
    senha: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' }),
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

    const t = useTranslations('SignUp');
    const opcoesGenero = [
        { value: 'masculino', label: t('MaleLabel') },
        { value: 'feminino', label: t('FemaleLabel') },
        { value: 'outro', label: t('OtherLabel') },
    ];

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg"
        >
            <Input label={t('NameLabel')} placeholder={t('NamePlaceholder')} {...register('nome')} error={errors.nome?.message} />

            <Input label={t('EmailLabel')} type="email" placeholder={t('EmailPlaceholder')} {...register('email')} error={errors.email?.message} />

            <Input label={t('PasswordLabel')} type="password" placeholder={t('PasswordPlaceholder')} {...register('senha')} error={errors.senha?.message} />

            <Radio label={t('GenderLabel')} options={opcoesGenero} {...register('genero')} error={errors.genero?.message} />

            <Textarea label={t('MessageLabel')} placeholder={t('MessagePlaceholder')} rows={4} {...register('mensagem')} error={errors.mensagem?.message} />

            <Checkbox label={t('PrivacyLabel')} {...register('termos')} error={errors.termos?.message} />

            <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => reset()} disabled={isSubmitting}>
                    {t('CleanButton')}
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? t('SubmittingButton') : t('SubmitButton')}
                </Button>
            </div>
        </form>
    );
};

export default SignUpForm;
