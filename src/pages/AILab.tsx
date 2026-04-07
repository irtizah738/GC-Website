import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Volume2, 
  Video, 
  Upload, 
  Loader2, 
  BrainCircuit,
  MessageSquare,
  ChevronRight,
  Play,
  Download,
  AlertCircle,
  X
} from 'lucide-react';
import { GoogleGenAI, ThinkingLevel, Modality } from "@google/genai";
import Section from '../components/Section';
import { SectionReveal } from '../components/animations/SectionReveal';
import { InteractiveCard } from '../components/animations/InteractiveCard';
import { cn } from '../lib/utils';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  role: 'user' | 'model';
  text: string;
  thinking?: string;
};

type ModelType = 'gemini-3.1-pro-preview' | 'gemini-3-flash-preview' | 'gemini-3.1-flash-lite-preview';

export default function AILab() {
  const [activeTab, setActiveTab] = useState<'chat' | 'tts' | 'video'>('chat');

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>AI Lab | Gotham Coders</title>
        <meta name="description" content="Explore cutting-edge AI capabilities: High-thinking reasoning, Text-to-Speech, and Image-to-Video generation." />
      </Helmet>

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Research & Development // AI Lab
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 dark:text-white leading-[0.9] tracking-tighter">
            The <span className="text-zinc-400 italic font-light">Intelligence</span> Layer
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
            Experiment with our latest AI integrations. From complex reasoning to 
            multimodal generation, we're building the future of enterprise intelligence.
          </p>
        </div>
      </Section>

      {/* Tabs */}
      <div className="sticky top-20 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-4">
            {[
              { id: 'chat', name: 'Reasoning Chat', icon: MessageSquare },
              { id: 'tts', name: 'Text to Speech', icon: Volume2 },
              { id: 'video', name: 'Image to Video', icon: Video },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap pb-2 border-b-2",
                  activeTab === tab.id 
                    ? "text-zinc-900 dark:text-white border-zinc-900 dark:border-white" 
                    : "text-zinc-400 border-transparent hover:text-zinc-600 dark:hover:text-zinc-200"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'chat' && <ChatSection key="chat" />}
          {activeTab === 'tts' && <TTSSection key="tts" />}
          {activeTab === 'video' && <VideoSection key="video" />}
        </AnimatePresence>
      </main>
    </div>
  );
}

