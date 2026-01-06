import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is registration free?',
    answer: 'Yes! Creating an account on Canada One Click is completely free. You can explore the platform, search for services, and connect with the community at no cost. Premium features are available for businesses looking for enhanced visibility.',
  },
  {
    question: 'Can I list my business?',
    answer: 'Absolutely! Business owners can create a professional profile to showcase their services. Our platform offers various listing tiers, from basic free listings to premium packages with enhanced visibility and features.',
  },
  {
    question: 'How does the smart search work?',
    answer: 'Our smart search uses advanced algorithms to match your queries with the most relevant services, jobs, events, and opportunities. The search considers keywords, location, user ratings, and relevance to provide you with the best results.',
  },
  {
    question: 'Who can invest in projects?',
    answer: 'The Investment module is open to verified users who meet the eligibility criteria. We provide transparent information about each opportunity, allowing potential investors to make informed decisions while connecting directly with project owners.',
  },
  {
    question: 'Is the platform available across Canada?',
    answer: 'Yes! While we started with a primary focus on Calgary, Canada One Click is expanding nationwide. We\'re continuously adding services, businesses, and opportunities from cities across Canada to serve the entire Canadian community.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 network-bg opacity-30" />
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Canada One Click.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="card-elevated rounded-xl px-6 border-border/50 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
