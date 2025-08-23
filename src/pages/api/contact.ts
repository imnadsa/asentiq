// src/pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Разрешаем только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, company, message, type } = req.body

    // Ваши данные бота (прямо в коде)
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    // Определяем тип обращения на русском
    const typeLabels = {
      general: 'Общие вопросы',
      partnership: 'Партнерство',
      investor: 'Инвестиции',
      career: 'Карьера'
    }

    // Формируем красивое сообщение для Telegram
    const telegramMessage = `
🔔 <b>Новая заявка с сайта Asentiq</b>

👤 <b>Имя:</b> ${name}
📧 <b>Email:</b> ${email}
🏢 <b>Компания:</b> ${company || 'Не указана'}
📋 <b>Тип обращения:</b> ${typeLabels[type] || type}

💬 <b>Сообщение:</b>
${message}

📅 <b>Дата:</b> ${new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })} (МСК)
    `.trim()

    // Отправляем сообщение в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: "✅ Отвечено", callback_data: "replied" },
                { text: "📞 Позвонить", callback_data: "call" }
              ]
            ]
          }
        }),
      }
    )

    // Проверяем ответ от Telegram
    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.text()
      console.error('Telegram API error:', errorData)
      throw new Error('Failed to send message to Telegram')
    }

    // Возвращаем успешный ответ
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message' 
    })
  }
}
