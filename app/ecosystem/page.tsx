export const metadata = {
  title: 'Ecosystem | S-UXE\'s',
  description: 'Learn how existing UX evaluation tools participate in the S-UXE\'s ecosystem through coordination, integration, and shared workflows without being replaced.',
}

export default function EcosystemPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Ecosystem</h1>

        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              The S-UXE&apos;s ecosystem is designed to connect and enhance existing UX evaluation 
              tools rather than replace them. We recognize that the diversity of tools in the field 
              reflects different evaluation needs, methodological approaches, and specialized 
              capabilities. The ecosystem provides the infrastructure for these tools to work 
              together, share data, and coordinate workflows while preserving their unique strengths.
            </p>
          </div>
        </section>

        {/* Participation Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Tools Participate</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              Participation in the S-UXE&apos;s ecosystem does not require tools to change their 
              core functionality or abandon their distinctive features. Instead, tools can participate 
              through several mechanisms:
            </p>

            <div className="space-y-8 mt-8">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Shared Data Formats</h3>
                <p className="text-lg text-gray-700 leading-8">
                  Tools can adopt or support common data exchange formats that allow evaluation 
                  results, user feedback, and usability metrics to be shared across tools. These 
                  formats are designed to be extensible, allowing tools to preserve tool-specific 
                  data while enabling interoperability.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integration Protocols</h3>
                <p className="text-lg text-gray-700 leading-8">
                  The ecosystem provides standardized protocols for tool-to-tool communication, 
                  allowing tools to trigger each other, pass data seamlessly, and coordinate 
                  workflows. These protocols respect tool autonomy while enabling collaboration.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Metadata Standards</h3>
                <p className="text-lg text-gray-700 leading-8">
                  Common metadata schemas help tools describe their capabilities, evaluation 
                  contexts, and result formats in ways that other tools and researchers can 
                  understand and utilize.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow Orchestration</h3>
                <p className="text-lg text-gray-700 leading-8">
                  Researchers can combine multiple tools in coordinated evaluation workflows, 
                  leveraging the strengths of each tool while maintaining data consistency and 
                  methodological rigor across the workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coordination Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Coordination</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              When tools participate in the ecosystem, they gain several advantages without 
              sacrificing their identity or functionality:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg leading-8">
              <li>
                <strong>Enhanced Value:</strong> Tools become more useful when they can work with 
                other tools in the researcher&apos;s toolkit, rather than requiring researchers to 
                choose between incompatible options.
              </li>
              <li>
                <strong>Broader Adoption:</strong> Researchers are more likely to adopt tools that 
                integrate well with their existing workflows and other tools they use.
              </li>
              <li>
                <strong>Data Portability:</strong> Evaluation data created in one tool can be 
                utilized by other tools, protecting researchers&apos; investments in data collection 
                and enabling longitudinal and cross-method analysis.
              </li>
              <li>
                <strong>Community Support:</strong> Tools benefit from ecosystem-level documentation, 
                standards alignment, and community resources that support sustainability.
              </li>
              <li>
                <strong>Methodological Rigor:</strong> Integration with ecosystem standards helps 
                ensure that tools maintain alignment with established evaluation frameworks and 
                international standards.
              </li>
            </ul>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Shared Workflows</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              The ecosystem enables researchers to construct evaluation workflows that combine 
              multiple tools and methodologies:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Workflow: Multi-Method Evaluation</h3>
              <ol className="list-decimal pl-6 space-y-2 text-lg leading-8">
                <li>A usability testing tool captures task performance data and user feedback.</li>
                <li>Results are exported in the ecosystem&apos;s shared format.</li>
                <li>A heuristic evaluation tool imports the same interface description and aligns 
                    its findings with the usability test results.</li>
                <li>An accessibility evaluation tool checks the interface against WCAG criteria 
                    and contributes its findings.</li>
                <li>A synthesis tool aggregates results across all three evaluation methods, 
                    identifying patterns and providing a comprehensive assessment.</li>
                <li>All results are stored in a format that can be referenced in future studies 
                    and shared with other researchers.</li>
              </ol>
            </div>

            <p className="text-lg leading-8 mt-6">
              This kind of integrated workflow would be difficult or impossible without ecosystem 
              coordination, yet it respects each tool&apos;s specialized capabilities and 
              methodological approach.
            </p>
          </div>
        </section>

        {/* Sustainability */}
        <section className="bg-primary-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ecosystem Sustainability</h2>
          <p className="text-lg text-gray-700 leading-8">
            By participating in the ecosystem, tools contribute to and benefit from a sustainable 
            infrastructure. The ecosystem&apos;s governance model ensures that technical standards 
            evolve in response to community needs, that documentation and resources are maintained, 
            and that the overall ecosystem remains viable and useful over the long term. This 
            sustainability benefits all participants, from individual tool developers to large 
            research institutions.
          </p>
        </section>
      </div>
    </div>
  )
}

