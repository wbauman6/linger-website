import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "@/components/marketing/SiteNav";
import { Footer } from "@/components/marketing/Footer";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service — Linger";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <SiteNav homeLink="/" />

      <main className="mx-auto max-w-[800px] px-4 sm:px-8 py-16">
        {/* Page heading */}
        <h1 className="font-serif text-4xl font-semibold text-white border-b border-coral/30 pb-3 mb-2">
          Terms of Service
        </h1>
        <p className="italic text-muted-foreground/70 mb-8">Last updated: April 25, 2026</p>

        {/* Intro summary box */}
        <div className="bg-white/5 border-l-4 border-coral rounded-sm px-5 py-4 italic text-muted-foreground mb-6">
          Welcome to Linger. These Terms explain the rules for using our app. By creating an account or using Linger, you agree to these Terms. We've kept them as clear and human as possible — please read them.{" "}
          <span className="text-white not-italic font-medium">Linger is built for private, trusted sharing — these rules help keep it that way.</span>
        </div>

        {/* Region warning box */}
        <div className="bg-coral/5 border border-coral/30 rounded-md p-4 mb-10">
          <p className="text-muted-foreground">
            <span className="text-white font-medium">Region:</span> Linger is currently available only to users in the United States and Canada. If you are accessing the Services from another country, please do not use them.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">1. Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Linger is a private memory-sharing app operated by Bauman Apps LLC ("we," "us," or "our"), a New Jersey limited liability company. These Terms of Service ("Terms") govern your use of the Linger mobile application and any related services (together, the "Services").
        </p>

        {/* Section 2 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">2. Accepting These Terms</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          By downloading, installing, registering for, or using Linger, you agree to be bound by these Terms and our{" "}
          <Link to="/privacy-policy" className="text-coral hover:underline transition-colors">Privacy Policy</Link>. When you create an account, you will be asked to confirm your acceptance of these Terms — we record the date and time of your acceptance. If you do not agree, please do not use the Services.
        </p>

        {/* Section 3 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">3. Who Can Use Linger</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You must be at least <span className="text-white font-medium">18 years old</span> to use Linger. By creating an account, you confirm that you meet this age requirement. If we learn that a user is under 18, we will deactivate the account.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">You must also:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-2">
          <li>Be a resident of the United States or Canada</li>
          <li>Provide accurate information when registering</li>
          <li>Keep your password secure and not share it with anyone</li>
          <li>Be responsible for all activity on your account</li>
          <li>Notify us immediately if you suspect unauthorized access to your account</li>
          <li>Have only one active account at a time</li>
        </ul>

        {/* Section 4 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">4. How Memories Work</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Linger lets you create "memories" — private collections of photos, videos, and notes tied to a specific event or moment. Memories are <span className="text-white font-medium">private by default</span>. Only users who have been invited and have accepted can view a memory's contents.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          When you create a memory, you become its creator. When you are invited to a memory, you become a member. Both creators and members may add photos and videos to a memory they belong to.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Creator Permissions</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">The creator of a memory has the right to:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li>Edit the memory's title, description, and event date</li>
          <li>Invite or remove members</li>
          <li>Delete the memory entirely (which removes it for all members)</li>
        </ul>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Member Permissions</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">Members of a memory you did not create may:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li>View all photos and videos in the memory</li>
          <li>Add their own photos and videos</li>
          <li>Remove photos or videos they personally uploaded</li>
          <li>Leave the memory at any time (which removes it from their view but keeps it for everyone else)</li>
        </ul>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Content Removal Within Memories</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Each user may remove photos or videos they personally uploaded. Removing your own content makes it inaccessible to all members of that memory. The memory creator may also remove inappropriate content from their memory.
        </p>

        {/* Section 5 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">5. Linger Plus Subscription</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Linger offers an optional paid subscription called <span className="text-white font-medium">Linger Plus</span>. Free Linger accounts include core functionality at no cost. Linger Plus unlocks additional features.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Free Plan</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li>Up to 3 memories (created or joined)</li>
          <li>Photo capture in all camera modes (normal, disposable, digital)</li>
          <li>Photo upload from your device</li>
          <li>Friend connections and invites</li>
          <li>Viewing photos and videos in memories you join</li>
        </ul>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Linger Plus</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li>Unlimited memories</li>
          <li>Save photos and videos from memories to your device</li>
          <li>Record and upload videos</li>
          <li>Early access to new camera modes and features</li>
        </ul>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Pricing and Billing</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Linger Plus is offered as a monthly or annual subscription, with a free trial available to new subscribers. Pricing is shown in the app at the time of purchase. All billing is handled by Apple's App Store or Google Play, depending on where you downloaded Linger.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Subscription Renewal</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Subscriptions automatically renew at the end of each billing period unless canceled before the renewal date. You can manage or cancel your subscription through your Apple ID or Google Play account settings. <span className="text-white font-medium">We cannot directly cancel subscriptions or process refunds</span> — these are handled by Apple or Google according to their refund policies.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Trial Periods</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you start a free trial, your subscription will begin charging at the end of the trial unless you cancel before the trial ends. Cancellation must be done through your Apple ID or Google Play settings.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Changes to Plans and Pricing</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We reserve the right to change subscription pricing or modify the features included in any plan. Existing subscribers will be notified of price changes at least 30 days in advance. Continued use of a paid plan after a price change constitutes acceptance of the new price.
        </p>

        {/* Section 6 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">6. Your Content</h2>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Ownership</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          You own the photos, videos, and any other content you upload to Linger ("Your Content"). We do not claim ownership of Your Content.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">License You Grant Us</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          To operate the Services, you grant us a limited, worldwide, non-exclusive, royalty-free license to host, store, and display Your Content <span className="text-white font-medium">solely for the purpose of providing Linger to you and the members of memories you belong to</span>. This license ends when you delete Your Content or your account, except for backups that may take a limited time to fully remove.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">We Do Not Sell or Train On Your Content</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          <span className="text-white font-medium">We will never sell, license, or use your photos or videos for advertising, marketing, training AI models, or any purpose outside of providing the Services.</span>
        </p>

        {/* Section 7 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">7. Content of Other People</h2>
        <div className="bg-coral/5 border border-coral/30 rounded-md p-4 mb-6">
          <p className="text-muted-foreground">
            <span className="text-white font-medium">Important:</span> When you upload photos or videos that include other people, you are responsible for having their permission. Only upload content of people who are comfortable being included.
          </p>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Linger is designed for trusted groups — friends, family, partners — who agree to share memories together. Uploading photos of others without their knowledge or consent, especially in intimate or embarrassing situations, is not allowed and may violate law in your jurisdiction.
        </p>

        {/* Section 8 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">8. Acceptable Use</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You agree that you will <span className="text-white font-medium">not</span> use Linger to upload, share, or engage in any of the following. Violations may result in content removal, account suspension, or permanent ban:
        </p>
        <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8 ml-2">
          <li><span className="text-white font-medium">Inappropriate content</span> — material that is illegal, offensive, or otherwise unsuitable for the Services</li>
          <li><span className="text-white font-medium">Harassment or bullying</span> — threatening, intimidating, stalking, or targeting other users</li>
          <li><span className="text-white font-medium">Nudity or sexual content without consent</span> — including sexually explicit material, non-consensual intimate imagery, or any content that sexualizes minors</li>
          <li><span className="text-white font-medium">Violence, self-harm, or graphic content</span> — including depictions of cruelty, gore, or content that promotes self-harm</li>
          <li><span className="text-white font-medium">Spam or unauthorized promotion</span> — commercial solicitation, scams, repetitive content, or promotional material without permission</li>
          <li><span className="text-white font-medium">Impersonation or fake accounts</span> — pretending to be another person or misrepresenting your identity</li>
          <li><span className="text-white font-medium">Privacy violations</span> — sharing photos, videos, or personal information of others without their consent</li>
          <li><span className="text-white font-medium">Hate speech or discrimination</span> — content targeting individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics</li>
          <li><span className="text-white font-medium">Any other violation of these Terms</span> — including attempting to access content you are not invited to, reverse engineering the Services, distributing malware, interfering with our servers, or violating applicable law</li>
        </ul>

        {/* Section 9 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">9. Reporting and Moderation</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          To keep Linger safe, we operate a content reporting and moderation system.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">How to Report</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You can report any photo, video, memory, or user by tapping the report button on that content within the app. You'll be asked to select a reason and may add additional details.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          <span className="text-white font-medium">Reports are confidential.</span> The reported user will not be told who submitted the report.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">How We Review Reports</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">Our moderation team reviews reports in a timely manner. We may:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-2">
          <li><span className="text-white font-medium">Dismiss the report</span> if no violation is found</li>
          <li><span className="text-white font-medium">Remove the content</span> if it violates these Terms</li>
          <li><span className="text-white font-medium">Suspend or permanently ban the account</span> for serious or repeated violations</li>
        </ul>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Banned Accounts</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If your account is banned, you will be signed out of the Services and prevented from accessing them. You may not create a new account to evade a ban. Banned users will see a notification within the app explaining the suspension and how to contact us.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">Appeals</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          If you believe a moderation decision was made in error, you may appeal by emailing{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a> within six months of the decision. We will review appeals fairly and respond with our final decision.
        </p>

        {/* Section 10 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">10. Privacy</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Your privacy matters. Our{" "}
          <Link to="/privacy-policy" className="text-coral hover:underline transition-colors">Privacy Policy</Link>{" "}
          explains what information we collect, how we use it, and your rights. By using Linger, you agree to our collection and use of information as described there.
        </p>

        {/* Section 11 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">11. Account Termination</h2>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">By You</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You may delete your account at any time through the app settings or by contacting us at{" "}
          <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>. When you delete your account, we will delete your personal information within a reasonable period (typically within 30 days), subject to our Privacy Policy.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <span className="text-white font-medium">Important note about shared memories:</span> Content you added to shared memories may remain visible to other members even after you leave, unless you delete it before leaving. You can remove individual photos and videos you uploaded at any time.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          <span className="text-white font-medium">Subscription cancellation:</span> Deleting your Linger account does not automatically cancel any active Linger Plus subscription. To cancel a subscription, use your Apple ID or Google Play account settings before deleting your account.
        </p>

        <h3 className="font-serif text-lg font-medium text-white mt-6 mb-3">By Us</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We may suspend or terminate your account if you violate these Terms, if required by law, or if we reasonably believe your use of the Services could harm Linger, its users, or third parties. Where possible, we will give you notice and an opportunity to respond before termination.
        </p>

        {/* Section 12 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">12. Data Loss</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We work hard to keep your memories safe, but <span className="text-white font-medium">we cannot guarantee that content will never be lost</span>. Server failures, bugs, or other issues could result in data loss. We strongly recommend keeping your own backups of any photos or videos that are important to you.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          To the fullest extent permitted by law, we are not liable for any lost content.
        </p>

        {/* Section 13 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">13. Changes to the Services</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We may add, change, or remove features at any time. We may release updates to fix bugs, improve performance, or add new functionality. If we make a material change that negatively affects your use of the Services, we will provide reasonable notice.
        </p>

        {/* Section 14 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">14. Third-Party Services</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Linger relies on third-party services to operate. Your use of the Services may be subject to those providers' terms. We are not responsible for third-party services or content. The third-party services we use include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-2">
          <li><span className="text-white font-medium">Vibe Code</span> — backend hosting and infrastructure</li>
          <li><span className="text-white font-medium">Gmail (Google)</span> — for sending verification codes, password resets, and other transactional email</li>
          <li><span className="text-white font-medium">Apple Push Notification Service</span> — for delivering iOS push notifications</li>
          <li><span className="text-white font-medium">Apple App Store and Google Play</span> — for processing Linger Plus subscription payments</li>
          <li><span className="text-white font-medium">RevenueCat</span> — for managing and verifying subscription status</li>
        </ul>

        {/* Section 15 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">15. Disclaimers</h2>
        <div className="bg-coral/5 border border-coral/30 rounded-md p-4 mb-8">
          <p className="text-muted-foreground font-medium uppercase text-sm leading-relaxed">
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="text-muted-foreground mt-3 text-sm">
            We do not warrant that the Services will be uninterrupted, secure, or error-free, or that any content will be preserved without loss. You use the Services at your own risk.
          </p>
        </div>

        {/* Section 16 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">16. Limitation of Liability</h2>
        <div className="bg-coral/5 border border-coral/30 rounded-md p-4 mb-8">
          <p className="text-muted-foreground font-medium uppercase text-sm leading-relaxed">
            TO THE FULLEST EXTENT PERMITTED BY LAW, BAUMAN APPS LLC WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR LOSS OF CONTENT, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.
          </p>
          <p className="text-muted-foreground mt-3 text-sm">
            Our total liability to you for any claim arising out of or relating to these Terms or the Services is limited to the greater of (a) the amount you paid us in the 12 months before the claim, or (b) $100 USD.
          </p>
          <p className="text-muted-foreground mt-3 text-sm">
            Some jurisdictions do not allow the exclusion of certain warranties or limitations on certain types of liability. In those jurisdictions, the exclusions and limitations above apply only to the extent permitted by law.
          </p>
        </div>

        {/* Section 17 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">17. Indemnification</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You agree to defend, indemnify, and hold harmless Bauman Apps LLC, its members, managers, employees, and affiliates from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising out of:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-2">
          <li>Your use of the Services</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of the rights of any third party, including through Your Content</li>
          <li>Your violation of any applicable law</li>
        </ul>

        {/* Section 18 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">18. Governing Law and Disputes</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These Terms are governed by the laws of the State of New Jersey, United States, without regard to its conflict of laws principles. Any dispute arising out of or related to these Terms or the Services will be resolved in the state or federal courts located in New Jersey, and you consent to the jurisdiction of those courts.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <span className="text-white font-medium">For Canadian residents:</span> Nothing in this section affects your statutory rights to bring a claim in your local jurisdiction where applicable Canadian law requires it.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          <span className="text-white font-medium">For U.S. residents:</span> California residents and residents of other states with mandatory consumer protection laws retain all rights to local forum and governing law that cannot be waived by contract. California residents may report complaints to the California Department of Consumer Affairs, Consumer Information Division, at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834, or by telephone at 1-800-952-5210.
        </p>

        {/* Section 19 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">19. Apple App Store Terms</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">If you downloaded Linger from the Apple App Store, the following additional terms apply:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-2">
          <li>These Terms are between you and Bauman Apps LLC, not Apple. Apple is not responsible for the Services or their content.</li>
          <li>Your license to use Linger is limited to use on Apple-branded products that you own or control.</li>
          <li>Apple has no obligation to provide maintenance or support for Linger.</li>
          <li>In the event of any product warranty failure, you may notify Apple, and Apple will refund the purchase price (if any). Apple has no other warranty obligation.</li>
          <li>Apple is not responsible for addressing any claims relating to the Services, including product liability, legal compliance, or intellectual property claims.</li>
          <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</li>
          <li>Linger Plus subscriptions purchased through the App Store are subject to Apple's terms, including the auto-renewal of subscriptions and Apple's refund policies.</li>
        </ul>

        {/* Section 20 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">20. Google Play Store Terms</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">If you downloaded Linger from the Google Play Store, the following additional terms apply:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8 ml-2">
          <li>You acknowledge that the Google Play Terms of Service also govern your use of Linger.</li>
          <li>These Terms are between you and Bauman Apps LLC, not Google. Google is not responsible for the Services or their content.</li>
          <li>Google has no obligation to provide maintenance or support for Linger.</li>
          <li>Google is not responsible for addressing any claims relating to the Services, including product liability, legal compliance, or intellectual property claims.</li>
          <li>Linger Plus subscriptions purchased through Google Play are subject to Google's terms and refund policies.</li>
        </ul>

        {/* Section 21 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">21. Changes to These Terms</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We may update these Terms from time to time. If we make material changes, we will notify you through the app or by email. The updated Terms will take effect on the "Last updated" date above. Your continued use of the Services after changes take effect means you accept the updated Terms.
        </p>

        {/* Section 22 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">22. Miscellaneous</h2>
        <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8 ml-2">
          <li><span className="text-white font-medium">Entire Agreement.</span> These Terms and our Privacy Policy make up the entire agreement between you and Bauman Apps LLC regarding the Services.</li>
          <li><span className="text-white font-medium">Severability.</span> If any part of these Terms is found invalid or unenforceable, the rest will remain in effect.</li>
          <li><span className="text-white font-medium">No Waiver.</span> Our failure to enforce any part of these Terms is not a waiver of our right to enforce it later.</li>
          <li><span className="text-white font-medium">Assignment.</span> You may not transfer your rights under these Terms without our consent. We may transfer our rights and obligations to a successor in connection with a merger, acquisition, or sale of assets.</li>
        </ul>

        {/* Section 23 */}
        <h2 className="font-serif text-2xl font-medium text-white mt-10 mb-4">23. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you have questions about these Terms, contact us at:
        </p>
        <div className="bg-white/5 rounded-lg p-5 mt-4 mb-12 text-muted-foreground leading-relaxed">
          <p className="text-white font-medium">Bauman Apps LLC</p>
          <p>42 McKinley Avenue</p>
          <p>West Caldwell, NJ 07006</p>
          <p>United States</p>
          <p className="mt-2">
            <a href="mailto:support@thelingerapp.com" className="text-coral hover:underline">support@thelingerapp.com</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
