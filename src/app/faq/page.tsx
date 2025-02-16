import Link from "next/link";

const FAQPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions About Bankruptcy</h1>
      <p className="mb-4">
        Get answers to common questions about bankruptcy, debt relief, and financial recovery.
      </p>

      {/* FAQ List */}
      <div className="space-y-4">
        
        <details className="border rounded-md p-4">
          <summary className="font-semibold cursor-pointer">What is the difference between Chapter 7 and Chapter 13 bankruptcy?</summary>
          <p className="mt-2">
            Chapter 7 eliminates most debts entirely, while Chapter 13 allows you to create a structured repayment plan.
          </p>
        </details>

        <details className="border rounded-md p-4">
          <summary className="font-semibold cursor-pointer">Will bankruptcy stop wage garnishment?</summary>
          <p className="mt-2">
            Yes. Once you file for bankruptcy, an **automatic stay** is issued by the court, stopping wage garnishments immediately.
          </p>
        </details>

        <details className="border rounded-md p-4">
          <summary className="font-semibold cursor-pointer">How long does bankruptcy stay on my credit report?</summary>
          <p className="mt-2">
            Chapter 7 remains for **10 years**, while Chapter 13 stays on your credit report for **7 years**.
          </p>
        </details>

        {/* New FAQs Added */}
        
        <details className="border rounded-md p-4">
          <summary className="font-semibold cursor-pointer">Can I keep my house and car if I file for bankruptcy?</summary>
          <p className="mt-2">
            It depends on your case. **Chapter 7** allows you to keep exempt property, and **Chapter 13** lets you restructure payments to avoid foreclosure and repossession.
          </p>
        </details>

        <details className="border rounded-md p-4">
          <summary className="font-semibold cursor-pointer">Will bankruptcy affect my spouse&apos;s credit?</summary>
          <p className="mt-2">
            If you file alone, your bankruptcy should not impact your spouse&apos;s credit. However, if you have **joint debts**, your spouse may still be responsible.
          </p>
        </details>

        <details className="border rounded-md p-4">
          <summary className="font-semibold cursor-pointer">What debts cannot be discharged in bankruptcy?</summary>
          <p className="mt-2">
            Certain debts cannot be eliminated, including **student loans (in most cases), child support, alimony, recent tax debts,** and fines from criminal cases.
          </p>
        </details>
      </div>

      {/* Back to Home */}
      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default FAQPage;
