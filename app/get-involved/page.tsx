export const metadata = {
  title: 'Get Involved | S-UXE\'s',
  description: 'Join the S-UXE\'s ecosystem as a researcher, student, developer, or educator. Learn about participation pathways, mentorship opportunities, and inclusive community practices.',
}

export default function GetInvolvedPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h1>

        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              The S-UXE&apos;s ecosystem thrives through the active participation of researchers, 
              students, developers, educators, and practitioners. We welcome contributions at all 
              levels and are committed to creating an inclusive, supportive environment where 
              everyone can learn, contribute, and benefit from the ecosystem. Whether you are 
              new to UX evaluation or an experienced researcher, there are meaningful ways to 
              participate.
            </p>
          </div>
        </section>

        {/* Researchers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">For Researchers</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              Researchers play a central role in shaping the ecosystem through their expertise, 
              evaluation needs, and feedback on ecosystem standards and practices.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ways to Participate</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
                <li>
                  <strong>Use ecosystem-compatible tools</strong> in your research and provide 
                  feedback on interoperability and data sharing experiences.
                </li>
                <li>
                  <strong>Contribute evaluation data</strong> (anonymized and appropriately 
                  consented) to shared datasets that can advance the field.
                </li>
                <li>
                  <strong>Participate in standards development</strong> by reviewing proposed 
                  data formats, metadata schemas, and integration protocols.
                </li>
                <li>
                  <strong>Share methodological insights</strong> through ecosystem documentation, 
                  case studies, and community discussions.
                </li>
                <li>
                  <strong>Collaborate on research projects</strong> that explore ecosystem 
                  effectiveness, interoperability challenges, and evaluation methodology.
                </li>
                <li>
                  <strong>Mentor students and early-career researchers</strong> in using ecosystem 
                  tools and contributing to ecosystem development.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Students */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">For Students</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              Students are essential contributors to the ecosystem&apos;s growth and diversity. 
              We provide mentorship, learning resources, and opportunities for students to make 
              meaningful contributions while developing their skills.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ways to Participate</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
                <li>
                  <strong>Join as a contributor</strong> on projects that match your interests 
                  and skill level, with mentorship from experienced community members.
                </li>
                <li>
                  <strong>Document ecosystem tools and workflows</strong> through tutorials, 
                  examples, and best practices that help other users.
                </li>
                <li>
                  <strong>Develop integrations</strong> between tools or create new tools that 
                  follow ecosystem standards.
                </li>
                <li>
                  <strong>Conduct usability testing</strong> of ecosystem tools and contribute 
                  findings to improve the user experience of the ecosystem itself.
                </li>
                <li>
                  <strong>Participate in research projects</strong> that use ecosystem tools, 
                  contributing to both the research and ecosystem development.
                </li>
                <li>
                  <strong>Attend and contribute to community events</strong> including virtual 
                  meetings, workshops, and conferences.
                </li>
              </ul>
            </div>
            <p className="text-lg leading-8 mt-4 italic text-gray-600">
              We recognize that students have varying levels of experience and time availability. 
              Contributions of any size are valued, and we prioritize providing a supportive 
              learning environment.
            </p>
          </div>
        </section>

        {/* Developers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">For Developers</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              Developers are crucial for building and maintaining the technical infrastructure 
              that enables ecosystem interoperability and tool integration.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ways to Participate</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
                <li>
                  <strong>Develop ecosystem infrastructure</strong> including data format 
                  libraries, integration protocols, and tool orchestration frameworks.
                </li>
                <li>
                  <strong>Create tool adapters</strong> that enable existing UX evaluation tools 
                  to participate in the ecosystem with minimal changes to their codebase.
                </li>
                <li>
                  <strong>Build new tools</strong> that are ecosystem-native from the start, 
                  demonstrating best practices for interoperability.
                </li>
                <li>
                  <strong>Contribute to ecosystem documentation</strong> including API 
                  specifications, integration guides, and developer tutorials.
                </li>
                <li>
                  <strong>Review and test</strong> proposed standards and implementations, 
                  ensuring they are practical and implementable.
                </li>
                <li>
                  <strong>Maintain and improve</strong> ecosystem codebases, addressing bugs, 
                  adding features, and improving code quality.
                </li>
              </ul>
            </div>
            <p className="text-lg leading-8 mt-4">
              The ecosystem values code contributions of all sizes, from bug fixes to major 
              feature implementations. All contributions go through peer review to ensure 
              quality and alignment with ecosystem goals.
            </p>
          </div>
        </section>

        {/* Educators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">For Educators</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-8">
              Educators help shape the next generation of UX evaluation practitioners and 
              researchers, and the ecosystem benefits from their pedagogical expertise and 
              student engagement.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ways to Participate</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
                <li>
                  <strong>Incorporate ecosystem tools</strong> into coursework, teaching students 
                  about standards-aligned evaluation practices and tool interoperability.
                </li>
                <li>
                  <strong>Develop educational materials</strong> including assignments, tutorials, 
                  and case studies that use ecosystem tools and demonstrate best practices.
                </li>
                <li>
                  <strong>Guide student projects</strong> that contribute to the ecosystem, 
                  providing academic structure and support.
                </li>
                <li>
                  <strong>Participate in curriculum development</strong> discussions to ensure 
                  ecosystem resources meet educational needs.
                </li>
                <li>
                  <strong>Share pedagogical insights</strong> on teaching UX evaluation, tool 
                  integration, and standards-based practice.
                </li>
                <li>
                  <strong>Connect your institution</strong> to the ecosystem through research 
                  collaborations and student participation programs.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Inclusion and Mentorship */}
        <section className="mb-16 bg-primary-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Inclusion and Mentorship</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-lg leading-8">
              The S-UXE&apos;s ecosystem is committed to creating an inclusive, welcoming 
              environment for all participants. We recognize that contributions come in many 
              forms and that everyone has something valuable to offer. Our community practices 
              emphasize:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-8">
              <li>Respectful, constructive communication</li>
              <li>Recognition of diverse contributions and expertise</li>
              <li>Accessibility in all community activities and resources</li>
              <li>Mentorship and support for newcomers</li>
              <li>Clear pathways for contribution at all skill levels</li>
            </ul>
            <p className="text-lg leading-8 mt-4">
              If you are new to the ecosystem or unsure how to get started, reach out through 
              our community channels. Experienced members are available to help you find 
              meaningful ways to contribute and connect with projects that match your interests.
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
          <p className="text-lg text-gray-700 leading-8 mb-6">
            To begin participating in the S-UXE&apos;s ecosystem, we recommend:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-lg leading-8">
            <li>Reviewing the ecosystem documentation and understanding how tools participate</li>
            <li>Exploring existing ecosystem-compatible tools and understanding their capabilities</li>
            <li>Joining community discussions and introducing yourself</li>
            <li>Identifying a contribution area that matches your interests and expertise</li>
            <li>Starting with a small contribution to become familiar with processes and workflows</li>
          </ol>
          <p className="text-lg text-gray-700 leading-8 mt-6">
            The ecosystem grows stronger with each participant, and we look forward to your 
            contributions to building a sustainable, interoperable future for UX evaluation.
          </p>
        </section>
      </div>
    </div>
  )
}

