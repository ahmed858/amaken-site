'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function SupportChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
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
        <div className="fixed bottom-25 left-6 z-50" dir="rtl">
            {/* نافذة الشات */}
            {isOpen && (
                <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    {/* رأس الشات */}
                    <div className="bg-black  p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 " />
                            </div>

                            <div>
                                <h3 className="text-white font-semibold">خدمة العملاء</h3>
                                <p className="text-blue-100 text-xs">متصل الآن</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-black rounded-full p-1 transition-colors"
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
                                        : 'bg-black text-white rounded-tl-sm'
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-gray-500' : 'text-blue-100'
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
                                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-black-500 focus:ring-2 focus:ring-black-200 transition-all"
                            />
                            <button
                                onClick={handleSend}
                                className=" bg-black text-white rounded-full p-2 hover:bg-black-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="bg-black  text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
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