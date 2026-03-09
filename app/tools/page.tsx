import Link from 'next/link'

export const metadata = {
  title: 'Tools | S-UXE\'s',
  description: 'Explore the collection of UX evaluation tools integrated into the S-UXE\'s ecosystem, including usability testing, heuristic evaluation, accessibility assessment, and analytics tools.',
}

// Tool data - in a real application, this could come from a database or API
const tools = [
  {
    name: 'Aesthetic Evaluator',
    category: 'Aesthetic Analysis',
    description: 'An AI-powered tool for evaluating the aesthetic quality of user interfaces using large language models. Analyzes visual design elements, layout composition, and overall aesthetic appeal to provide insights for design improvement.',
    icon: '🎨',
    url: 'https://aesthetic-evaluator.vercel.app',
  },
  {
    name: 'DF-InfoUI',
    category: 'Accessibility Intelligence',
    description: 'An adaptive multi-LLM agent for detecting and fixing accessibility issues in automotive infotainment user interfaces. Features one Brain Agent coordinating four specialized POUR Neuron Agents to ensure WCAG 2.2 compliance and enhance user experience in automotive interfaces.',
    icon: '♿',
    url: 'https://df-info-ui.vercel.app',
  },
  {
    name: 'UXTester',
    category: 'Usability Testing',
    description: 'A comprehensive tool for task-based usability testing and performance measurement. UXTester supports session recording, task completion tracking, and export of metrics aligned with ISO 9241-11 usability criteria.',
    icon: '📊',
  },
  {
    name: 'Heurix',
    category: 'Heuristic Evaluation',
    description: 'Facilitates systematic heuristic evaluation using Nielsen\'s usability heuristics and other established frameworks. Supports multi-evaluator workflows, issue tracking, and structured reporting with ecosystem integration.',
    icon: '✓',
  },
  {
    name: 'AccessiCheck',
    category: 'Accessibility',
    description: 'Comprehensive accessibility evaluation tool that combines automated WCAG 2.2 compliance checking with manual assessment workflows. Provides detailed reports and integration with usability testing results.',
    icon: '♿',
  },
  {
    name: 'FlowAnalyzer',
    category: 'Behavior Analysis',
    description: 'Analyzes user navigation patterns and interaction flows through heatmaps, click tracking, and session replay. Provides quantitative insights that complement qualitative evaluation methods in the ecosystem.',
    icon: '🔄',
  },
  {
    name: 'SurveyUX',
    category: 'Surveys & Questionnaires',
    description: 'Supports administration of standardized UX measurement instruments including SUS, UMUX, and custom questionnaires. Enables correlation of subjective feedback with objective performance metrics from other ecosystem tools.',
    icon: '📋',
  },
  {
    name: 'EvalHub',
    category: 'Integration Platform',
    description: 'Central hub for coordinating multi-tool evaluation workflows. Orchestrates data sharing between ecosystem tools, aggregates results, and provides unified reporting and visualization capabilities.',
    icon: '🔗',
  },
]

export default function ToolsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore the collection of UX evaluation tools integrated into the S-UXE&apos;s ecosystem. 
            Each tool maintains its unique capabilities while benefiting from ecosystem-wide interoperability.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool) => {
            const ToolContent = (
              <>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-4 text-3xl">
                    {tool.icon}
                  </div>
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                    <span className="text-sm text-primary-600 font-medium">{tool.category}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{tool.description}</p>
                {tool.url && (
                  <div className="mt-4">
                    <span className="text-sm text-primary-600 font-medium">
                      Visit tool →
                    </span>
                  </div>
                )}
              </>
            )

            return tool.url ? (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 block"
              >
                {ToolContent}
              </a>
            ) : (
              <div
                key={tool.name}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2"
              >
                {ToolContent}
              </div>
            )
          })}
        </div>

        {/* Additional Information Sections */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ecosystem Integration */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ecosystem Integration</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  All tools in the ecosystem implement standardized interfaces and data formats that enable interoperability:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Shared data schemas for evaluation results</li>
                  <li>Common metadata standards for tool capabilities</li>
                  <li>Integration APIs for tool-to-tool communication</li>
                  <li>Alignment with ISO 9241, WCAG 2.2, and established frameworks</li>
                </ul>
              </div>
            </section>

            {/* Contributing Tools */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contributing Tools</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Tool developers can integrate their tools into the ecosystem by implementing ecosystem 
                  standards and interfaces.
                </p>
                <p>
                  For more information about integrating tools into the ecosystem, see the{' '}
                  <Link href="/get-involved" className="text-primary-600 hover:text-primary-700 underline focus-visible">
                    Get Involved
                  </Link>{' '}
                  page or consult the ecosystem documentation.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
