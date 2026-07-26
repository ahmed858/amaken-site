'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface SupportChatProps {
    color?: string;
}

export default function SupportChat({ color = "#000000" }: SupportChatProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // رسالة الترحيب
            setTimeout(() => {
                setMessages([
                    {
                        id: 1,
                        text: 'مرحباً! كيف يمكنني مساعدتك اليوم؟ 👋',
                        sender: 'bot',
                        time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
                    }
                ]);
            }, 300);
        }
    }, [isOpen]);

    const handleSend = () => {
        if (inputValue.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: inputValue,
                sender: 'user',
                time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([...messages, newMessage]);
            setInputValue('');

            // رد تلقائي من البوت
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: prev.length + 1,
                    text: 'شكراً لرسالتك! سيتواصل معك فريق الدعم قريباً.',
                    sender: 'bot',
                    time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
                }]);
            }, 1000);
        }
    };

    return (
        <div className="fixed bottom-24 right-6 z-50">
            {/* نافذة الشات */}
            {isOpen && (
                <div className="fixed mb-4 w-80 bottom-24 right-25 z-10000 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    {/* رأس الشات */}
                    <div className="p-4 flex items-center justify-between" style={{ backgroundColor: color }}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 " style={{ color: color }} />
                            </div>

                            <div>
                                <h3 className="text-white font-semibold">خدمة العملاء</h3>
                                <p className="text-white/80 text-xs">متصل الآن</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-black/20 rounded-full p-1 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* منطقة الرسائل */}
                    <div className="h-96 overflow-y-auto p-4 bg-gray-50 space-y-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                            >
                                <div
                                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${message.sender === 'user'
                                        ? 'bg-white text-gray-800 rounded-tr-sm'
                                        : 'text-white rounded-tl-sm'
                                        }`}
                                    style={message.sender !== 'user' ? { backgroundColor: color } : {}}
                                >
                                    <p className="text-sm">{message.text}</p>
                                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-gray-500' : 'text-white/80'
                                        }`}>
                                        {message.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* منطقة الإدخال */}
                    <div className="p-4 bg-white border-t">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="اكتب رسالتك هنا..."
                                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 transition-all"
                                style={{
                                    borderColor: inputValue ? color : undefined,
                                    boxShadow: 'none' // Removed default ring for custom styling if needed, but simple border color usually enough or need custom focus style
                                }}
                            />
                            <button
                                onClick={handleSend}
                                className="text-white rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ backgroundColor: color }}
                                disabled={!inputValue.trim()}
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* زر الأيقونة */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                style={{ backgroundColor: color }}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                )}
            </button>
        </div>
    );
}
