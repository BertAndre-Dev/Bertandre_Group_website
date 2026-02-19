import type { Metadata } from "next";
import Navbar from "@/components/molecules/navbar/page";
import Footer from "@/components/molecules/footer/page";

export const metadata: Metadata = {
  title: "Terms and Conditions | BertAndre Group",
  description:
    "Terms and Conditions governing access to and use of the Berta Estate Hub platform, owned and operated by Bertandre Consulting.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14 max-w-4xl">
        <h1 className="text-[#171717] text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Terms and Conditions
        </h1>
        <p className="text-[#4C4C4C] text-sm sm:text-base mb-8">
          Effective Date: 5th of February, 2026
        </p>

        <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-10">
          These Terms and Conditions (&quot;Terms&quot;) govern access to and use
          of the Berta Estate Hub platform, including its website, mobile
          applications, APIs, and related services (collectively, the
          &quot;Platform&quot;). The Platform is owned and operated by Bertandre
          Consulting (&quot;Platform Owner&quot;, &quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;).
        </p>
        <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-12">
          By accessing or using the Platform, you agree to be bound by these
          Terms. If you do not agree, do not access or use the Platform.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              1. Platform Role &amp; Disclaimer of Liability
            </h2>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              1.1 Technology Intermediary Only
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              Berta Estate Hub is a technology and information platform that
              facilitates estate management, meter management, communication,
              listings, payments (including escrow and installment tracking),
              and engagement between estate developers, property owners, tenants,
              buyers, and other users (collectively, &quot;Users&quot;).
            </p>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              1.2 No Property Ownership or Agency Role
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              The Platform Owner is not a real estate developer, property owner,
              landlord, agent, broker, lawyer, escrow agent, or financial
              institution. We do not own, sell, lease, manage, construct,
              inspect, finance, or warrant any property listed on the Platform.
            </p>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              1.3 No Responsibility for Property Transactions
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              All agreements, transactions, obligations, disputes, and
              liabilities arising between estate developers, owners, tenants,
              buyers, or any third party are strictly between those parties. The
              Platform Owner bears no responsibility or liability for such
              interactions.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              2. No Liability for Disputes
            </h2>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              2.1 Third-Party Disputes
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              Any dispute, claim, demand, loss, or damage arising between Users,
              including but not limited to disputes between:
            </p>
            <ul className="list-disc pl-6 text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4 space-y-1">
              <li>Estate developers and buyers</li>
              <li>Property owners and tenants</li>
              <li>Developers and contractors</li>
              <li>Buyers and tenants</li>
            </ul>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              shall be resolved solely between the involved parties, without
              involving the Platform Owner.
            </p>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              2.2 Waiver of Claims
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-2">
              You expressly waive any claim against the Platform Owner, its
              directors, officers, employees, contractors, affiliates, or
              partners arising from or related to:
            </p>
            <ul className="list-disc pl-6 text-[#4C4C4C] text-sm sm:text-base leading-relaxed space-y-1">
              <li>Property defects</li>
              <li>Delayed construction or delivery</li>
              <li>Estate Management</li>
              <li>Misrepresentation by any User</li>
              <li>Rental, lease, or ownership disputes</li>
              <li>Payment defaults or refunds</li>
              <li>Breach of contract by any User</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              3. No Warranties
            </h2>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              3.1 As-Is Platform
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              The Platform is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis without warranties of any kind, whether
              express or implied.
            </p>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              3.2 No Guarantee of Accuracy
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              We do not verify, guarantee, or warrant the accuracy, legality,
              quality, safety, or completeness of:
            </p>
            <ul className="list-disc pl-6 text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4 space-y-1">
              <li>Property listings</li>
              <li>Building plans</li>
              <li>Pricing or payment schedules</li>
              <li>User-submitted content</li>
            </ul>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              3.3 No Guarantee of Outcomes
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              We do not guarantee successful sales, rentals, construction
              completion, investment returns, or tenant occupancy.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              4. Payments, Escrow &amp; Financial Disclaimers
            </h2>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              4.1 Third-Party Wallets &amp; Payment Systems
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              All payment processing, wallet services, escrow functionality, and
              installment collections on the Platform are provided and operated
              exclusively by independent third-party payment service providers.
              The Platform Owner does not own, operate, control, or manage any
              wallet system, escrow account, or payment infrastructure.
            </p>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              4.2 No Custodial or Financial Institution Role
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              The Platform Owner does not act as a bank, financial institution,
              money service business, payment processor, trustee, or escrow
              agent, and does not hold, store, or take custody of user funds at
              any time.
            </p>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              4.3 Payment Authorization &amp; Risk Assumption
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              By using the payment or wallet features, Users authorize such
              third-party providers to process transactions in accordance with
              their own terms and policies. All risks associated with payments,
              including delays, failures, chargebacks, reversals, fraud, or
              system downtime, are assumed by the Users and the relevant
              third-party provider.
            </p>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              4.4 Payment Disputes
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              Any dispute relating to payments, wallet balances, escrow
              releases, or installment schedules shall be resolved solely
              between the User, the relevant counterparty (estate developer,
              owner, tenant, or buyer), and the third-party payment provider. The
              Platform Owner shall not be a party to, or liable for, such
              disputes.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              5. User Obligations
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-2">
              Users agree to:
            </p>
            <ul className="list-disc pl-6 text-[#4C4C4C] text-sm sm:text-base leading-relaxed space-y-1">
              <li>Provide accurate and lawful information</li>
              <li>Conduct independent due diligence before any transaction</li>
              <li>Comply with all applicable real estate, tenancy, tax, and financial laws</li>
              <li>Use the Platform only for lawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-2">
              To the maximum extent permitted by law, the Platform Owner shall
              not be liable for:
            </p>
            <ul className="list-disc pl-6 text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4 space-y-1">
              <li>Direct, indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Property damage or personal injury</li>
            </ul>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              This limitation applies even if we were advised of the possibility
              of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              7. Indemnification
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              You agree to indemnify, defend, and hold harmless the Platform
              Owner and its affiliates from any claims, damages, losses,
              liabilities, costs, or expenses (including legal fees) arising
              from: your use of the Platform; your transactions with other
              Users; your violation of these Terms; your violation of any law or
              third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              8. Content &amp; Intellectual Property
            </h2>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              8.1 User Content
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4">
              Users retain ownership of their content but grant the Platform
              Owner a non-exclusive, royalty-free license to use, display, and
              distribute such content for Platform operations.
            </p>
            <h3 className="text-[#171717] text-base font-semibold mt-4 mb-2">
              8.2 Platform IP
            </h3>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              All Platform software, branding, design, and content are the
              exclusive property of the Platform Owner. Unauthorized use is
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              9. Termination
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              We reserve the right to suspend or terminate any account at our
              sole discretion, without liability, for: breach of these Terms;
              fraudulent or unlawful activity; actions that expose the Platform
              Owner to legal or reputational risk.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              10. Regulatory &amp; Legal Compliance Disclaimer
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-2">
              Users are solely responsible for ensuring compliance with:
            </p>
            <ul className="list-disc pl-6 text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-4 space-y-1">
              <li>Local real estate laws</li>
              <li>Tenancy and landlord regulations</li>
              <li>Building and planning approvals</li>
              <li>Tax obligations</li>
            </ul>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              The Platform Owner does not provide legal, tax, or regulatory
              advice.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              11. Force Majeure
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              The Platform Owner shall not be liable for failure or delay caused
              by events beyond reasonable control, including acts of God,
              government actions, strikes, system failures, or network outages.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              12. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the Federal Republic of Nigeria, without regard to
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              We may update these Terms at any time. Continued use of the
              Platform constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              14. Entire Agreement
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed">
              These Terms constitute the entire agreement between you and the
              Platform Owner and supersede all prior agreements or
              understandings.
            </p>
          </section>

          <section>
            <h2 className="text-[#1560BD] text-lg sm:text-xl font-semibold mb-4">
              15. Contact Information
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base leading-relaxed mb-2">
              For questions regarding these Terms, contact:
            </p>
            <p className="text-[#171717] font-semibold">Bertandre Consulting</p>
            <a
              href="mailto:info@bertandregroup.com"
              className="text-[#1560BD] hover:underline"
            >
              info@bertandregroup.com
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
