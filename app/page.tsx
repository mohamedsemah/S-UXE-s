import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | S-UXE\'s',
  description: 'S-UXE\'s is a sustainable open-source ecosystem for user experience evaluation, addressing fragmentation through interoperability, standards alignment, and community governance.',
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
            S-UXE&apos;s
          </h1>
          <p className="text-xl text-gray-600 mb-4 font-semibold">
            Sustainable Open-Source Ecosystem for User Experience Evaluation
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            An NSF-funded research initiative addressing fragmentation in user experience evaluation 
            through an open, interoperable ecosystem that connects existing tools, aligns with 
            international standards, and enables sustainable, community-driven innovation.
          </p>
        </div>
      </div>

      {/* What is S-UXE's Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What is S-UXE&apos;s?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-8">
                S-UXE&apos;s is <strong>not a single tool or platform</strong>, but rather a 
                comprehensive <strong>ecosystem</strong> that brings together diverse user experience 
                evaluation tools and methodologies under a unified framework. Our mission is to 
                reduce fragmentation in the UX evaluation landscape while preserving the innovation 
                and specialization that individual tools provide.
              </p>
              <p className="text-lg leading-8">
                The ecosystem emphasizes three core principles:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg leading-8">
                <li>
                  <strong>Interoperability:</strong> Enabling tools to work together seamlessly 
                  through shared data formats, protocols, and integration patterns that respect 
                  existing tool architectures.
                </li>
                <li>
                  <strong>Sustainability:</strong> Establishing governance and technical mechanisms 
                  that ensure the ecosystem remains viable, adaptable, and useful for researchers 
                  and practitioners over the long term.
                </li>
                <li>
                  <strong>Community Governance:</strong> Creating transparent, inclusive processes 
                  for decision-making that reflect the diverse needs of researchers, educators, 
                  developers, and practitioners who use and contribute to UX evaluation tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ecosystem Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standards Alignment</h3>
              <p className="text-gray-700 leading-relaxed">
                Grounded in ISO 9241-210, ISO 9241-11, WCAG 2.2, and established UX evaluation 
                frameworks to ensure methodological rigor and international compatibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tool Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Existing tools participate without being replaced, enhancing their value through 
                coordination and shared workflows while maintaining their unique capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Open Governance</h3>
              <p className="text-gray-700 leading-relaxed">
                Transparent, community-driven processes that prioritize equity, inclusion, and 
                long-term sustainability of the ecosystem and its participants.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join the Ecosystem</h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-100 mb-8">
              Whether you are a researcher, educator, developer, or practitioner, there are 
              multiple ways to participate in and benefit from the S-UXE&apos;s ecosystem.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/get-involved"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 hover:bg-gray-100 focus-visible transition-colors"
              >
                Get Involved
              </Link>
              <Link
                href="/ecosystem"
                className="rounded-md border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-primary-700 focus-visible transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

