// src/pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next'

// Типы для формы
interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  type: 'general' | 'partnership' | 'investor' | 'career'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Логируем запрос
  console.log('API called:', req.method, req.body)

  // Разрешаем только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, company, message, type }: ContactFormData = req.body

    // Проверяем обязательные поля
    if (!name || !email || !message || !type) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      })
    }

    // Ваши данные бота ИЗ ПЕРЕМЕННЫХ ОКРУЖЕНИЯ
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram credentials')
      return res.status(500).json({ 
        success: false, 
        message: 'Server configuration error' 
      })
    }

    // Определяем тип обращения на русском
    const typeLabels: Record<ContactFormData['type'], string> = {
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
📋 <b>Тип обращения:</b> ${typeLabels[type]}

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
    console.log('Sending to Telegram...')
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

    console.log('Telegram response status:', telegramResponse.status)

    // Проверяем ответ от Telegram
    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.text()
      console.error('Telegram API error:', errorData)
      return res.status(500).json({ 
        success: false, 
        message: 'Telegram API error: ' + errorData 
      })
    }

    console.log('Message sent successfully!')
    
    // Возвращаем успешный ответ
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Server error: ' + (error instanceof Error ? error.message : 'Unknown error')
    })
  }
}
