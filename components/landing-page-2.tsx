'use client'

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Shield, Container, FileText } from 'lucide-react';
import FeatureGrid from './feature-grid';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      title: "Repository Analysis",
      icon: <Github className="h-8 w-8" />,
      description: "Enter your GitHub repository URL to begin the security assessment process"
    },
    {
      title: "Containerized Rebuild",
      icon: <Container className="h-8 w-8" />,
      description: "We safely rebuild your application in an isolated Docker container"
    },
    {
      title: "Security Assessment",
      icon: <Shield className="h-8 w-8" />,
      description: "Comprehensive scan using OpenVAS and Metasploit following OWASP Top 10"
    },
    {
      title: "Interactive Report",
      icon: <FileText className="h-8 w-8" />,
      description: "Detailed vulnerability report with interactive visualizations and metrics"
    }
  ];

    const features = [
        { title: 'Submit Repository', description: 'Enter your GitHub repository URL for scanning.', icon: '🗂️' },
        { title: 'Safe Environment Setup', description: 'Docker rebuilds in a secure container.', icon: '🛡️' },
        { title: 'Vulnerability Scanning', description: 'Using OpenVAS & Metasploit, covering OWASP Top 10.', icon: '🔍' },
        { title: 'Interactive Report', description: 'Access a detailed security report on your dashboard.', icon: '📊' },
    ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Model Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64">
            {/* Replace this div with your Spline component */}
            <div className="w-full h-full rounded-full border-2 border-white opacity-50 animate-pulse" />
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[15vw] font-bold z-10 opacity-0 tracking-tighter text-center animate-fade-in whitespace-nowrap">
            openXploit
          </h1>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center opacity-0 animate-fade-in">
            Secure. Analyze. Protect.
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
            onClick={() => window.location.href = '/try-now'}
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