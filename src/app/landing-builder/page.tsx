'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowRight, Layout, TrendingUp, Target, Moon, Sun, Eye, Download, Share2 } from 'lucide-react'

export default function LandingBuilderPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [industry, setIndustry] = useState('')
  const [goal, setGoal] = useState('')
  const [targetAudience, setTargetAudience] = useState('')
  const [brandColors, setBrandColors] = useState({ primary: '#3B82F6', secondary: '#10B981' })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPage, setGeneratedPage] = useState<any>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const industries = [
    'SaaS/Software',
    'E-commerce', 
    'Consulting',
    'Real Estate',
    'Healthcare',
    'Education',
    'Finance',
    'Marketing Agency',
    'Non-profit',
    'Restaurant/Food'
  ]

  const goals = {
    'SaaS/Software': ['Start Free Trial', 'Generate Leads', 'Download App', 'Request Demo'],
    'E-commerce': ['Sell Product', 'Collect Emails', 'Drive Traffic', 'Promote Sale'],
    'Consulting': ['Book Appointments', 'Generate Leads', 'Download Guide', 'Request Quote'],
    'Real Estate': ['Generate Leads', 'Book Appointments', 'Download Market Report', 'Schedule Tour'],
    'Healthcare': ['Book Appointments', 'Generate Leads', 'Download Guide', 'Contact Info'],
    'Education': ['Enroll Students', 'Generate Leads', 'Download Brochure', 'Schedule Tour'],
    'Finance': ['Generate Leads', 'Book Consultation', 'Download Guide', 'Apply Now'],
    'Marketing Agency': ['Generate Leads', 'Book Consultation', 'Download Case Study', 'Request Quote'],
    'Non-profit': ['Collect Donations', 'Generate Volunteers', 'Sign Petition', 'Download Report'],
    'Restaurant/Food': ['Make Reservation', 'Order Online', 'Join Loyalty', 'Catering Quote']
  }

  const handleGenerate = async () => {
    if (!industry || !goal) {
      alert('Please select both industry and goal')
      return
    }

    setIsGenerating(true)
    
    try {
      // In a real implementation, this would call the API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockPage = {
        id: `page_${Date.now()}`,
        elements: [
          {
            id: '1',
            type: 'header',
            content: getHeadlineForIndustryGoal(industry, goal),
            styles: {
              fontSize: '3rem',
              fontWeight: 'bold',
              textAlign: 'center',
              textColor: '#1F2937',
              padding: '4rem 2rem 2rem 2rem'
            }
          },
          {
            id: '2',
            type: 'text', 
            content: getSubheadlineForIndustryGoal(industry, goal),
            styles: {
              fontSize: '1.25rem',
              textAlign: 'center',
              textColor: '#6B7280',
              padding: '0 2rem 2rem 2rem'
            }
          },
          {
            id: '3',
            type: 'button',
            content: getCtaForGoal(goal),
            styles: {
              backgroundColor: brandColors.primary,
              textColor: '#FFFFFF',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textAlign: 'center',
              margin: '0 auto 3rem auto',
              width: 'fit-content'
            }
          }
        ],
        conversionOptimizations: getOptimizationTips(industry, goal),
        estimatedConversionRate: getConversionRate(industry, goal),
        createdAt: new Date().toISOString()
      }
      
      setGeneratedPage(mockPage)
    } catch (error) {
      alert('Error generating landing page. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const getHeadlineForIndustryGoal = (industry: string, goal: string) => {
    const headlines = {
      'SaaS/Software': {
        'Start Free Trial': 'Transform Your Business with Cutting-Edge AI Technology',
        'Generate Leads': 'Download Our Free Guide: 10 Ways to Automate Your Business',
        'Download App': 'The All-in-One App Your Business Has Been Waiting For',
        'Request Demo': 'See How Industry Leaders Are Revolutionizing Their Workflows'
      },
      'E-commerce': {
        'Sell Product': 'Revolutionary Product - Now 40% Off Limited Time',
        'Collect Emails': 'Get 20% Off Your First Order',
        'Drive Traffic': 'Discover Our Premium Collection',
        'Promote Sale': 'Biggest Sale of the Year - Up to 70% Off'
      },
      'Consulting': {
        'Book Appointments': 'Double Your Revenue in 90 Days - Guaranteed',
        'Generate Leads': 'Free Business Assessment: Discover Your Hidden Profit Potential',
        'Download Guide': 'The Ultimate Guide to Business Growth in 2024',
        'Request Quote': 'Get Your Custom Business Solution Quote'
      }
    }

    return headlines[industry as keyof typeof headlines]?.[goal as keyof any] || 
           `Professional ${industry} Solutions That Deliver Results`
  }

  const getSubheadlineForIndustryGoal = (industry: string, goal: string) => {
    return `Join thousands of ${industry.toLowerCase()} professionals who trust our proven solutions to achieve their business goals. Get started today and see results in as little as 24 hours.`
  }

  const getCtaForGoal = (goal: string) => {
    const ctas = {
      'Start Free Trial': 'Start Your Free 14-Day Trial',
      'Generate Leads': 'Get Your Free Guide Now',
      'Download App': 'Download Now - Free',
      'Request Demo': 'Schedule Free Demo',
      'Sell Product': 'Order Now - Limited Time',
      'Collect Emails': 'Claim Your 20% Discount',
      'Book Appointments': 'Book Your Free Strategy Call',
      'Download Guide': 'Download Free Guide'
    }
    return ctas[goal as keyof typeof ctas] || 'Get Started Today'
  }

  const getOptimizationTips = (industry: string, goal: string) => {
    return [
      'Remove navigation menu to reduce distractions',
      'Add customer testimonials with photos for credibility',
      'Include money-back guarantee to reduce risk',
      'Use contrasting colors for call-to-action buttons',
      'Optimize for mobile devices (60% of traffic)',
      'Add security badges and trust signals',
      'Include urgency elements (limited time, stock)',
      'Use clear, benefit-focused headlines'
    ]
  }

  const getConversionRate = (industry: string, goal: string) => {
    const rates = {
      'SaaS/Software': '8.5%',
      'E-commerce': '3.2%', 
      'Consulting': '15.7%',
      'Real Estate': '18.3%',
      'Healthcare': '12.6%'
    }
    return rates[industry as keyof typeof rates] || '10.2%'
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/DCL-logo.png"
                alt="DevCraft Labs Logo"
                width={54}
                height={32}
              />
              <div>
                <span className="text-xl font-semibold text-neutral-900 dark:text-white">DevCraft Labs</span>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Landing Page Builder</div>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium">
                ← Back to Home
              </Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <Layout className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            AI Landing Page Builder
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
            Create high-converting landing pages in minutes with AI-powered optimization, industry-specific templates, and conversion rate predictions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">+60% Conversion</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">AI-optimized pages that convert visitors to customers</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Load in &lt;2s</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Lightning-fast pages optimized for performance</p>
            </div>
            <div className="text-center">
              <Layout className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">50+ Templates</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Industry-specific templates for every business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Build Your Landing Page
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                  Industry *
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select industry</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                  Goal *
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={!industry}
                >
                  <option value="">Select goal</option>
                  {industry && goals[industry as keyof typeof goals]?.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="e.g., Small business owners, Marketing managers..."
                  className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                  Primary Brand Color
                </label>
                <div className="flex space-x-3">
                  <input
                    type="color"
                    value={brandColors.primary}
                    onChange={(e) => setBrandColors({...brandColors, primary: e.target.value})}
                    className="w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg"
                  />
                  <input
                    type="text"
                    value={brandColors.primary}
                    onChange={(e) => setBrandColors({...brandColors, primary: e.target.value})}
                    className="flex-1 px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !industry || !goal}
              className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Building Landing Page...</span>
                </>
              ) : (
                <>
                  <Layout className="w-4 h-4" />
                  <span>Build Landing Page</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Generated Landing Page Preview */}
      {generatedPage && (
        <section className="py-16 bg-neutral-50 dark:bg-neutral-800/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Preview */}
              <div>
                <div className="bg-white rounded-xl border border-neutral-200 shadow-lg overflow-hidden">
                  <div className="bg-neutral-100 px-4 py-2 border-b flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 text-center text-sm text-neutral-600">Landing Page Preview</div>
                  </div>
                  
                  <div className="p-8 text-center bg-white">
                    {generatedPage.elements.map((element: any) => {
                      if (element.type === 'header') {
                        return (
                          <h1 key={element.id} className="text-4xl font-bold text-neutral-900 mb-6">
                            {element.content}
                          </h1>
                        )
                      }
                      if (element.type === 'text') {
                        return (
                          <p key={element.id} className="text-lg text-neutral-600 mb-8">
                            {element.content}
                          </p>
                        )
                      }
                      if (element.type === 'button') {
                        return (
                          <button 
                            key={element.id}
                            style={{ backgroundColor: element.styles.backgroundColor }}
                            className="px-8 py-4 text-white font-bold rounded-lg text-lg mb-8"
                          >
                            {element.content}
                          </button>
                        )
                      }
                      return null
                    })}
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">✓</div>
                        <div className="text-sm">Feature 1</div>
                      </div>
                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">✓</div>
                        <div className="text-sm">Feature 2</div>
                      </div>
                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">✓</div>
                        <div className="text-sm">Feature 3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics & Actions */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                    Performance Predictions
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{generatedPage.estimatedConversionRate}</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">Conversion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">A+</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">Performance Score</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                    Optimization Tips
                  </h3>
                  <ul className="space-y-2">
                    {generatedPage.conversionOptimizations.slice(0, 4).map((tip: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <span className="text-green-600">•</span>
                        <span className="text-neutral-600 dark:text-neutral-400">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <button className="w-full btn-primary inline-flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Full Preview</span>
                  </button>
                  <button className="w-full btn-secondary inline-flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download HTML</span>
                  </button>
                  <button className="w-full btn-secondary inline-flex items-center justify-center space-x-2">
                    <Share2 className="w-4 h-4" />
                    <span>Get Shareable Link</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build High-Converting Pages?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of marketers using DevCraft Labs to create landing pages that convert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-white inline-flex items-center space-x-2">
              <span>View Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline-white inline-flex items-center space-x-2">
              <span>Contact Sales</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}