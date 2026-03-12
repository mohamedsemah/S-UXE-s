import Link from 'next/link'

export const metadata = {
  title: 'Tools | S-UXE\'s',
  description: 'Explore the collection of UX evaluation tools integrated into the S-UXE\'s ecosystem, including usability testing, heuristic evaluation, accessibility assessment, and analytics tools.',
}

// Tool data - in a real application, this could come from a database or API
const tools = [
  {
    name: 'LAART: An LLM-based Aesthetic Analysis and Recommendation Tool',
    category: 'UI Desirability',
    description:
      'LLM-powered aesthetic analysis and recommendation tool that evaluates the desirability of user interfaces. It jointly considers layout composition, typography, color usage, and alignment with project-specific design guidelines to surface aesthetic issues. The system then generates design-aware recommendations and alternative UI variants to help teams move from merely passable layouts to premium experiences.',
    icon: '🎨',
    url: 'https://aesthetic-evaluator.vercel.app',
  },
  {
    name: 'DF-InfoUI: An Adaptive Multi-Agent Tool for Detecting and Fixing Accessibility Issues',
    category: 'Accessibility Intelligence',
    description:
      'Adaptive multi-agent accessibility intelligence system focused on automotive infotainment and other complex interactive interfaces. A coordinating Brain Agent orchestrates specialized POUR Neuron Agents that scan UI structures, text content, and interaction flows for WCAG 2.2 and standards-aligned violations. The platform also proposes targeted design and code-level remediations.',
    icon: '♿',
    url: 'https://df-info-ui.vercel.app',
  },
  {
    name: 'M-CAUE: A Proactive IDE Usability Assistant for Real-Time Code Evaluation and Remediation',
    category: 'Shift-Left UX Quality Assurance',
    description: 'A multi-agent VS Code plugin integrating continuous usability evaluation directly into live coding workflows. It converts project requirements into a machine-readable design guide. A supervisor agent actively monitors UI source code against this guide, orchestrating specialized recommender agents to automatically generate minimal, standard-compliant code patches.',
    icon: '⚡',
    url: 'https://github.com/rezmeplz/M-CAUE',
  },
  {
    name: 'MMA-UI',
    category: 'Multimodal Static Inspector',
    description: 'MMA-UI provides static, multimodal assessment by simultaneously analyzing UI source code and rendered screenshots. Using dedicated Code and Visual-Design agents, it identifies perceptual and structural defects without executing dynamic user workflows. A supervisor agent aggregates these insights to generate annotated reports and actionable code patches for immediate visual refinement.',
    icon: '🔍',
    url: 'https://github.com/rezmeplz/MultiModelAgent-UI',
  },
  {
    name: 'GBS (WIP)',
    category: 'Standards-Verified Dynamic Interaction Testing',
    description: 'A multi-agent framework that automates usability testing through dynamic behavioral simulation. Utilizing GPT-5.1, specialized User-Agents execute perceive-decide-act loops under strict persona constraints. A Supervisor-Agent actively verifies these interactions against ISO standards to prevent hallucinations, ultimately generating actionable, standards-grounded Diagnostic Patch Reports for developers.',
    icon: '🤖',
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
          <p className="text-xl text-gray-600 max-w-3xl text-justify">
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
                <p className="text-gray-700 leading-relaxed text-justify">{tool.description}</p>
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
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4 text-justify">
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
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4 text-justify">
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
