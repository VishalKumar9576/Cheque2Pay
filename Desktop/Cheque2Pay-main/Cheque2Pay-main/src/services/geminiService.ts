// Gemini API Service
// Replace this with your actual Gemini API key and endpoint

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'your-gemini-api-key';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

interface GeminiRequest {
  contents: {
    parts: {
      text: string;
    }[];
  }[];
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export const callGeminiAPI = async (userMessage: string): Promise<string> => {
  try {
    // Check if API key is properly configured
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your-gemini-api-key') {
      throw new Error('Gemini API key not configured');
    }

    const requestBody: GeminiRequest = {
      contents: [
        {
          parts: [
            {
              text: `You are a helpful assistant for Cheque2Pay, a digital cheque processing platform. 
              Provide helpful, accurate, and friendly responses about our services.
              
              Context about Cheque2Pay:
              - We digitize paper cheques into secure, verified real-time payments
              - Support 25+ major Indian banks
              - RBI compliant with bank-grade security
              - Processing time: 2-5 minutes
              - Pricing: Free plan ₹10/transaction, Pro plan ₹5/transaction
              
              User message: ${userMessage}
              
              Please provide a helpful response in a conversational tone.`
            }
          ]
        }
      ]
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data: GeminiResponse = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Invalid response format from Gemini API');
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
};

// Fallback responses for when Gemini API is not available
export const getFallbackResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();
  
  if (input.includes('hello') || input.includes('hi')) {
    return 'Hello! Welcome to Cheque2Pay. I can help you with cheque processing, account setup, and general questions about our services.';
  }
  
  if (input.includes('cheque') && input.includes('process')) {
    return 'To process a cheque with Cheque2Pay:\n\n1. Upload a clear image of your cheque\n2. Our AI will extract all details automatically\n3. Verify the extracted information\n4. Choose your payment method (UPI/NEFT/RTGS)\n5. Complete the transaction securely\n\nThe entire process takes 2-5 minutes!';
  }
  
  if (input.includes('fee') || input.includes('charge') || input.includes('cost')) {
    return 'Our pricing is transparent:\n\n• Free Plan: ₹10 per transaction\n• Pro Plan: ₹5 per transaction\n• Enterprise: Custom pricing\n\nNo hidden fees or setup charges!';
  }
  
  if (input.includes('secure') || input.includes('safe')) {
    return 'Cheque2Pay uses bank-grade security:\n\n• End-to-end encryption\n• RBI compliance\n• Multi-factor authentication\n• Real-time fraud detection\n• ISO 27001 certified\n\nYour data and transactions are completely secure!';
  }
  
  if (input.includes('support') || input.includes('help')) {
    return 'I\'m here to help! You can:\n\n• Ask me questions about our services\n• Get help with cheque processing\n• Learn about security features\n• Contact our support team at support@cheque2pay.com\n\nWhat would you like to know?';
  }
  
  if (input.includes('account') || input.includes('register')) {
    return 'Creating an account is easy:\n\n1. Click "Get Started" in the navigation\n2. Fill in your details (name, email, phone)\n3. Verify your email\n4. Start processing cheques!\n\nIt takes less than 2 minutes to get started.';
  }
  
  if (input.includes('bank') && input.includes('support')) {
    return 'We support 25+ major Indian banks including:\n\n• SBI, HDFC, ICICI, Axis\n• Yes Bank, Kotak, PNB\n• And many more!\n\nOur API integrations are constantly expanding to include regional banks.';
  }
  
  if (input.includes('time') || input.includes('duration')) {
    return 'Processing times:\n\n• Cheque verification: 30-60 seconds\n• UPI transfers: Instant\n• NEFT transfers: Same day\n• RTGS transfers: Real-time\n\nMost transactions complete within 2-5 minutes!';
  }
  
  if (input.includes('refund') || input.includes('cancel')) {
    return 'Refund and cancellation policies:\n\n• Cancel before verification: Free\n• After verification: Subject to bank policies\n• Refunds processed in 5-7 business days\n• Contact support for assistance\n\nWe maintain detailed logs for all transactions.';
  }

  return 'Thank you for your question! I\'m here to help with Cheque2Pay services. You can ask me about:\n\n• Cheque processing\n• Account setup\n• Security features\n• Pricing and fees\n• Supported banks\n• Processing times\n\nWhat would you like to know?';
}; 