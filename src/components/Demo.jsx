import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

function Demo() {
  const [feedback, setFeedback] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const analyzeSentiment = (text) => {
    setFeedback(text);
    // Simple demo sentiment analysis
    const positiveWords = ['great', 'good', 'excellent', 'amazing', 'love', 'happy'];
    const negativeWords = ['bad', 'poor', 'terrible', 'hate', 'awful', 'disappointed'];
    
    const words = text.toLowerCase().split(' ');
    const positiveCount = words.filter(word => positiveWords.includes(word)).length;
    const negativeCount = words.filter(word => negativeWords.includes(word)).length;

    if (!text) {
      setSentiment(null);
    } else if (positiveCount > negativeCount) {
      setSentiment('positive');
    } else if (negativeCount > positiveCount) {
      setSentiment('negative');
    } else {
      setSentiment('neutral');
    }
  };

  return (
    <section className="section-padding bg-black/30" id="demo">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-light mb-8 gradient-text text-center">
          Try Our Sentiment Analysis
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-light text-primary mb-6">Real-time Demo</h3>
            <div className="space-y-4">
              <textarea
                value={feedback}
                onChange={(e) => analyzeSentiment(e.target.value)}
                placeholder="Type or paste your feedback here..."
                className="w-full h-40 px-4 py-3 bg-white/5 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
              />
              {sentiment && (
                <div className="flex items-center gap-3 text-lg">
                  <span>Sentiment:</span>
                  {sentiment === 'positive' && <FaSmile className="w-6 h-6 text-green-400" />}
                  {sentiment === 'neutral' && <FaMeh className="w-6 h-6 text-yellow-400" />}
                  {sentiment === 'negative' && <FaFrown className="w-6 h-6 text-red-400" />}
                  <span className="capitalize">{sentiment}</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-light text-primary mb-6">Request Full Demo</h3>
            <p className="text-gray-300 mb-8">
              Experience the full power of our AI analytics with a personalized demo. See how InsightPulseAI can transform your feedback data into actionable insights.
            </p>
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <Button href="#" variant="primary" className="w-full justify-center">
                Request Full Demo
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Demo;