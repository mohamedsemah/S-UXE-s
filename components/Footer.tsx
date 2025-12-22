import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              S-UXE&apos;s
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sustainable Open-Source Ecosystem for User Experience Evaluation
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/vision"
                  className="text-sm text-gray-600 hover:text-primary-600 focus-visible transition-colors"
                >
                  Vision & Standards
                </Link>
              </li>
              <li>
                <Link
                  href="/ecosystem"
                  className="text-sm text-gray-600 hover:text-primary-600 focus-visible transition-colors"
                >
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-gray-600 hover:text-primary-600 focus-visible transition-colors"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-sm text-gray-600 hover:text-primary-600 focus-visible transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="text-sm text-gray-600 hover:text-primary-600 focus-visible transition-colors"
                >
                  Governance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Support
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This material is based upon work supported by the National Science Foundation under Award No. [Award Number].
            </p>
            <p className="text-xs text-gray-500">
              Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} S-UXE&apos;s. This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
          </p>
        </div>
      </div>
    </footer>
  )
}

