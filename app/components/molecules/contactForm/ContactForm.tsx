'use client';
import React, { useState } from 'react';
import Input from '../../atoms/main/input/Input';
import Textarea from '../../atoms/main/textArea/TextArea';
import Button from '../../atoms/main/button/Button';
import Title from '../../atoms/main/title/Title';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="py-12 px-4">
            <div className="text-center mb-8">
                <Title>CONTATO</Title>
                <p className="text-gray-600 mt-2">Tem alguma dúvida, sugestão ou feedback? Envie uma mensagem abaixo:</p>
            </div>
            <form onSubmit={submit} className="max-w-xl w-full mx-auto bg-white shadow-lg rounded-xl p-8">
                <Input name="name" value={formData.name} type="nome" placeholder="Nome" onChange={change} />
                <Input name="email" value={formData.email} type="email" placeholder='Email' onChange={change} />
                <Textarea name="message" value={formData.message} placeholder="Mensagem" onChange={change} />
                <Button>Enviar</Button>
            </form>
        </div>
    );
}
