export const metadata = {
  title: 'Vision & Standards | S-UXE\'s',
  description: 'Our vision for addressing fragmentation in UX evaluation and alignment with international standards including ISO 9241, WCAG 2.2, and established UX frameworks.',
}

export default function VisionPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Vision & Standards</h1>
        
        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Fragmentation Problem</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              The field of user experience evaluation is characterized by a rich diversity of tools, 
              methodologies, and frameworks. While this diversity reflects innovation and specialization, 
              it also creates significant challenges. Researchers and practitioners face fragmentation 
              that makes it difficult to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg leading-8">
              <li>Compare results across different evaluation methods and tools</li>
              <li>Integrate findings from multiple evaluation approaches</li>
              <li>Share data and workflows between research teams</li>
              <li>Build upon existing evaluation results in new studies</li>
              <li>Ensure methodological consistency and rigor</li>
              <li>Sustain tools and methodologies over time</li>
            </ul>
            <p className="text-lg leading-8">
              This fragmentation limits the cumulative progress of the field and creates barriers to 
              collaboration, reproducibility, and the advancement of UX evaluation knowledge.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              S-UXE&apos;s envisions an ecosystem where diverse UX evaluation tools and methodologies 
              work together seamlessly, where standards provide common ground without constraining 
              innovation, and where the community collectively sustains and evolves the evaluation 
              infrastructure. This vision is built on the principle that interoperability and 
              standardization should enhance, not replace, the specialized capabilities that make 
              individual tools valuable.
            </p>
          </div>
        </section>

        {/* Standards Alignment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Standards Alignment</h2>
          <p className="text-lg text-gray-700 mb-8 leading-8">
            The S-UXE&apos;s ecosystem is explicitly aligned with established international standards 
            and widely recognized frameworks in human-computer interaction and user experience evaluation:
          </p>

          <div className="space-y-12">
            {/* ISO 9241-210 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">ISO 9241-210: Human-Centered Design</h3>
              <p className="text-lg text-gray-700 leading-8 mb-3">
                The ecosystem supports the human-centered design process outlined in ISO 9241-210, 
                which emphasizes understanding users, their contexts, and their goals throughout the 
                design and evaluation lifecycle. Our framework enables evaluation activities that align 
                with the iterative, user-focused approach central to human-centered design.
              </p>
              <p className="text-base text-gray-600 italic">
                ISO 9241-210:2019 specifies requirements and recommendations for human-centered design 
                principles and activities throughout the lifecycle of computer-based interactive systems.
              </p>
            </div>

            {/* ISO 9241-11 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">ISO 9241-11: Usability</h3>
              <p className="text-lg text-gray-700 leading-8 mb-3">
                The ecosystem provides structures for capturing and sharing usability metrics that 
                align with the ISO 9241-11 definition of usability: the extent to which a product 
                can be used by specified users to achieve specified goals with effectiveness, 
                efficiency, and satisfaction in a specified context of use.
              </p>
              <p className="text-base text-gray-600 italic">
                ISO 9241-11:2018 defines usability and provides guidance on specifying and measuring 
                usability as part of the human-centered design process.
              </p>
            </div>

            {/* WCAG 2.2 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">WCAG 2.2: Web Content Accessibility Guidelines</h3>
              <p className="text-lg text-gray-700 leading-8 mb-3">
                For web-based interfaces and digital products, the ecosystem incorporates evaluation 
                criteria aligned with WCAG 2.2 at the AA level. This ensures that accessibility 
                evaluation is integrated into the broader UX evaluation framework, recognizing that 
                usability and accessibility are inseparable.
              </p>
              <p className="text-base text-gray-600 italic">
                WCAG 2.2 provides guidelines for making web content more accessible to people with 
                disabilities, organized around four principles: perceivable, operable, understandable, 
                and robust.
              </p>
            </div>

            {/* Nielsen's Heuristics */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nielsen&apos;s Usability Heuristics</h3>
              <p className="text-lg text-gray-700 leading-8 mb-3">
                The ecosystem recognizes Nielsen&apos;s ten usability heuristics as a foundational 
                framework for heuristic evaluation. These principles—from visibility of system status 
                to help and documentation—provide a common vocabulary and evaluation lens that the 
                ecosystem supports through interoperable evaluation data structures.
              </p>
              <p className="text-base text-gray-600 italic">
                Jakob Nielsen&apos;s usability heuristics provide a set of general principles for 
                interaction design, widely used in heuristic evaluation methods.
              </p>
            </div>

            {/* UX Honeycomb */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The UX Honeycomb</h3>
              <p className="text-lg text-gray-700 leading-8 mb-3">
                The ecosystem embraces the multidimensional view of user experience represented by 
                the UX Honeycomb, recognizing that effective design must be useful, usable, desirable, 
                findable, accessible, credible, and valuable. Evaluation frameworks within the ecosystem 
                can assess and integrate findings across these dimensions.
              </p>
              <p className="text-base text-gray-600 italic">
                Peter Morville&apos;s UX Honeycomb model provides a framework for understanding the 
                multiple facets that contribute to positive user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Standards in Practice</h2>
          <p className="text-lg text-gray-700 leading-8">
            Rather than imposing rigid compliance requirements, the S-UXE&apos;s ecosystem provides 
            mappings, data schemas, and integration patterns that allow tools and methodologies to 
            align with these standards while maintaining their unique approaches. This enables 
            researchers to choose appropriate evaluation methods while ensuring that results can be 
            understood, compared, and built upon within a standards-aware ecosystem.
          </p>
        </section>
      </div>
    </div>
  )
}