function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello. I am the Gotham Coders Reasoning Engine. How can I assist with your complex system architecture today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState<ModelType>('gemini-3.1-pro-preview');
  const [useHighThinking, setUseHighThinking] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: model,
        config: {
          systemInstruction: "You are a senior software architect at Gotham Coders. You specialize in mission-critical systems, distributed architectures, and high-performance engineering. Be precise, technical, and professional.",
          thinkingConfig: model === 'gemini-3.1-pro-preview' && useHighThinking 
            ? { thinkingLevel: ThinkingLevel.HIGH } 
            : undefined
        },
        history: history
      });

      const result = await chat.sendMessage({ message: input });
      
      const modelMessage: Message = { 
        role: 'model', 
        text: result.text,
        thinking: (result.candidates?.[0]?.content?.parts?.find(p => 'thought' in p) as any)?.thought
      };
      
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I encountered an error processing your request. Please ensure your API key is correctly configured." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-8"
    >
      {/* Sidebar Controls */}
      <div className="lg:col-span-1 space-y-6">
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Model Selection</label>
            <select 
              value={model}
              onChange={(e) => setModel(e.target.value as ModelType)}
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
            >
              <option value="gemini-3.1-pro-preview">Gemini 3.1 Pro (Complex)</option>
              <option value="gemini-3-flash-preview">Gemini 3 Flash (General)</option>
              <option value="gemini-3.1-flash-lite-preview">Gemini 3.1 Lite (Fast)</option>
            </select>
          </div>

          {model === 'gemini-3.1-pro-preview' && (
            <div className="flex items-center justify-between p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-tight">High Thinking</span>
              </div>
              <button 
                onClick={() => setUseHighThinking(!useHighThinking)}
                className={cn(
                  "w-10 h-5 rounded-full transition-colors relative",
                  useHighThinking ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-600"
                )}
              >
                <div className={cn(
                  "absolute top-1 w-3 h-3 bg-white rounded-full transition-all",
                  useHighThinking ? "left-6" : "left-1"
                )} />
              </button>
            </div>
          )}

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              High Thinking mode enables deep reasoning for architectural trade-offs and complex logic.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div className="lg:col-span-3 flex flex-col h-[600px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-white dark:text-zinc-900" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-tight">System Architect</h4>
              <p className="text-[10px] text-emerald-500 font-mono uppercase">Online // {model}</p>
            </div>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar"
        >
          {messages.map((msg, i) => (
            <div 
              key={i}
              className={cn(
                "flex gap-4 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                msg.role === 'user' ? "bg-zinc-100 dark:bg-zinc-800" : "bg-zinc-900 dark:bg-white"
              )}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-zinc-600" /> : <Bot className="w-4 h-4 text-white dark:text-zinc-900" />}
              </div>
              <div className="space-y-2">
                {msg.thinking && (
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 border-l-2 border-emerald-500 rounded-r-xl text-[10px] font-mono text-zinc-500 italic">
                    <p className="font-bold uppercase tracking-widest mb-1">Thinking Process:</p>
                    {msg.thinking}
                  </div>
                )}
                <div className={cn(
                  "p-4 rounded-2xl text-sm leading-relaxed",
                  msg.role === 'user' 
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-tr-none" 
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-tl-none border border-zinc-200 dark:border-zinc-800"
                )}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center animate-pulse">
                <Bot className="w-4 h-4 text-white dark:text-zinc-900" />
              </div>
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl rounded-tl-none border border-zinc-200 dark:border-zinc-800">
                <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about system architecture..."
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TTSSection() {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [voice, setVoice] = useState('Kore');

  const handleGenerate = async () => {
    if (!text.trim() || isGenerating) return;

    setIsGenerating(true);
    setAudioUrl(null);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: voice as any },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const binary = atob(base64Audio);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
      }
    } catch (error) {
      console.error("TTS Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <div className="p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-xl flex items-center justify-center">
              <Volume2 className="w-5 h-5 text-white dark:text-zinc-900" />
            </div>
            <h4 className="text-xl font-bold tracking-tight">Audio Synthesis</h4>
          </div>
          <select 
            value={voice}
            onChange={(e) => setVoice(e.target.value)}
            className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-widest focus:outline-none"
          >
            {['Puck', 'Charon', 'Kore', 'Fenrir', 'Zephyr'].map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to synthesize into high-fidelity audio..."
          className="w-full h-40 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white resize-none"
        />

        <div className="flex items-center justify-between">
          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !text.trim()}
            className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-sm hover:scale-105 transition-transform disabled:opacity-50 flex items-center gap-2"
          >
            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Generate Audio
          </button>

          {audioUrl && (
            <div className="flex items-center gap-4">
              <audio src={audioUrl} controls className="h-10 rounded-full" />
              <a 
                href={audioUrl} 
                download="synthesis.wav"
                className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InteractiveCard className="p-6 space-y-4">
          <h5 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Use Case: Training</h5>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Generate voiceovers for system documentation and training modules automatically.
          </p>
        </InteractiveCard>
        <InteractiveCard className="p-6 space-y-4">
          <h5 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Use Case: Accessibility</h5>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Provide audio versions of complex technical reports for better accessibility.
          </p>
        </InteractiveCard>
      </div>
    </motion.div>
  );
}

function VideoSection() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setVideoUrl(null);
    }
  };

  const handleGenerate = async () => {
    if (!file || isGenerating) return;

    setIsGenerating(true);
    setStatus('Initializing Veo Engine...');
    
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Data = (reader.result as string).split(',')[1];
        
        let operation = await (ai.models as any).generateVideos({
          model: 'veo-3.1-fast-generate-preview',
          prompt: 'Animate this architectural diagram into a flowing data stream visualization, 4k, cinematic lighting, high detail',
          config: {
            numberOfVideos: 1,
            resolution: '1080p',
            aspectRatio: aspectRatio,
            inputImage: {
              inlineData: {
                data: base64Data,
                mimeType: file.type
              }
            }
          }
        });

        while (!operation.done) {
          setStatus('Processing frames... This may take a few minutes.');
          await new Promise(resolve => setTimeout(resolve, 10000));
          operation = await (ai.models as any).getOperation(operation.name);
        }

        if (operation.response?.videos?.[0]?.uri) {
          setVideoUrl(operation.response.videos[0].uri);
          setStatus('Generation Complete.');
        }
      };
    } catch (error) {
      console.error("Video Error:", error);
      setStatus('Generation Failed. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Area */}
        <div className="p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-xl flex items-center justify-center">
              <Video className="w-5 h-5 text-white dark:text-zinc-900" />
            </div>
            <h4 className="text-xl font-bold tracking-tight">Image to Video</h4>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Aspect Ratio</label>
            <div className="flex gap-4">
              {['16:9', '9:16'].map(ratio => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio as any)}
                  className={cn(
                    "flex-1 py-2 rounded-lg border text-xs font-bold transition-all",
                    aspectRatio === ratio 
                      ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white" 
                      : "bg-transparent border-zinc-200 dark:border-zinc-800 text-zinc-500"
                  )}
                >
                  {ratio === '16:9' ? 'Landscape (16:9)' : 'Portrait (9:16)'}
                </button>
              ))}
            </div>
          </div>

          <div 
            className={cn(
              "relative aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center overflow-hidden transition-colors",
              previewUrl ? "border-zinc-900 dark:border-white" : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
            )}
          >
            {previewUrl ? (
              <>
                <img src={previewUrl} className="w-full h-full object-cover" alt="Preview" />
                <button 
                  onClick={() => {setFile(null); setPreviewUrl(null);}}
                  className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/70"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <label className="cursor-pointer flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-zinc-400" />
                <span className="text-xs text-zinc-500">Upload architectural diagram or photo</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            )}
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !file}
            className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-sm hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            Animate with Veo
          </button>

          {status && (
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 justify-center">
              <ChevronRight className="w-3 h-3" />
              {status}
            </div>
          )}
        </div>

        {/* Result Area */}
        <div className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-zinc opacity-5 -z-10" />
          
          {videoUrl ? (
            <div className="w-full space-y-6">
              <div className={cn(
                "w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800",
                aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[9/16] max-h-[500px] mx-auto'
              )}>
                <video src={videoUrl} controls autoPlay loop className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-center">
                <a 
                  href={videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                  <Download className="w-4 h-4" />
                  Download Video
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto">
                <Play className="w-6 h-6 text-zinc-300" />
              </div>
              <p className="text-sm text-zinc-400 font-light">Generated video will appear here</p>
            </div>
          )}

          {isGenerating && (
            <div className="absolute inset-0 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-sm flex flex-col items-center justify-center space-y-4 z-10">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-zinc-200 dark:border-zinc-800 rounded-full" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-zinc-900 dark:border-white border-t-transparent rounded-full animate-spin" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] animate-pulse">Veo is dreaming...</p>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-start gap-4">
        <AlertCircle className="w-5 h-5 text-zinc-400 shrink-0" />
        <p className="text-xs text-zinc-500 leading-relaxed">
          Veo generation is computationally intensive. Please stay on this page while the engine processes your request. 
          Typical generation time is 2-4 minutes for a high-quality 1080p clip.
        </p>
      </div>
    </motion.div>
  );
}
