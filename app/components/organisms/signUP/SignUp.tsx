'use client';
import React, { useState } from 'react';
import Title from '../../atoms/main/title/Title';
import SignUpForm from '../../molecules/signUpForm/SignUpForm';

export default function SignUp() {
    return (
        <div className="py-12 px-4">
            <div className="text-center mb-8">
                <Title>CADASTRE-SE</Title>
                <p className="text-gray-600 mt-2">Cadastre-se para ter acesso a todos os conteúdos do Li, Surtei, Bloguei:</p>
            </div>
            <SignUpForm></SignUpForm>
        </div>
    );
}
