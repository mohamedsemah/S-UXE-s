export const metadata = {
  title: 'Governance | S-UXE\'s',
  description: 'Learn about the transparent, community-driven governance model of the S-UXE\'s ecosystem, including sustainability mechanisms, standards alignment processes, and equity policies.',
}

export default function GovernancePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Governance</h1>

        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              The S-UXE&apos;s ecosystem is governed through transparent, community-driven 
              processes that prioritize long-term sustainability, methodological rigor, and 
              equitable participation. Our governance model recognizes that the ecosystem&apos;s 
              success depends on the trust, collaboration, and diverse perspectives of its 
              community members.
            </p>
          </div>
        </section>

        {/* Governance Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Governance Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-700 leading-relaxed">
                All governance decisions, processes, and discussions are conducted openly, with 
                documentation publicly accessible. Community members can understand how decisions 
                are made and participate in shaping ecosystem direction.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-Driven</h3>
              <p className="text-gray-700 leading-relaxed">
                Governance reflects the collective needs and expertise of the ecosystem 
                community. Decision-making processes emphasize consensus-building and input 
                from diverse stakeholders, including researchers, developers, educators, and 
                practitioners.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-700 leading-relaxed">
                Governance mechanisms prioritize the long-term viability of the ecosystem, 
                ensuring that standards, infrastructure, and community resources are maintained 
                and evolved over time, beyond any individual project or funding cycle.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standards Alignment</h3>
              <p className="text-gray-700 leading-relaxed">
                Governance processes ensure that ecosystem standards and practices remain aligned 
                with international standards (ISO, WCAG) and established evaluation frameworks, 
                while remaining flexible enough to accommodate innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Decision-Making Processes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Decision-Making Processes</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              Ecosystem governance operates through several interconnected processes designed to 
              balance efficiency with inclusive participation:
            </p>

            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Standards Development</h3>
                <p className="text-lg text-gray-700 leading-8 mb-3">
                  Proposed standards, data formats, and integration protocols follow a structured 
                  review process:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-lg leading-8">
                  <li>Initial proposal with use cases and rationale</li>
                  <li>Community review period with public comment</li>
                  <li>Revision based on feedback</li>
                  <li>Technical review by relevant experts</li>
                  <li>Approval through consensus or designated decision-making body</li>
                  <li>Documentation and implementation support</li>
                </ol>
                <p className="text-lg text-gray-700 leading-8 mt-4">
                  This process ensures that standards reflect real needs, are technically sound, 
                  and have broad community support before adoption.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ecosystem Direction</h3>
                <p className="text-lg text-gray-700 leading-8">
                  Major strategic decisions about ecosystem priorities, resource allocation, and 
                  long-term vision are made through community-wide discussions, structured 
                  decision-making forums, and periodic planning cycles. These processes ensure 
                  that ecosystem evolution reflects the collective needs and aspirations of the 
                  community while maintaining focus on core mission and sustainability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Contributions</h3>
                <p className="text-lg text-gray-700 leading-8">
                  Technical contributions, including code, documentation, and tool integrations, 
                  follow open-source best practices with peer review. Decisions about codebase 
                  changes, architecture, and technical standards are made through transparent 
                  review processes that balance technical merit, ecosystem alignment, and 
                  maintainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Mechanisms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainability Mechanisms</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              Long-term sustainability is central to ecosystem governance. Several mechanisms 
              ensure the ecosystem remains viable and useful beyond initial project funding:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Distributed Stewardship</h3>
              <p className="text-lg text-gray-700 leading-8">
                Rather than centralizing control in a single institution, governance responsibilities 
                are distributed across community members and institutions. This reduces dependency 
                on any single organization and enables the ecosystem to continue functioning even 
                as individual participants&apos; involvement evolves over time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation and Knowledge Preservation</h3>
              <p className="text-lg text-gray-700 leading-8">
                Comprehensive documentation, including governance processes, technical specifications, 
                and community knowledge, ensures that ecosystem knowledge is preserved and accessible. 
                This enables new participants to contribute effectively and allows the ecosystem to 
                function independently of any specific individuals.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standards Stability and Evolution</h3>
              <p className="text-lg text-gray-700 leading-8">
                Governance processes balance the need for stable, reliable standards with the 
                flexibility to evolve in response to changing needs and new methodologies. Versioning 
                and migration strategies ensure that standards can improve without breaking existing 
                tools and workflows.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resource Stewardship</h3>
              <p className="text-lg text-gray-700 leading-8">
                Governance includes mechanisms for maintaining shared resources, including 
                infrastructure, documentation platforms, and community communication channels. 
                These resources are managed to ensure continued availability and accessibility 
                for all ecosystem participants.
              </p>
            </div>
          </div>
        </section>

        {/* Equity and Inclusion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Equity and Inclusion</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              Equity and inclusion are fundamental governance values. The ecosystem strives to 
              ensure that all participants can contribute meaningfully and benefit from ecosystem 
              resources, regardless of institutional affiliation, career stage, geographic location, 
              or background.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inclusive Participation</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
                <li>Governance processes are designed to be accessible to participants at all 
                    career stages and with varying time commitments.</li>
                <li>Multiple participation pathways ensure that different types of contributions 
                    (technical, methodological, educational) are recognized and valued.</li>
                <li>Communication channels and documentation are designed for accessibility and 
                    international participation.</li>
                <li>Mentorship and onboarding processes help newcomers participate effectively.</li>
              </ul>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Barrier Reduction</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
                <li>Tools and infrastructure are designed to minimize technical barriers to 
                    participation, including considerations for resource-constrained environments.</li>
                <li>Documentation and resources are freely available and do not require 
                    institutional subscriptions or paid access.</li>
                <li>Governance processes recognize and accommodate different communication styles, 
                    languages, and cultural contexts.</li>
                <li>Community norms emphasize respect, constructive engagement, and recognition 
                    of diverse expertise and contributions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accountability */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accountability and Review</h2>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            Ecosystem governance includes mechanisms for accountability and continuous improvement:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg leading-8">
            <li>Regular reviews of governance processes to ensure they remain effective and inclusive</li>
            <li>Transparent reporting on ecosystem activities, decisions, and resource utilization</li>
            <li>Community feedback mechanisms that enable participants to raise concerns and 
                suggest improvements</li>
            <li>Evaluation of ecosystem outcomes and impact, with findings used to guide 
                future governance decisions</li>
          </ul>
          <p className="text-lg text-gray-700 leading-8 mt-6">
            By maintaining transparent, inclusive, and sustainable governance, the S-UXE&apos;s 
            ecosystem aims to serve as a model for how open-source research ecosystems can 
            effectively balance innovation, standards alignment, and long-term community stewardship.
          </p>
        </section>
      </div>
    </div>
  )
}

