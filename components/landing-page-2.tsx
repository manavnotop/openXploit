'use client'

import { Button } from '@/components/ui/button';
import { ArrowRight} from 'lucide-react';
import FeatureGrid from './feature-grid';

const LandingPage = () => {
     
  const features = [
    { title: 'Submit Repository', description: 'Enter your GitHub repository URL for scanning.', icon: '🗂️' },
    { title: 'Safe Environment Setup', description: 'Rebuilds your application in a secure container.', icon: '🛡️' },
    { title: 'Vulnerability Scanning - Penetration Testing', description: 'Using OpenVAS & Metasploit, Open-Source tools.', icon: '🔍' },
    { title: 'Interactive Report', description: 'Access a detailed security report on your dashboard.', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="spline_background.jpg" 
          alt="background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Container */}
      <div className="relative z-10 w-full px-14">
        <div className="flex items-center justify-center">
          <h1 className="text-[15vw] font-extrabold tracking-tighter flex items-center justify-center w-full">
            {/* First part - automatically aligned to right */}
            <span className="text-right flex-1" style={{ letterSpacing: '0.10em' }}>open</span>
            
            {/* Centered X */}
            <span className="text-center mx-0 pl-2  relative"  style={{ letterSpacing: '0.10em' }}>X </span>
            
            {/* Last part - automatically aligned to left */}
            <span className="text-left flex-1 " style={{ letterSpacing: '0.10em' }}>ploit</span>
          </h1>
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-16 text-center opacity-0 animate-fade-in">
            Protect. Analyze. Secure.
          </h2>

          <FeatureGrid features={features} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto opacity-0 translate-y-4 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8">Ready to secure your application?</h2>
            <Button 
                size="lg" 
                className="bg-white text-black hover:bg-zinc-200 transition-colors"
                onClick={() => window.location.href = '/trynow'}
            >
                Try Now
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(2rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s forwards;
        }

        .animate-slide-in {
          animation: slideIn 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;