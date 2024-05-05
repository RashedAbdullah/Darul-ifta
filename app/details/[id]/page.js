import RelatedFatwas from "@/components/related-fatwas";

const DetailsPage = () => {
  return (
    <div className="lg:mx-20 mx-10 my-10">
      <div className="lg:grid grid-cols-4 gap-5">
        <div className="flex flex-col gap-5 col-span-3 bg-white p-10 rounded shadow-lg">
          {/* Name and address */}
          <div>
            <h3 className="text-2xl">আমান উল্লাহ - রাজশাহী</h3>
            <p className="italic text-sm">২০/৫/২০২৪ ইং</p>
          </div>

          {/* Question */}
          <div>
            <p>
              <span className="text-2xl">প্রশ্ন: </span>
              <span>
                হুজুর, আমার কয়েকটা ছাগল আছে। এগুলোর দুধ বিক্রি করেই আমি সংসারের
                খরচ জোগাড় করি। দুধ দোহনের সময় কখনো কখনো সেগুলো মল ত্যাগ করে।
                অনেক সতর্কতা সত্ত্বেও দেখা যায়, হঠাৎ এক-দুইটা বিষ্ঠা দুধের
                বালতিতে পড়ে যায়। আমি সঙ্গে সঙ্গেই তা উঠিয়ে ফেলে দেই। তো
                এক্ষেত্রে কি আমার জন্য সেই দুধ বিক্রি করা বৈধ হবে?
              </span>
            </p>
          </div>

          {/* Answer */}
          <div>
            <p>
              <span className="text-2xl">উত্তর: </span>
              <span>
                দুধ দোহনকালে অল্প বিষ্ঠা বালতিতে পড়ামাত্র যদি বিলম্ব না করে
                তৎক্ষণাৎ উঠিয়ে ফেলা হয়, তাহলে সে দুধ নাপাক গণ্য হবে না; বরং তা
                পবিত্র গণ্য হবে। তা পান করা কিংবা বিক্রি করা জায়েয আছে। কিন্তু
                যদি দুধে বিষ্ঠা বেশি পরিমাণে পড়ে, কিংবা অল্প পরিমাণে পড়ার পর
                তৎক্ষণাৎ না ওঠানো হয়, বরং বিলম্বে ওঠানো হয়, যার ফলে বিষ্ঠার রঙ
                দুধে প্রকাশ পায়, অথবা তা ফেটে যায়, তাহলে সে দুধ নাপাক গণ্য হবে।
                এক্ষেত্রে তা পান করা বা বিক্রি করা কোনোটাই জায়েয হবে না।
              </span>
            </p>
          </div>

          {/* References */}
          <div className="italic">
            <p>
              <span>রেফারেন্স: </span>
              <span>
                আলফাতাওয়া মিন আকাবীলিল মাশায়েখ, পৃ. ১৭; ফাতাওয়া খানিয়া ১/২৭;
                শরহুল মুনইয়া, পৃ. ১৬১; আদ্দুররুল মুখতার ১/২২১
              </span>
            </p>
          </div>
        </div>
        <RelatedFatwas />
      </div>
    </div>
  );
};

export default DetailsPage;
