// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configura o transporte para o Zoho Mail
const transporter = nodemailer.createTransport({
  service: 'Zoho',
  host: 'smtp.zoho.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
  connectionTimeout: 10000,
  socketTimeout: 10000,
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    console.log('Enviando e-mail:', { name, email, phone, message });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Substitua pelo seu endereço de email
      subject: `Novo contato de ${name} - Portfólio de Desenvolvimento`,
      text: `
Nome: ${name}
E-mail: ${email}
Telefone: ${phone ? phone : 'Não informado'}

Mensagem:
${message}`,
      html: `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    .header { text-align: center; border-bottom: 3px solid #007bff; padding-bottom: 10px; margin-bottom: 20px; }
    .header img { width: 150px; height: auto; }
    .title { font-size: 24px; color: #007bff; margin-bottom: 10px; }
    .info { margin-bottom: 20px; }
    .info p { margin: 5px 0; }
    .info strong { color: #333; }
    .footer { font-size: 14px; color: #666; text-align: center; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="title">Nova Mensagem de Contato</div>
    <div class="info">
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone ? phone : 'Não informado'}</p>
    </div>
    <p><strong>Mensagem:</strong><br>${message}</p>
    <div class="footer">
      <p>Mensagem enviada pelo portfólio de desenvolvimento de ${name}</p>
      <p><img src="https://kelvenfontes.vercel.app/logo.png" alt="Logo" style="width: 200px; height: auto; display: block; margin: 20px auto;" /></p>
    </div>
  </div>
</body>
</html>`,
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Obrigado por entrar em contato com meu portfólio!',
      text: `Olá ${name},\n\nObrigado por entrar em contato com o meu portfólio de desenvolvimento! Fico muito feliz pelo seu interesse. Sua mensagem foi recebida e irei analisar o mais breve possível.\n\nMensagem recebida:\n${message}\n\nAgradeço o contato e em breve estarei de volta para continuar nossa conversa!\n\nAtenciosamente,\n${process.env.EMAIL_USER}`,
      html: `
<p>Olá ${name},</p>
<p>Obrigado por entrar em contato com o meu portfólio de desenvolvimento!</p>
<p>Fico muito feliz pelo seu interesse. Sua mensagem foi recebida e irei analisar o mais breve possível.</p>
<p><strong>Mensagem recebida:</strong><br>${message}</p>
<p>Agradeço o contato e em breve estarei de volta para continuar nossa conversa!</p>
<p><strong>Atenciosamente,</strong><br>${process.env.EMAIL_USER}</p>
<p><img src="https://kelvenfontes.vercel.app/logo.png" alt="Logo" style="width: 200px; height: auto; display: block; margin: 20px auto;" /></p>`,
    };

    // Envia o email para você com todas as informações do usuário
    await transporter.sendMail(adminMailOptions);

    // Envia o email para o usuário (se fornecido)
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Email enviado com sucesso.' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email.' }, { status: 500 });
  }
}
