import emailjs from 'emailjs-com';

export function sendEmail(toEmail, insightsText) {
    return emailjs.send(
        'service_c94zgs9', // ← твой реальный Service ID
        'template_fkvz4fj', // ← твой шаблон
        {
            user_email: toEmail,
            insights: insightsText,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // ← обязательно в .env
    );
}


// src/api/email.js
//import emailjs from 'emailjs-com';

/**
 * Sends an email with UX insights using EmailJS.
 * @param {string} toEmail - The recipient's email address
 * @param {string} insightsText - The insights to include in the message
 * @returns {Promise} EmailJS response promise
 */
// export function sendEmail(toEmail, insightsText) {
//     return emailjs.send(
//         'your_service_id', // 🔁 Replace with your actual Service ID
//         'your_template_id', // 🔁 Replace with your actual Template ID
//         {
//             user_email: toEmail,
//             insights: insightsText,
//         },
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Your public API key from EmailJS
//     );
// }
//
