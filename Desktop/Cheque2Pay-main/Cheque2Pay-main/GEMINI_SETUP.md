# Gemini API Setup Guide

This guide will help you set up the Gemini API integration for the Cheque2Pay chatbot.

## Prerequisites

1. Google Cloud Platform account
2. Gemini API access (currently in beta)

## Setup Steps

### 1. Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_GEMINI_API_KEY=your-actual-gemini-api-key-here
```

### 3. Enable Gemini API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select or create a project
3. Enable the "Generative Language API"
4. Set up billing (required for API usage)

### 4. API Usage Limits

- Free tier: 15 requests per minute
- Paid tier: Higher limits available
- Monitor usage in Google Cloud Console

## Features

The chatbot includes:

- **Smart Responses**: AI-powered responses about Cheque2Pay services
- **Fallback System**: Predefined responses when API is unavailable
- **Context Awareness**: Understands Cheque2Pay-specific queries
- **Real-time Chat**: Instant messaging interface

## Common Questions the Bot Can Answer

- Cheque processing steps
- Pricing and fees
- Security features
- Account setup
- Supported banks
- Processing times
- Refund policies
- General support

## Troubleshooting

### API Key Issues
- Ensure the API key is correctly set in `.env` as `VITE_GEMINI_API_KEY`
- Check that the API key has proper permissions
- Verify billing is enabled on your Google Cloud project

### Rate Limiting
- The bot will automatically fall back to predefined responses
- Monitor your API usage in Google Cloud Console
- Consider upgrading to paid tier for higher limits

### Network Issues
- The bot gracefully handles network errors
- Fallback responses ensure the bot always works
- Check your internet connection if API calls fail

## Security Notes

- Never commit your API key to version control
- Use environment variables for sensitive data
- Monitor API usage for unusual activity
- Consider implementing rate limiting on your end

## Customization

You can customize the bot by:

1. Modifying the prompt in `geminiService.ts`
2. Adding new fallback responses
3. Adjusting the UI styling in `Chatbot.tsx`
4. Adding new conversation flows

## Support

For issues with:
- **Gemini API**: Contact Google Cloud Support
- **Bot Integration**: Check the console for error messages
- **UI Issues**: Review the React component code 