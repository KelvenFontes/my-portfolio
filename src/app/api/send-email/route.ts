// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configura o transporte para o Zoho Mail
const transporter = nodemailer.createTransport({
  service: 'Zoho',
  host: 'smtp.zoho.com',
  port: 587,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
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
      to: process.env.EMAIL_USER,
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
      subject: 'Kelven Bento Fontes - Contato via Portfólio de Desenvolvimento',
      text: `Olá ${name},\n\nObrigado por entrar em contato comigo através do meu portfólio de desenvolvimento! Fico feliz pelo seu interesse. Sua mensagem foi recebida com sucesso e estarei respondendo em breve.\n\nMensagem recebida:\n${message}\n\nGostaria de informar que este e-mail está associado a um projeto que está em desenvolvimento, o TechInfinite. Caso queira conhecer mais sobre ele, acesse o site: https://techinfinite.com.br.\n\nCaso queira ver meu portfólio online, acesse: https://kelvenfontes.vercel.app.\n\nAtenciosamente,\nKelven Fontes\n\nTelefone: +55 11 95364-7573\nGitHub: https://github.com/kelvenfontes\nLinkedIn: https://www.linkedin.com/in/kelvenfontes/\nE-mail: kelven.fontes@techinfinite.com.br\n[Confira meu portfólio completo: https://kelvenfontes.vercel.app]\n\n`,

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
        <p>Olá ${name},</p>
        <p>Obrigado por entrar em contato comigo através do meu portfólio de desenvolvimento!</p>
        <p>Fico feliz pelo seu interesse. Sua mensagem foi recebida com sucesso e estarei respondendo em breve.</p>

        <p><strong>Mensagem recebida:</strong><br>${message}</p>

        <p>Gostaria de informar que este e-mail está associado ao meu portfólio de desenvolvimento, hospedado no TechInfinite, para facilitar a comunicação enquanto o site está em construção.</p>

        <p>Caso queira conhecer mais sobre o meu trabalho, acesse meu portfólio online em: <a href="https://kelvenfontes.vercel.app" target="_blank">https://kelvenfontes.vercel.app</a>.</p>

        <p><strong>Atenciosamente,</strong><br><strong>Kelven Fontes</strong></p>

        <!-- Informações de Contato com ícones -->
        <div style="margin-top: 20px;">
          <p><strong>Whatsapp:</strong> <a href="tel:+5511953647573" style="text-decoration: none; color: #333;">
            <img src="https://kelvenfontes.vercel.app/icons/whatsapp.svg" alt="Telefone" style="width: 18px; vertical-align: middle; margin-right: 8px;" /> +55 11 95364-7573</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/kelvenfontes" target="_blank" style="text-decoration: none; color: #333;">
            <img src="https://kelvenfontes.vercel.app/icons/github.svg" alt="GitHub" style="width: 18px; vertical-align: middle; margin-right: 8px;" /> GitHub</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kelvenfontes/" target="_blank" style="text-decoration: none; color: #333;">
            <img src="https://kelvenfontes.vercel.app/icons/linkedin.svg" alt="LinkedIn" style="width: 18px; vertical-align: middle; margin-right: 8px;" /> LinkedIn</a></p>
          <p><strong>E-mail:</strong> <a href="mailto:kelven.fontes@techinfinite.com.br" style="text-decoration: none; color: #333;">
            <img src="https://kelvenfontes.vercel.app/icons/gmail.svg" alt="E-mail" style="width: 18px; vertical-align: middle; margin-right: 8px;" /> kelven.fontes@techinfinite.com.br</a></p>
          <p><strong><a href="https://kelvenfontes.vercel.app" target="_blank" style="text-decoration: none; color: #007bff;">Confira meu portfólio completo</a></strong></p>
        </div>

        <!-- Logo abaixo da assinatura -->
        <div style="text-align: center; margin-top: 30px;">
          <img src="https://kelvenfontes.vercel.app/logo.png" alt="Logo" style="width: 200px; height: auto; display: block; margin: 20px auto;" />
        </div>
      </div>
    </body>
    </html>`
    };







    // Envia o email com todas as informações do usuário
    await transporter.sendMail(adminMailOptions);

    // Envia o email para o usuário
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Email enviado com sucesso.' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email.' }, { status: 500 });
  }
}
