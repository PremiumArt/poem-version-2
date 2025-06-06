import axios from 'axios';

const DEEPSEEK_API_KEY = 'sk-33ae962f76ec42b0ab90a5cd0051ea58';

export const generatePoem = async (topic: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.deepseek.com/v1/chat/completions',
      {
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "أنت شاعر عربي مبدع تكتب أبياتًا باللغة العربية الفصحى حسب الغرض الشعري المطلوب. عليك أن تكتب بيتين على الأقل، مع الالتزام بالوزن والقافية إذا كان الطلب للشعر العمودي."
          },
          {
            role: "user",
            content: `اكتب أبيات شعر من نوع ${topic}`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating poem:', error);
    throw new Error('فشل في توليد الشعر. الرجاء المحاولة مرة أخرى.');
  }
};