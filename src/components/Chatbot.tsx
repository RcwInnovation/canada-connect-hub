import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const knowledgeBase = {
  greeting: [
    "Hello! Welcome to Canada One Click. How can I help you today?",
    "Hi there! I'm here to help you learn about Canada One Click. What would you like to know?",
  ],
  about: "Canada One Click is one of the first optimized digital business ecosystems in Canada, designed to solve real-life needs by providing accurate information, direct connections, and verified opportunities. Our mission is to eliminate misinformation and improve real, direct connections between people and the services, businesses, and opportunities available in their communities.",
  services: "Our Services module features a smart search engine optimized to find professional services by keywords - including lawyers, accountants, consultants, and more. It's designed to help you find exactly what you need quickly.",
  jobs: "The Jobs module includes job listings, temporary job creation, and direct contact between employers and applicants. Whether you're hiring or job hunting, we connect you directly.",
  events: "Our Events section showcases community, business, and cultural events across Calgary and Canada. Stay connected with what's happening in your community!",
  restaurants: "We have an optimized directory of local and multicultural restaurants. Discover the best dining experiences Calgary has to offer.",
  tourism: "The Tourism module features experiences, places, and services to promote local tourism. Explore the beauty of Calgary and beyond!",
  networking: "Connect with professionals, entrepreneurs, and businesses through our Networking module. Build meaningful connections that help you grow.",
  rentals: "Find apartments, rooms, and commercial spaces through our Rentals section. Your next home or office is just a click away.",
  investments: "Our Investments module lets you discover opportunities, learn in advance, connect directly, and invest with transparency. Real projects with real potential.",
  donations: "Support social and community causes making a difference through our Donations section. Give back to your community.",
  partners: "Strategic Partners include institutions, corporations, and organizations offering benefits, resources, and information for the community. Interested in becoming a partner? Fill out our partnership form!",
  registration: "Registration is completely FREE! You can create your account by clicking the 'Create Free Account' button. It only takes a minute to get started.",
  cost: "Canada One Click offers free registration for users. Businesses can list their services and gain visibility through our platform. Contact us for business listing options.",
  location: "While we're focused primarily on Calgary, Canada One Click serves communities across Canada. Our platform is designed for anyone living in or interested in opportunities in Canada.",
  contact: "You can reach us through our social media channels: Instagram, Facebook, TikTok, and LinkedIn @canadaoneclick. For partnership inquiries, please fill out the partnership form on our website.",
  default: "I'm not sure I understand that question. I can help you with information about our modules (Services, Jobs, Events, Restaurants, Tourism, Networking, Rentals, Investments, Donations, Partners), registration, costs, or partnership opportunities. What would you like to know?",
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('hola')) {
    return knowledgeBase.greeting[Math.floor(Math.random() * knowledgeBase.greeting.length)];
  }
  if (lowerMessage.includes('what is') && (lowerMessage.includes('canada one click') || lowerMessage.includes('platform') || lowerMessage.includes('about'))) {
    return knowledgeBase.about;
  }
  if (lowerMessage.includes('service')) {
    return knowledgeBase.services;
  }
  if (lowerMessage.includes('job') || lowerMessage.includes('employment') || lowerMessage.includes('work') || lowerMessage.includes('hiring')) {
    return knowledgeBase.jobs;
  }
  if (lowerMessage.includes('event')) {
    return knowledgeBase.events;
  }
  if (lowerMessage.includes('restaurant') || lowerMessage.includes('food') || lowerMessage.includes('dining') || lowerMessage.includes('eat')) {
    return knowledgeBase.restaurants;
  }
  if (lowerMessage.includes('tourism') || lowerMessage.includes('travel') || lowerMessage.includes('visit') || lowerMessage.includes('explore')) {
    return knowledgeBase.tourism;
  }
  if (lowerMessage.includes('network') || lowerMessage.includes('connect') || lowerMessage.includes('professional')) {
    return knowledgeBase.networking;
  }
  if (lowerMessage.includes('rental') || lowerMessage.includes('apartment') || lowerMessage.includes('room') || lowerMessage.includes('housing')) {
    return knowledgeBase.rentals;
  }
  if (lowerMessage.includes('invest') || lowerMessage.includes('opportunity') || lowerMessage.includes('project')) {
    return knowledgeBase.investments;
  }
  if (lowerMessage.includes('donat') || lowerMessage.includes('charity') || lowerMessage.includes('cause') || lowerMessage.includes('support')) {
    return knowledgeBase.donations;
  }
  if (lowerMessage.includes('partner') || lowerMessage.includes('alliance') || lowerMessage.includes('corporation') || lowerMessage.includes('institution')) {
    return knowledgeBase.partners;
  }
  if (lowerMessage.includes('register') || lowerMessage.includes('sign up') || lowerMessage.includes('create account') || lowerMessage.includes('join')) {
    return knowledgeBase.registration;
  }
  if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('fee') || lowerMessage.includes('free') || lowerMessage.includes('pay')) {
    return knowledgeBase.cost;
  }
  if (lowerMessage.includes('location') || lowerMessage.includes('calgary') || lowerMessage.includes('canada') || lowerMessage.includes('where')) {
    return knowledgeBase.location;
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
    return knowledgeBase.contact;
  }
  if (lowerMessage.includes('thank')) {
    return "You're welcome! If you have any other questions, feel free to ask. I'm here to help!";
  }
  
  return knowledgeBase.default;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Canada One Click. I'm here to help you learn about our platform. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botResponse: Message = {
      id: messages.length + 2,
      text: getResponse(inputValue),
      isBot: true,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-accent shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[500px] max-w-[calc(100vw-48px)] max-h-[calc(100vh-100px)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-accent px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Canada One Click</h3>
                  <p className="text-xs text-white/80">AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 ${message.isBot ? '' : 'flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.isBot ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                  }`}>
                    {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isBot 
                      ? 'bg-secondary text-foreground rounded-tl-sm' 
                      : 'bg-primary text-primary-foreground rounded-tr-sm'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-secondary/50"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
