import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'Is registration free?',
    answer: 'Yes! Creating an account on Canada One Click is completely free. You can explore the platform, search for services, and connect with the community at no cost. Premium features are available for businesses looking for enhanced visibility.',
    icon: '🆓',
  },
  {
    question: 'Can I list my business?',
    answer: 'Absolutely! Business owners can create a professional profile to showcase their services. Our platform offers various listing tiers, from basic free listings to premium packages with enhanced visibility and features.',
    icon: '🏢',
  },
  {
    question: 'How does the smart search work?',
    answer: 'Our smart search uses advanced algorithms to match your queries with the most relevant services, jobs, events, and opportunities. The search considers keywords, location, user ratings, and relevance to provide you with the best results.',
    icon: '🔍',
  },
  {
    question: 'Who can invest in projects?',
    answer: 'The Investment module is open to verified users who meet the eligibility criteria. We provide transparent information about each opportunity, allowing potential investors to make informed decisions while connecting directly with project owners.',
    icon: '💰',
  },
  {
    question: 'Is the platform available across Canada?',
    answer: "Yes! While we started with a primary focus on Calgary, Canada One Click is expanding nationwide. We're continuously adding services, businesses, and opportunities from cities across Canada to serve the entire Canadian community.",
    icon: '🇨🇦',
  },
  {
    question: 'How do I become a volunteer?',
    answer: 'You can apply through our Volunteer section on this page. Fill in your details, choose your area of interest and availability, and our team will get in touch with you to coordinate your participation.',
    icon: '🤝',
  },
  {
    question: 'Can I post events on the platform?',
    answer: 'Yes! Registered users and businesses can post community, cultural, and professional events. Our Events module helps you reach the right audience and manage RSVPs effectively.',
    icon: '📅',
  },
  {
    question: 'How are businesses verified?',
    answer: 'We have a verification process that includes checking business credentials, reviews from the community, and confirming contact information. Verified businesses receive a trust badge on their profile.',
    icon: '✅',
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
            Everything you need to know about Canada One Click. Can't find your answer? Reach out to us directly.
          </p>
        </motion.div>

        {/* FAQ Grid - Two columns on desktop */}
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.slice(0, 4).map((faq, index) => (
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
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground font-medium gap-3">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{faq.icon}</span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.slice(4).map((faq, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index + 4}`}
                  className="card-elevated rounded-xl px-6 border-border/50 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground font-medium gap-3">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{faq.icon}</span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12 p-8 rounded-2xl card-elevated border border-border/50 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">Our team is ready to help you with any questions about the platform.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Mail className="mr-2 w-4 h-4" />
              Contact Us
            </Button>
            <Button variant="outline" className="border-border">
              <MessageCircle className="mr-2 w-4 h-4" />
              Live Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
