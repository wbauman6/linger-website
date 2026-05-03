import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "@/components/marketing/SiteNav";
import { Footer } from "@/components/marketing/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy — Linger";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <SiteNav homeLink="/" />

      <main className="mx-auto max-w-[800px] px-4 sm:px-8 py-16">
        {/* Page heading */}
        <h1 className="font-serif text-4xl font-semibold text-white border-b border-coral/30 pb-3 mb-2">
          Privacy Policy
        </h1>
        <p className="italic text-muted-foreground/70 mb-8">Last updated: April 25, 2026</p>

        {/* Intro summary box */}
        <div className="bg-white/5 border-l-4 border-coral rounded-sm px-5 py-4 italic text-muted-foreground mb-8">
          Linger is a private app for sharing memories with people you trust. We only collect what we need to make the app work, your memories are only visible to users you specifically invite, and we do not sell your personal data or your content — ever.
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          This Privacy Policy for Bauman Apps LLC ("we," "us," or "our") describes how and why we collect, store, use, and share your personal information when you use Linger, our mobile application (collectively, the "Services").
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Linger is currently available only to users in the United States and Canada. If you are accessing the Services from another country, please do not use them.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          If you do not agree with our policies and practices, please do not use our Services. If you have any questions, please contact us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>.
        </p>

        {/* Summary of Key Points */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">Summary of Key Points</h2>
        <div className="bg-white/5 border-l-4 border-coral rounded-sm px-5 py-4 italic text-muted-foreground mb-8">
          <ul className="space-y-3 list-none">
            <li><span className="text-white not-italic font-medium">What personal information do we process?</span> We collect information you provide (such as your email, username, password, photos, videos, and memories you create or join). We also collect limited technical data automatically.</li>
            <li><span className="text-white not-italic font-medium">Do we process sensitive personal information?</span> No.</li>
            <li><span className="text-white not-italic font-medium">Do we collect information from third parties?</span> Only payment confirmation from Apple or Google for subscription purchases.</li>
            <li><span className="text-white not-italic font-medium">How do we process your information?</span> To provide and improve the Services, communicate with you, ensure security, process payments, moderate content, and comply with law.</li>
            <li><span className="text-white not-italic font-medium">With whom do we share personal information?</span> Only with service providers that help us operate Linger, members of memories you join, and Apple/Google for subscription processing. We do not sell your data.</li>
            <li><span className="text-white not-italic font-medium">How do we keep your information safe?</span> Through reasonable technical and organizational security measures, though no system is 100% secure.</li>
            <li><span className="text-white not-italic font-medium">What are your rights?</span> Depending on your location in the US or Canada, you may have rights to access, correct, delete, or export your data.</li>
          </ul>
        </div>

        {/* Table of Contents */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">Table of Contents</h2>
        <ol className="space-y-2 text-muted-foreground mb-10 list-decimal list-inside">
          {[
            { label: "What Information Do We Collect?", anchor: "#info-collect" },
            { label: "How Do We Process Your Information?", anchor: "#info-use" },
            { label: "What Legal Bases Do We Rely On?", anchor: "#legal-bases" },
            { label: "When and With Whom Do We Share Your Information?", anchor: "#share" },
            { label: "Subscriptions and Payment Information", anchor: "#subscriptions" },
            { label: "Content Moderation and Reporting", anchor: "#moderation" },
            { label: "How Long Do We Keep Your Information?", anchor: "#retention" },
            { label: "How Do We Keep Your Information Safe?", anchor: "#safe" },
            { label: "Where Your Information Is Stored", anchor: "#data-location" },
            { label: "Do We Collect Information From Minors?", anchor: "#minors" },
            { label: "What Are Your Privacy Rights?", anchor: "#rights" },
            { label: "Controls for Do-Not-Track Features", anchor: "#dnt" },
            { label: "Privacy Rights for U.S. Residents", anchor: "#us-laws" },
            { label: "Privacy Rights for Canadian Residents", anchor: "#canada" },
            { label: "Do We Make Updates to This Notice?", anchor: "#updates" },
            { label: "How Can You Contact Us?", anchor: "#contact" },
            { label: "How Can You Review, Update, or Delete Your Data?", anchor: "#review" },
          ].map((item, i) => (
            <li key={item.anchor}>
              <a href={item.anchor} className="text-coral hover:text-coral-300 hover:underline transition-colors">
                {i + 1}. {item.label}
              </a>
            </li>
          ))}
        </ol>

        {/* Section 1 */}
        <h2 id="info-collect" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          1. What Information Do We Collect?
        </h2>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Personal Information You Disclose to Us</h3>
        <p className="italic text-muted-foreground mb-4">In Short: We collect personal information that you voluntarily provide to us.</p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We collect the following personal information that you provide when you register for or use the Services:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li>Username</li>
          <li>Display name</li>
          <li>Email address</li>
          <li>Password (stored only in hashed form — we never see or store your actual password)</li>
          <li>Profile image (if you choose to upload one)</li>
          <li>Photos and videos you upload to memories</li>
          <li>Memory titles, descriptions, and event dates you create</li>
          <li>Friend connections and invite responses</li>
          <li>Support messages and reports you submit</li>
          <li>Acceptance timestamps for our Terms of Service and Privacy Policy</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-6">
          <span className="text-white font-medium">Sensitive Information.</span> We do not collect or process sensitive personal information.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">User-Generated Content</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          When you upload photos or videos to a memory, this content is stored on our servers and{" "}
          <span className="text-white font-medium">shared only with users invited to that specific memory</span>. Only users who have been invited to and accepted membership in a memory can view its photos and videos. You should only upload content you are comfortable sharing with the other members of that memory. You retain ownership of any content you upload — we do not claim rights to your photos or videos, and we do not use them to train AI models or for any purpose other than operating the Services.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Application Data</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you use our mobile application, we may request access or permission to certain features from your mobile device, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-2">
          <li><span className="italic">Camera Access.</span> To allow you to take photos and record videos directly within Linger using our normal, disposable, and digital camera modes.</li>
          <li><span className="italic">Photo Library Access.</span> To allow you to upload existing photos and videos from your device to memories.</li>
          <li><span className="italic">Microphone Access.</span> To record audio when you capture videos.</li>
          <li><span className="italic">Push Notifications.</span> To send you notifications about memory activity, friend requests, invites, support replies, and content moderation decisions. You can opt out in your device settings.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-6">
          You may revoke these permissions at any time in your device settings.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Information Automatically Collected</h3>
        <p className="italic text-muted-foreground mb-4">In Short: Some information — such as your IP address and device characteristics — is collected automatically when you use our Services.</p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We automatically collect certain information when you use the Services, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li><span className="italic">Log and Usage Data.</span> IP address, device type, operating system, app version, date and time of access, and actions taken within the app.</li>
          <li><span className="italic">Device Information.</span> Device identifiers, device model, hardware settings, and push notification tokens.</li>
          <li><span className="italic">Diagnostic Data.</span> Crash reports and error logs to help us fix bugs and improve performance.</li>
        </ul>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Information from Third Parties</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We receive limited information from Apple and Google when you purchase a Linger Plus subscription, including a transaction identifier and subscription status. We do not receive your full payment card details — these stay with Apple or Google.
        </p>

        {/* Section 2 */}
        <h2 id="info-use" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          2. How Do We Process Your Information?
        </h2>
        <p className="italic text-muted-foreground mb-4">In Short: We process your information to provide, improve, and administer the Services, communicate with you, process payments, moderate content, ensure security, and comply with law.</p>
        <p className="text-muted-foreground leading-relaxed mb-4">We process your personal information for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-2">
          <li><span className="text-white font-medium">To provide and maintain the Services,</span> including creating and managing your account, storing your memories, and displaying content to members of memories you belong to.</li>
          <li><span className="text-white font-medium">To authenticate users</span> through email and password, verification codes, and session tokens.</li>
          <li><span className="text-white font-medium">To send transactional communications</span> such as verification codes, password reset emails, support responses, and content moderation notices.</li>
          <li><span className="text-white font-medium">To send push notifications</span> about activity relevant to you (with your permission).</li>
          <li><span className="text-white font-medium">To process subscription purchases</span> and manage your Linger Plus membership.</li>
          <li><span className="text-white font-medium">To moderate content and enforce our Terms,</span> including reviewing reports of inappropriate content and taking action on accounts that violate our rules.</li>
          <li><span className="text-white font-medium">To respond to support requests</span> and user inquiries.</li>
          <li><span className="text-white font-medium">To protect the Services</span> against fraud, abuse, harassment, and unauthorized access.</li>
          <li><span className="text-white font-medium">To identify usage trends</span> so we can improve the Services.</li>
          <li><span className="text-white font-medium">To comply with legal obligations</span> where required.</li>
          <li><span className="text-white font-medium">To protect the vital interests</span> of users or others in emergency situations.</li>
        </ul>

        {/* Section 3 */}
        <h2 id="legal-bases" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          3. What Legal Bases Do We Rely On?
        </h2>
        <p className="italic text-muted-foreground mb-4">In Short: We only process your information when we have a valid legal reason to do so under applicable U.S. and Canadian law.</p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          For users in the United States, we process personal information for the purposes described in this Policy and as permitted by applicable state and federal laws.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          For users in Canada, we may process your information when you have given express or implied consent. In limited exceptional cases, we may process information without consent as permitted by Canadian law — for example, for fraud detection, legal compliance, or to protect an individual's safety.
        </p>

        {/* Section 4 */}
        <h2 id="share" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          4. When and With Whom Do We Share Your Information?
        </h2>
        <p className="italic text-muted-foreground mb-4">In Short: We share information only in specific situations with specific third parties. We do not sell your data.</p>
        <p className="text-muted-foreground leading-relaxed mb-4">We may share your personal information in the following situations:</p>
        <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8 ml-2">
          <li><span className="text-white font-medium">With Other Members of Your Memories.</span> Photos, videos, memory details, and your display name are visible to other users you have invited to or who have been invited to a memory with you.</li>
          <li><span className="text-white font-medium">With Friends.</span> Your display name, username, and profile image are visible to users who add you as a friend.</li>
          <li>
            <span className="text-white font-medium">With Service Providers.</span> We share information with vendors that help us operate the Services, including:
            <ul className="list-disc list-inside space-y-1 mt-2 ml-6">
              <li><span className="text-white font-medium">Vibe Code</span> — backend hosting and infrastructure (United States)</li>
              <li><span className="text-white font-medium">Gmail (Google)</span> — sending verification codes, password resets, support replies, and report notifications</li>
              <li><span className="text-white font-medium">Apple Push Notification Service</span> — delivering push notifications to your device</li>
              <li><span className="text-white font-medium">Apple and Google</span> — processing Linger Plus subscription payments through the App Store and Google Play</li>
              <li><span className="text-white font-medium">RevenueCat</span> — managing and verifying subscription status</li>
            </ul>
            <p className="mt-2">These providers are contractually required to protect your information and only use it to provide their service to us.</p>
          </li>
          <li><span className="text-white font-medium">With Apple and Google.</span> When you purchase a Linger Plus subscription, billing is processed by Apple or Google. We receive limited transaction data but not your full payment information.</li>
          <li><span className="text-white font-medium">For Legal Reasons.</span> We may disclose information if required by law, subpoena, court order, or to protect our rights, property, or safety, or the rights, property, or safety of others.</li>
          <li><span className="text-white font-medium">For Content Moderation.</span> When users submit reports about content or other users, we share the reported content with our moderation team to review and take appropriate action.</li>
          <li><span className="text-white font-medium">Business Transfers.</span> If we are involved in a merger, sale, or acquisition, your information may be transferred as part of that transaction. You will be notified of any such change.</li>
          <li><span className="text-white font-medium">With Your Consent.</span> We may share information with your explicit consent for other purposes.</li>
        </ul>

        {/* Section 5 */}
        <h2 id="subscriptions" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          5. Subscriptions and Payment Information
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Linger offers an optional paid subscription called <span className="text-white font-medium">Linger Plus</span> that unlocks features such as unlimited memories, the ability to save content from memories to your device, video uploads, and early access to new camera modes.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Subscriptions are processed through Apple's App Store or Google Play, depending on where you downloaded Linger. Your payment information (credit card numbers, billing address, etc.) is collected and stored by Apple or Google — <span className="text-white font-medium">we never see or store your full payment details</span>.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">We receive limited information from Apple or Google to manage your subscription, including:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-2">
          <li>A transaction identifier</li>
          <li>Subscription start and renewal dates</li>
          <li>Subscription status (active, expired, refunded, etc.)</li>
          <li>The product purchased (monthly or annual plan)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-8">
          To manage or cancel your subscription, use your Apple ID or Google Play account settings. We cannot directly cancel subscriptions or issue refunds — those are handled by Apple or Google.
        </p>

        {/* Section 6 */}
        <h2 id="moderation" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          6. Content Moderation and Reporting
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          To keep Linger safe, we operate a content reporting and moderation system.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">When You Submit a Report</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you report a photo, video, memory, or user, we collect:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-2">
          <li>Your identity as the reporter</li>
          <li>The identity of the reported user</li>
          <li>The content being reported</li>
          <li>The reason for the report</li>
          <li>Any additional notes you provide</li>
          <li>The timestamp of the report</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-6">
          <span className="text-white font-medium">Reports are confidential.</span> The reported user is never told who submitted the report.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">When You Are Reported</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If your content or account is reported, our moderation team will review the report. We may:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-2">
          <li>Dismiss the report if no violation is found</li>
          <li>Remove the specific content if it violates our Terms</li>
          <li>Suspend or permanently ban your account for serious or repeated violations</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If we take action against your content or account, we will notify you of the decision and provide an opportunity to appeal by contacting{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Banned Accounts</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          If your account is banned, you will be signed out and prevented from accessing the Services. We retain a record of banned accounts to prevent re-registration and to comply with our legal obligations.
        </p>

        {/* Section 7 */}
        <h2 id="retention" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          7. How Long Do We Keep Your Information?
        </h2>
        <p className="italic text-muted-foreground mb-4">In Short: We keep your information only as long as necessary to provide the Services or comply with legal obligations. Specific retention periods are listed below.</p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We retain different categories of information for different periods, based on the purpose of collection and our legal obligations:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-muted-foreground border-collapse">
            <thead>
              <tr>
                <th className="bg-white/5 border border-white/10 px-4 py-3 text-left text-white font-medium">Category</th>
                <th className="bg-white/5 border border-white/10 px-4 py-3 text-left text-white font-medium">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Account information (email, username, password)", "Until account deletion, then deleted within 30 days"],
                ["Photos and videos in memories", "Until you delete the content, you delete your account, or the memory creator deletes the memory"],
                ["Memory metadata (titles, descriptions)", "Until the memory is deleted"],
                ["Friend connections", "Until you remove the connection or delete your account"],
                ["Support messages", "2 years after the conversation ends"],
                ["Content reports and moderation records", "Up to 5 years to enforce our Terms and meet legal obligations"],
                ["Banned account records", "Indefinitely, to prevent re-registration"],
                ["Server logs and IP address logs", "90 days, then deleted"],
                ["Diagnostic and crash data", "180 days, then deleted"],
                ["Subscription transaction records", "7 years (required for tax and accounting)"],
                ["Backups containing deleted data", "Up to 90 days after primary deletion"],
              ].map(([category, period]) => (
                <tr key={category}>
                  <td className="border border-white/10 px-4 py-3">{category}</td>
                  <td className="border border-white/10 px-4 py-3">{period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-8">
          When you delete your account, we delete or anonymize your personal information from our active databases{" "}
          <span className="text-white font-medium">within 30 days</span>, except where we are required to retain certain information to comply with legal obligations, resolve disputes, prevent fraud, or enforce agreements.
        </p>

        {/* Section 8 */}
        <h2 id="safe" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          8. How Do We Keep Your Information Safe?
        </h2>
        <p className="italic text-muted-foreground mb-4">In Short: We protect your information through reasonable technical and organizational security measures.</p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We implement appropriate security measures designed to protect your personal information, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li>Password hashing using industry-standard algorithms</li>
          <li>Encrypted transmission of data (HTTPS/TLS)</li>
          <li>Encrypted storage of sensitive data at rest</li>
          <li>Access controls limiting who can view user data</li>
          <li>Regular security reviews of our systems</li>
          <li>Authentication via secure session tokens</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-8">
          However, no electronic transmission or storage system is 100% secure. We cannot guarantee that unauthorized third parties will never defeat our security measures. You access the Services at your own risk.
        </p>

        {/* Section 9 */}
        <h2 id="data-location" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          9. Where Your Information Is Stored
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Linger is operated from the United States. Our cloud hosting, database, email delivery, and other service providers are primarily located in the United States.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you are located in Canada, your information will be transferred to and stored in the United States. By using the Services, you acknowledge and consent to this transfer. U.S. law may differ from Canadian law, and U.S. authorities may have access to information stored on U.S. servers under applicable laws.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">Our service providers and their data storage locations include:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-2">
          <li><span className="text-white font-medium">Vibe Code</span> (backend hosting, database storage for accounts, memories, photos, and videos): United States</li>
          <li><span className="text-white font-medium">Gmail (Google)</span> (transactional email delivery): United States</li>
          <li><span className="text-white font-medium">Apple Push Notification Service</span> (iOS push notifications): Apple data centers in North America</li>
          <li><span className="text-white font-medium">Apple App Store and Google Play</span> (subscription billing): Apple and Google global infrastructure</li>
          <li><span className="text-white font-medium">RevenueCat</span> (subscription management and verification): United States</li>
        </ul>

        {/* Section 10 */}
        <h2 id="minors" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          10. Do We Collect Information From Minors?
        </h2>
        <p className="italic text-muted-foreground mb-4">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Linger is intended for users 18 years of age or older. By using the Services, you represent that you are at least 18.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We do not knowingly collect information from children under 18. If we learn that we have collected personal information from a user under 18, we will deactivate the account and delete the information. If you believe we may have collected information from a minor, please contact us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>.
        </p>

        {/* Section 11 */}
        <h2 id="rights" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          11. What Are Your Privacy Rights?
        </h2>
        <p className="italic text-muted-foreground mb-4">In Short: Depending on your state or province, you may have rights to access, correct, delete, or export your personal information.</p>
        <p className="text-muted-foreground leading-relaxed mb-4">You may have the following rights regarding your personal information:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li>The right to access and obtain a copy of your personal information</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your personal information</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time (where we rely on consent)</li>
          <li>The right to opt out of certain processing (where applicable under your state or province's law)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-6">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>. You may also review and update most of your information directly within the app.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Withdrawing Your Consent</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If we rely on your consent to process your information, you may withdraw that consent at any time by contacting us. Withdrawal does not affect the lawfulness of processing before withdrawal.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Account Information</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          You can review or change your account information at any time in the app settings. To delete your account, use the "Delete Account" option in settings or contact us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>.
        </p>

        {/* Section 12 */}
        <h2 id="dnt" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          12. Controls for Do-Not-Track Features
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Most browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature. Because no uniform technology standard for recognizing DNT signals has been finalized, we do not currently respond to DNT browser signals. If a standard is adopted in the future, we will update this Policy accordingly.
        </p>

        {/* Section 13 */}
        <h2 id="us-laws" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          13. Privacy Rights for U.S. Residents
        </h2>
        <p className="italic text-muted-foreground mb-4">
          In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you have specific rights regarding your personal information under your state's privacy law.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Categories of Personal Information We Collect</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The table below shows the categories of personal information we have collected in the past twelve (12) months:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-muted-foreground border-collapse">
            <thead>
              <tr>
                <th className="bg-white/5 border border-white/10 px-4 py-3 text-left text-white font-medium">Category</th>
                <th className="bg-white/5 border border-white/10 px-4 py-3 text-left text-white font-medium">Examples</th>
                <th className="bg-white/5 border border-white/10 px-4 py-3 text-left text-white font-medium">Collected</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A. Identifiers", "Email, username, IP address, device identifier", "YES"],
                ["B. Personal information (California Customer Records)", "Display name", "YES"],
                ["C. Protected classification characteristics", "Race, age, gender, national origin", "NO"],
                ["D. Commercial information", "Subscription purchase history", "YES (transaction IDs only)"],
                ["E. Biometric information", "Fingerprints, voiceprints", "NO"],
                ["F. Internet or network activity", "Usage data within the app", "YES"],
                ["G. Geolocation data", "Precise device location", "NO"],
                ["H. Audio, electronic, visual, or similar information", "Photos and videos you upload", "YES"],
                ["I. Professional or employment-related information", "Job title, work history", "NO"],
                ["J. Education information", "Student records", "NO"],
                ["K. Inferences from other personal information", "Profile preferences", "NO"],
                ["L. Sensitive personal information", "Precise location, racial origin, health data", "NO"],
              ].map(([category, examples, collected]) => (
                <tr key={category}>
                  <td className="border border-white/10 px-4 py-3">{category}</td>
                  <td className="border border-white/10 px-4 py-3">{examples}</td>
                  <td className={`border border-white/10 px-4 py-3 font-medium ${collected === "NO" ? "text-muted-foreground" : "text-white"}`}>{collected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We retain each category of personal information for as long as the user has an account with us, or as otherwise required by law (see Section 7).
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Sources of Personal Information</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We collect information directly from you when you provide it, automatically from your device when you use the Services, and from Apple or Google when you make a subscription purchase.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">How We Use and Share Personal Information</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We use personal information for the purposes described in Section 2. We share personal information only as described in Section 4. <span className="text-white font-medium">We have not sold or shared personal information for targeted advertising in the preceding twelve (12) months, and we will not do so in the future.</span>
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Your Rights</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">Depending on your state of residence, you may have the following rights:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li><span className="text-white font-medium">Right to know</span> whether we process your personal data and to access it</li>
          <li><span className="text-white font-medium">Right to correct</span> inaccuracies in your personal data</li>
          <li><span className="text-white font-medium">Right to delete</span> your personal data</li>
          <li><span className="text-white font-medium">Right to obtain a copy</span> of personal data you previously shared with us</li>
          <li><span className="text-white font-medium">Right to non-discrimination</span> for exercising your rights</li>
          <li><span className="text-white font-medium">Right to opt out</span> of the sale of personal data, targeted advertising, or profiling in furtherance of significant decisions</li>
          <li><span className="text-white font-medium">Right to limit</span> use and disclosure of sensitive personal data (where applicable)</li>
        </ul>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">How to Exercise Your Rights</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          To exercise any of these rights, email us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>. We will respond in accordance with applicable law.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Verification</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We will need to verify your identity before acting on your request. We may request additional information solely for verification and fraud-prevention purposes.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Authorized Agents</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          You may designate an authorized agent to make a request on your behalf. We may require written, signed authorization and verification of your identity.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Appeals</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If we decline to act on your request, you may appeal by emailing us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>. We will inform you in writing of the decision and the reasons. If your appeal is denied, you may contact your state's attorney general.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">California Shine the Light Law</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          California Civil Code Section 1798.83 permits California residents to request, once per year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes in the preceding calendar year. To make such a request, contact us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>. <span className="text-white font-medium">We do not disclose personal information to third parties for their direct marketing purposes.</span>
        </p>

        {/* Section 14 */}
        <h2 id="canada" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          14. Privacy Rights for Canadian Residents
        </h2>
        <p className="italic text-muted-foreground mb-4">
          In Short: If you are a resident of Canada, you have specific rights under the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws (such as Quebec's Law 25, BC's PIPA, and Alberta's PIPA).
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Your Rights</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">As a Canadian resident, you have the right to:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li><span className="text-white font-medium">Access</span> the personal information we hold about you</li>
          <li><span className="text-white font-medium">Correct</span> inaccurate or incomplete personal information</li>
          <li><span className="text-white font-medium">Withdraw consent</span> for our collection, use, or disclosure of your information (subject to legal or contractual restrictions)</li>
          <li><span className="text-white font-medium">Request deletion</span> of your personal information</li>
          <li><span className="text-white font-medium">Be informed</span> about how your personal information is being used</li>
          <li><span className="text-white font-medium">File a complaint</span> with the Office of the Privacy Commissioner of Canada or your provincial privacy commissioner</li>
        </ul>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Consent</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          By creating an account and using the Services, you consent to the collection, use, and disclosure of your personal information as described in this Policy. You may withdraw your consent at any time by contacting us, though doing so may limit our ability to provide certain features.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Cross-Border Data Transfer</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          As described in Section 9, your information will be stored in the United States. By using the Services, you consent to the transfer of your information to the U.S. for processing and storage.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Quebec Residents (Law 25)</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you reside in Quebec, you have additional rights under Law 25, including the right to data portability and the right to be informed of automated decision-making (we do not currently use automated decision-making).
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">How to Exercise Your Rights</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          To exercise any of these rights, email us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>. We will respond within 30 days.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Filing a Complaint</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">If you believe we have not addressed your concerns adequately, you may file a complaint with:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-2">
          <li>
            <span className="text-white font-medium">Office of the Privacy Commissioner of Canada:</span>{" "}
            <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">priv.gc.ca</a>
          </li>
          <li><span className="text-white font-medium">Your provincial privacy commissioner</span> (for Quebec, BC, and Alberta residents)</li>
        </ul>

        {/* Section 15 */}
        <h2 id="updates" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          15. Do We Make Updates to This Notice?
        </h2>
        <p className="italic text-muted-foreground mb-4">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We may update this Privacy Policy from time to time. The updated version will be indicated by a new "Last updated" date at the top. If we make material changes, we will notify you by posting a notice in the app or sending you an email. We encourage you to review this Policy periodically.
        </p>

        {/* Section 16 */}
        <h2 id="contact" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          16. How Can You Contact Us About This Notice?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you have questions or comments about this Policy, please contact us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a> or by mail at:
        </p>
        <div className="bg-white/5 rounded-lg p-5 mt-4 mb-8 text-muted-foreground leading-relaxed">
          <p className="text-white font-medium">Bauman Apps LLC</p>
          <p>42 McKinley Avenue</p>
          <p>West Caldwell, NJ 07006</p>
          <p>United States</p>
          <p className="mt-2">
            <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>
          </p>
        </div>

        {/* Section 17 */}
        <h2 id="review" className="font-serif text-2xl font-medium text-white mt-10 mb-4">
          17. How Can You Review, Update, or Delete the Data We Collect From You?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You have the right to request access to your personal information, correct inaccuracies, or request deletion. You can:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-12 ml-2">
          <li>Review and update most information directly in the app settings</li>
          <li>Delete your account using the "Delete Account" option in settings</li>
          <li>
            Email us at{" "}
            <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>{" "}
            to make any other request
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
