export interface FAQ {
  question: string;
  answer: string;
}

export interface BloodTestData {
  linkPrefix?: string;
  id: string;
  category: string;
  price: string;
  title: string;
  pillText: string;
  heroHeadingLine1: string;
  heroHeadingHighlight: string;
  heroHeadingLine2: string;
  heroDescription: string;
  aboutHeading: string;
  aboutTextParagraphs: string[];
  aboutMobileText: string;
  aboutImage: string;
  faqs: FAQ[];
  buttonText: string;
}

export const bloodTests: Record<string, BloodTestData> = {
  "vitamin-d": {
    id: "vitamin-d",
    category: "Blood Tests",
    price: "£49",
    title: "Vitamin D Blood Test",
    pillText: "Vitamin D Test · Milton Keynes",
    heroHeadingLine1: "Track Your ",
    heroHeadingHighlight: "Vitamin D",
    heroHeadingLine2: " Levels.",
    heroDescription: "Check your Vitamin D levels with our quick and accurate blood test. Essential for bone health, immune function, and overall well-being.",
    aboutHeading: "About the Vitamin D Blood Test",
    aboutTextParagraphs: [
      "Vitamin D is crucial for maintaining healthy bones, teeth, and muscles. It also supports your immune system and helps regulate your mood. Many people in the UK have low levels, especially during winter.",
      "Our comprehensive blood test will accurately measure your current Vitamin D levels, allowing you to take action if you are deficient and ensure you feel your best."
    ],
    aboutMobileText: "Check your Vitamin D levels with our quick and accurate blood test. Essential for bone health and immune function.",
    aboutImage: "vitamin D.webp",
    faqs: [
      {
        question: "How long do results take?",
        answer: "Results are typically available within 24-48 hours after your sample arrives at our laboratory."
      },
      {
        question: "Do I need to fast before this test?",
        answer: "No, fasting is not required for a Vitamin D blood test. You can eat and drink normally before your appointment."
      }
    ],
    buttonText: "Book Vitamin D Test"
  },
  "thyroid": {
    id: "thyroid",
    category: "Blood Tests",
    price: "£75",
    title: "Thyroid Function Test",
    pillText: "Thyroid Test · Milton Keynes",
    heroHeadingLine1: "Restore Your ",
    heroHeadingHighlight: "Thyroid",
    heroHeadingLine2: " Harmony.",
    heroDescription: "A detailed analysis of your thyroid hormones to help identify causes of fatigue, weight changes, and mood swings.",
    aboutHeading: "About the Thyroid Function Test",
    aboutTextParagraphs: [
      "Your thyroid gland controls your body's metabolism. If it's underactive (hypothyroidism) or overactive (hyperthyroidism), it can cause a wide range of symptoms including unexplained weight changes, chronic fatigue, and depression.",
      "This test measures key thyroid markers (such as TSH, FT3, and FT4) to give a complete picture of how well your thyroid is working."
    ],
    aboutMobileText: "A detailed analysis of your thyroid hormones to help identify causes of fatigue, weight changes, and mood swings.",
    aboutImage: "thyroid-blood-test.webp",
    faqs: [],
    buttonText: "Book Thyroid Test"
  },
  "cholesterol": {
    id: "cholesterol",
    category: "Blood Tests",
    price: "£39",
    title: "Cholesterol Test",
    pillText: "Cholesterol Test · Milton Keynes",
    heroHeadingLine1: "Defend Your Health with a ",
    heroHeadingHighlight: "Cholesterol",
    heroHeadingLine2: " Test.",
    heroDescription: "A comprehensive lipid panel measuring good and bad cholesterol levels to assess your cardiovascular risk.",
    aboutHeading: "About the Cholesterol Profile",
    aboutTextParagraphs: [
      "High cholesterol is a major risk factor for heart disease and stroke, yet it usually has no symptoms. A lipid profile measures your total cholesterol, LDL (bad cholesterol), HDL (good cholesterol), and triglycerides.",
      "Knowing your numbers allows you to make informed dietary and lifestyle changes to protect your cardiovascular health."
    ],
    aboutMobileText: "A comprehensive lipid panel measuring good and bad cholesterol levels to assess your cardiovascular risk.",
    aboutImage: "Cholesterol-Blood-Tests.webp",
    faqs: [],
    buttonText: "Book Cholesterol Test"
  },
  "cbc": {
    id: "cbc",
    category: "Blood Tests",
    price: "£45",
    title: "CBC / Full Blood Count",
    pillText: "Full Blood Count · Milton Keynes",
    heroHeadingLine1: "Discover Your Blueprint with a ",
    heroHeadingHighlight: "Full Blood Count",
    heroHeadingLine2: ".",
    heroDescription: "A broad screening test checking for anemia, infection, and many other common diseases.",
    aboutHeading: "About Full Blood Count (CBC)",
    aboutTextParagraphs: [
      "A Complete Blood Count (CBC) evaluates your overall health and detects a wide range of disorders, including anemia, infection, and leukemia. It measures red blood cells, white blood cells, and platelets."
    ],
    aboutMobileText: "A broad screening test checking for anemia, infection, and many other common diseases.",
    aboutImage: "CBC-full-blood count test.webp",
    faqs: [],
    buttonText: "Book Full Blood Count"
  },
  "diabetes": {
    id: "diabetes",
    category: "Blood Tests",
    price: "£45",
    title: "HbA1c/Diabetes Test",
    pillText: "Diabetes Test · Milton Keynes",
    heroHeadingLine1: "Take Control with a ",
    heroHeadingHighlight: "Diabetes",
    heroHeadingLine2: " Test.",
    heroDescription: "Measure your average blood sugar levels over the past 2-3 months to screen for or monitor diabetes.",
    aboutHeading: "About the HbA1c Diabetes Test",
    aboutTextParagraphs: [
      "The HbA1c test is a blood test that shows your average blood sugar (glucose) levels over the past two to three months. It is used to diagnose type 2 diabetes and prediabetes, and to monitor how well you are managing your diabetes."
    ],
    aboutMobileText: "Measure your average blood sugar levels over the past 2-3 months to screen for or monitor diabetes.",
    aboutImage: "HbA1c-diabetes test.webp",
    faqs: [],
    buttonText: "Book Diabetes Test"
  },
  "iron": {
    id: "iron",
    category: "Blood Tests",
    price: "From £35",
    title: "Iron/Ferritin Blood Test",
    pillText: "Iron Test · Milton Keynes",
    heroHeadingLine1: "Revitalize Your ",
    heroHeadingHighlight: "Iron",
    heroHeadingLine2: " Reserves.",
    heroDescription: "Evaluate your body's iron stores to check for deficiency or overload, often causing tiredness or low energy.",
    aboutHeading: "About Iron and Ferritin Tests",
    aboutTextParagraphs: [
      "Iron is essential for producing red blood cells. Low iron levels can lead to anemia, causing fatigue and weakness, while too much iron can be toxic to your organs. This test helps pinpoint the exact cause of your symptoms."
    ],
    aboutMobileText: "Evaluate your body's iron stores to check for deficiency or overload, often causing tiredness or low energy.",
    aboutImage: "iron-ferritin test.webp",
    faqs: [],
    buttonText: "Book Iron Test"
  },
  "kidney": {
    id: "kidney",
    category: "Blood Tests",
    price: "From £35",
    title: "Kidney Function Test",
    pillText: "Kidney Test · Milton Keynes",
    heroHeadingLine1: "Optimize Your ",
    heroHeadingHighlight: "Kidney",
    heroHeadingLine2: " Health.",
    heroDescription: "Check how well your kidneys are filtering waste from your blood.",
    aboutHeading: "About Kidney Function Testing",
    aboutTextParagraphs: [
      "Your kidneys remove waste products and excess fluid from your body. A kidney function test measures levels of urea, creatinine, and certain dissolved salts (electrolytes) to determine if your kidneys are working properly."
    ],
    aboutMobileText: "Check how well your kidneys are filtering waste from your blood.",
    aboutImage: "kidney-test.webp",
    faqs: [],
    buttonText: "Book Kidney Test"
  },
  "cortisol": {
    id: "cortisol",
    category: "Blood Tests",
    price: "From £35",
    title: "Cortisol Blood Test",
    pillText: "Cortisol Test · Milton Keynes",
    heroHeadingLine1: "Master Your Stress with a ",
    heroHeadingHighlight: "Cortisol",
    heroHeadingLine2: " Test.",
    heroDescription: "Measure your cortisol levels to evaluate adrenal gland function and stress response.",
    aboutHeading: "About the Cortisol Test",
    aboutTextParagraphs: [
      "Cortisol is a hormone produced by your adrenal glands, often called the 'stress hormone'. Abnormal levels can indicate disorders of the adrenal glands or pituitary gland, or simply chronic high stress."
    ],
    aboutMobileText: "Measure your cortisol levels to evaluate adrenal gland function and stress response.",
    aboutImage: "cortisol blood test.webp",
    faqs: [],
    buttonText: "Book Cortisol Test"
  },
  "psa": {
    id: "psa",
    category: "Blood Tests",
    price: "From £35",
    title: "PSA / Prostate Test",
    pillText: "PSA Test · Milton Keynes",
    heroHeadingLine1: "Proactive ",
    heroHeadingHighlight: "Prostate",
    heroHeadingLine2: " Protection.",
    heroDescription: "A crucial screening test for men to check for prostate enlargement, inflammation, or prostate cancer risk.",
    aboutHeading: "About the PSA Test",
    aboutTextParagraphs: [
      "Prostate-Specific Antigen (PSA) is a protein produced by both normal and malignant cells of the prostate gland. Elevated levels can indicate prostate cancer or noncancerous conditions such as prostatitis or an enlarged prostate."
    ],
    aboutMobileText: "A crucial screening test for men to check for prostate enlargement or cancer risk.",
    aboutImage: "prostate-test.webp",
    faqs: [],
    buttonText: "Book PSA Test"
  },
  "liver": {
    id: "liver",
    category: "Blood Tests",
    price: "From £35",
    title: "Liver Function Test",
    pillText: "Liver Test · Milton Keynes",
    heroHeadingLine1: "Support Your Body with a ",
    heroHeadingHighlight: "Liver",
    heroHeadingLine2: " Test.",
    heroDescription: "Assess the health of your liver by measuring enzymes, proteins, and bilirubin in your blood.",
    aboutHeading: "About Liver Function Testing",
    aboutTextParagraphs: [
      "The liver plays a vital role in detoxifying blood, producing proteins, and aiding digestion. A liver function test can help diagnose liver diseases, monitor treatment, or check for liver damage from medications."
    ],
    aboutMobileText: "Assess the health of your liver by measuring enzymes, proteins, and bilirubin.",
    aboutImage: "liver-function-test.jpg",
    faqs: [],
    buttonText: "Book Liver Test"
  },
  "iv-vitamin-d": {
    id: "iv-vitamin-d",
    linkPrefix: "/blog",
    category: "IV Vitamin Drips",
    price: "£50",
    title: "Vitamin D IV Drip",
    pillText: "Vitamin D IV Drip · Milton Keynes",
    heroHeadingLine1: "Experience the ",
    heroHeadingHighlight: "Vitamin D",
    heroHeadingLine2: " IV Drip.",
    heroDescription: "Deliver a powerful, immediate dose of Vitamin D directly into your bloodstream to boost your immune system, improve your mood, and enhance your energy levels.",
    aboutHeading: "About Vitamin D IV Drip",
    aboutTextParagraphs: [
      "Vitamin D is essential for maintaining strong bones, a robust immune system, and optimal mood regulation. Despite its importance, many people in the UK suffer from Vitamin D deficiency due to limited sunlight exposure, particularly during the winter months. A lack of Vitamin D can lead to chronic fatigue, weakened immunity, and even bone pain. Oral supplements can help, but they often have low absorption rates as they must pass through the digestive system.",
      "Our Vitamin D IV Drip therapy at SVR Aesthetics in Milton Keynes bypasses the digestive tract entirely, delivering a highly concentrated dose of this vital nutrient directly into your bloodstream. This ensures 100% bioavailability, meaning your body can immediately utilise the vitamin to support immune function, boost energy levels, and enhance your overall well-being. It is the fastest and most effective way to restore optimal Vitamin D levels.",
      "The treatment is administered by our highly trained medical professionals in a comfortable and relaxing clinical environment. During your consultation, we will assess your current health status and determine if a Vitamin D IV Drip is the right choice for you. The procedure takes approximately 30 to 45 minutes, allowing you to relax while your body receives the ultimate wellness boost.",
      "Whether you are looking to combat seasonal affective disorder (SAD), recover from illness more rapidly, or simply maintain peak physical health, our IV Vitamin D therapy provides rapid and noticeable results. Book your appointment today at SVR Aesthetics and take a proactive step towards long-term health and vitality."
    ],
    aboutMobileText: "Deliver a powerful dose of Vitamin D directly into your bloodstream to instantly boost your immunity, mood, and energy.",
    aboutImage: "vitamin D.webp",
    faqs: [
      {
        question: "What is the difference between the blood test and the IV drip?",
        answer: "The blood test is a diagnostic tool used to measure your current Vitamin D levels and check for deficiency. The IV drip is a wellness treatment that actively delivers a high dose of Vitamin D into your body to boost your levels immediately."
      }
    ],
    buttonText: "Book IV Drip"
  },
  "vitamin-b12": {
    id: "vitamin-b12",
    linkPrefix: "/blog",
    category: "IV Vitamin Drips",
    price: "£30",
    title: "Vitamin B12 IV Drip",
    pillText: "Vitamin B12 IV Drip · Milton Keynes",
    heroHeadingLine1: "Boundless Energy with a ",
    heroHeadingHighlight: "Vitamin B12",
    heroHeadingLine2: " Drip.",
    heroDescription: "Experience an immediate boost in your energy levels and overall vitality with our premium Vitamin B12 IV Drip.",
    aboutHeading: "About Vitamin B12 IV Drip",
    aboutTextParagraphs: [
      "Vitamin B12 is a powerhouse nutrient responsible for nerve function, red blood cell production, and the synthesis of DNA. It is a critical component of cellular energy production, yet B12 deficiency is surprisingly common, especially among vegetarians, vegans, and older adults. Symptoms of low B12 can be debilitating, often presenting as severe fatigue, brain fog, mood swings, and general lethargy.",
      "At SVR Aesthetics, our Vitamin B12 IV Drip offers an immediate and highly effective solution. By delivering pure Vitamin B12 directly into your circulation, we ensure maximum absorption without the interference of digestive enzymes. This direct delivery method provides a rapid and sustained energy boost, instantly lifting the fog of fatigue and restoring your mental clarity and physical stamina.",
      "This therapy is highly recommended for professionals with demanding schedules, athletes looking for enhanced recovery, or anyone feeling consistently drained. The infusion process is quick, generally taking around 30 minutes, and is performed in our state-of-the-art clinic in Milton Keynes by experienced practitioners. You can return to your daily activities immediately after the treatment with renewed vigor.",
      "Don't let fatigue hold you back from living your best life. Regular Vitamin B12 infusions can help maintain a healthy nervous system, improve your mood, and keep your energy levels consistently high. Experience the transformative effects of our B12 IV therapy at SVR Aesthetics and reclaim your peak performance today."
    ],
    aboutMobileText: "Experience an immediate boost in your energy levels and overall vitality with our premium Vitamin B12 IV Drip.",
    aboutImage: "vitamin_b12_iv.png",
    faqs: [],
    buttonText: "Book IV Drip"
  },
  "iv-energy-boost": {
    id: "iv-energy-boost",
    linkPrefix: "/blog",
    category: "IV Vitamin Drips",
    price: "£150",
    title: "IV Energy Boost",
    pillText: "IV Energy Boost · Milton Keynes",
    heroHeadingLine1: "The Ultimate Recharge: ",
    heroHeadingHighlight: "IV Energy Boost",
    heroHeadingLine2: ".",
    heroDescription: "Combat fatigue and feel instantly revitalized with our specially formulated IV Energy Boost.",
    aboutHeading: "About IV Energy Boost",
    aboutTextParagraphs: [
      "In today\u2019s fast-paced world, chronic stress, poor sleep, and demanding lifestyles can leave you feeling completely depleted. When oral vitamins and dietary changes aren't enough to combat persistent exhaustion, advanced intravenous therapy provides a powerful alternative. Our IV Energy Boost is a specially formulated cocktail of essential vitamins, minerals, and amino acids designed to revitalize your body at the cellular level.",
      "The proprietary blend used at SVR Aesthetics includes high doses of B-Complex vitamins, Vitamin C, Magnesium, and targeted amino acids. This potent combination works synergistically to enhance ATP production\u2014the primary energy carrier in your cells. By delivering these nutrients intravenously, you achieve 100% absorption instantly, leading to an immediate surge in natural, sustained energy without the crash associated with caffeine or sugar.",
      "Our clients often report feeling lighter, more focused, and significantly more energized before the 45-minute treatment is even complete. The IV Energy Boost is ideal for recovering from jet lag, preparing for a major athletic event, or simply overcoming the midday slump. It also supports immune function and helps flush out metabolic toxins, leaving you feeling entirely rejuvenated.",
      "Administered safely in our premium Milton Keynes clinic, this therapy is tailored to meet your unique physiological needs. Say goodbye to reliance on energy drinks and temporary fixes. Invest in your cellular health and unlock boundless, sustainable energy with the IV Energy Boost at SVR Aesthetics."
    ],
    aboutMobileText: "Combat fatigue and feel instantly revitalized with our specially formulated IV Energy Boost.",
    aboutImage: "iv_energy_boost.png",
    faqs: [],
    buttonText: "Book IV Drip"
  },
  "iv-skin-brightening": {
    id: "iv-skin-brightening",
    linkPrefix: "/blog",
    category: "IV Vitamin Drips",
    price: "From £100",
    title: "IV Skin Brightening",
    pillText: "IV Skin Brightening · Milton Keynes",
    heroHeadingLine1: "Radiant Glow with ",
    heroHeadingHighlight: "IV Skin Brightening",
    heroHeadingLine2: ".",
    heroDescription: "Rejuvenate your skin and achieve a radiant, youthful glow with our Skin Brightening IV therapy.",
    aboutHeading: "About IV Skin Brightening",
    aboutTextParagraphs: [
      "Radiant, glowing skin starts from within. While topical creams and serums can address the surface of your skin, true cellular rejuvenation requires deep, internal nourishment. Over time, environmental toxins, UV exposure, and oxidative stress can lead to hyperpigmentation, uneven skin tone, and premature aging. Our IV Skin Brightening therapy is designed to combat these issues at the source.",
      "This advanced infusion features a high concentration of Glutathione, known as the body's 'master antioxidant', alongside high-dose Vitamin C. Glutathione works tirelessly to neutralize free radicals, detoxify the liver, and inhibit the production of melanin\u2014the pigment responsible for dark spots and uneven tone. The result is a naturally brighter, more luminous, and significantly clearer complexion.",
      "By delivering these powerful antioxidants directly into your bloodstream, SVR Aesthetics ensures complete absorption that oral supplements simply cannot match. The synergistic effect of Glutathione and Vitamin C also boosts collagen production, improving skin elasticity and reducing the appearance of fine lines and wrinkles. It is the ultimate anti-aging and skin-perfecting treatment.",
      "Experience the pinnacle of aesthetic wellness in our luxurious Milton Keynes clinic. The IV Skin Brightening drip takes roughly 45 to 60 minutes and requires no downtime. For optimal results, a course of treatments is often recommended to achieve and maintain that flawless, lit-from-within glow. Reveal your best skin yet with SVR Aesthetics."
    ],
    aboutMobileText: "Rejuvenate your skin and achieve a radiant, youthful glow with our Skin Brightening IV therapy.",
    aboutImage: "iv_skin_brightening.png",
    faqs: [],
    buttonText: "Book IV Drip"
  },
  "iv-nad": {
    id: "iv-nad",
    linkPrefix: "/blog",
    category: "IV Vitamin Drips",
    price: "From £200",
    title: "IV NAD+",
    pillText: "IV NAD+ Therapy · Milton Keynes",
    heroHeadingLine1: "Cellular Rejuvenation with ",
    heroHeadingHighlight: "IV NAD+",
    heroHeadingLine2: ".",
    heroDescription: "Restore cellular energy, improve cognitive function, and slow down the aging process with our NAD+ IV Therapy.",
    aboutHeading: "About IV NAD+ Therapy",
    aboutTextParagraphs: [
      "Nicotinamide Adenine Dinucleotide (NAD+) is a miraculous coenzyme found in every living cell in your body. It is the fundamental catalyst for cellular energy and mitochondrial health. However, as we age, our natural levels of NAD+ decline drastically, leading to visible signs of aging, cognitive decline, reduced metabolic function, and chronic fatigue. Replenishing these levels is the frontier of anti-aging medicine.",
      "Our IV NAD+ Therapy at SVR Aesthetics is a cutting-edge treatment that floods your system with this vital coenzyme. By restoring your cellular NAD+ pools, this therapy effectively turns back the biological clock. Clients experience profound improvements in mental clarity, memory retention, and concentration. It effectively lifts brain fog and significantly enhances overall cognitive function.",
      "Beyond the brain, NAD+ therapy promotes cellular repair, DNA protection, and metabolic efficiency. It has been shown to improve mood, aid in addiction recovery, and provide a massive, sustained boost in physical energy. Because it acts on a foundational cellular level, the benefits are comprehensive and long-lasting, far surpassing traditional wellness treatments.",
      "Administering NAD+ requires a slow and careful infusion process, typically lasting between 2 to 4 hours, all monitored by our expert clinical staff in Milton Keynes. Relax in our premium facility while you receive the ultimate longevity and bio-hacking treatment available today. Invest in your future health and cognitive brilliance with IV NAD+ Therapy."
    ],
    aboutMobileText: "Restore cellular energy, improve cognitive function, and slow down the aging process with our NAD+ IV Therapy.",
    aboutImage: "iv_nad_therapy.png",
    faqs: [],
    buttonText: "Book NAD+ Therapy"
  },
  "well-man": {
    id: "well-man",
    linkPrefix: "/blog",
    category: "Health Panels",
    price: "£159",
    title: "Well Man Profile",
    pillText: "Well Man Profile · Milton Keynes",
    heroHeadingLine1: "Peak Performance: ",
    heroHeadingHighlight: "Well Man",
    heroHeadingLine2: " Profile.",
    heroDescription: "A comprehensive health check tailored specifically for men to monitor key health markers.",
    aboutHeading: "About Well Man Profile",
    aboutTextParagraphs: [
      "Proactive health management is the key to longevity and peak performance. The Well Man Profile at SVR Aesthetics is a highly comprehensive, advanced blood panel specifically tailored to address the unique physiological needs of men. This extensive screening goes far beyond a standard check-up, offering a deep dive into your hormonal balance, cardiovascular health, and vital organ function.",
      "This profile meticulously analyses key biomarkers including testosterone levels, prostate-specific antigen (PSA), full lipid profiles (cholesterol), liver and kidney function, and essential vitamins like D and B12. By establishing a clear baseline of your internal health, we can identify subtle imbalances or early warning signs long before they develop into serious clinical conditions. Knowledge is the ultimate tool for prevention.",
      "Whether you are an athlete looking to optimize your performance, a professional managing high stress, or simply a man who wants to take control of his long-term health, this panel provides the critical data you need. The blood draw is quick and performed in our private, comfortable clinic in Milton Keynes by our expert phlebotomists, ensuring a seamless and pain-free experience.",
      "Once your comprehensive results are ready, our clinical team will guide you through the findings, offering tailored advice on lifestyle modifications, supplementation, or further treatments. Stop guessing about your health and start optimizing it. Book your Well Man Profile at SVR Aesthetics today and invest in a healthier, stronger tomorrow."
    ],
    aboutMobileText: "A comprehensive health check tailored specifically for men to monitor key health markers.",
    aboutImage: "well_man_test.png",
    faqs: [],
    buttonText: "Book Well Man Test"
  },
  "well-woman": {
    id: "well-woman",
    linkPrefix: "/blog",
    category: "Health Panels",
    price: "£159",
    title: "Well Woman Profile",
    pillText: "Well Woman Profile · Milton Keynes",
    heroHeadingLine1: "Empower Your Wellness: ",
    heroHeadingHighlight: "Well Woman",
    heroHeadingLine2: " Profile.",
    heroDescription: "A comprehensive health check tailored specifically for women to monitor essential health markers.",
    aboutHeading: "About Well Woman Profile",
    aboutTextParagraphs: [
      "Women\u2019s health is complex and dynamic, requiring a nuanced and comprehensive approach to testing. The Well Woman Profile at SVR Aesthetics is our most advanced diagnostic panel, designed specifically to evaluate the intricate balance of female hormones, thyroid function, cardiovascular health, and essential nutritional markers. It is the ultimate health MOT for women of all ages.",
      "This extensive blood test provides a detailed overview of your internal wellness. It checks critical biomarkers including full thyroid function (TSH, Free T3, Free T4), female hormone profiles (estrogen, progesterone, FSH, LH), iron studies (ferritin), vitamin levels (D and B12), and complete metabolic and lipid panels. This data is vital for diagnosing the root causes of fatigue, weight fluctuations, mood changes, and menstrual irregularities.",
      "By identifying these subtle imbalances early, you can take targeted action to restore harmony to your body. Whether you are navigating the complexities of menopause, struggling with low energy, or simply prioritizing your long-term wellness, the Well Woman Profile empowers you with clinical certainty. The sample collection is swift and handled with the utmost care in our Milton Keynes clinic.",
      "Your results will provide a clear, actionable roadmap for your health journey. Our clinical team is dedicated to helping you interpret these findings and guiding you toward the best nutritional, lifestyle, or therapeutic interventions. Prioritize yourself and unlock your optimal health with the Well Woman Profile at SVR Aesthetics."
    ],
    aboutMobileText: "A comprehensive health check tailored specifically for women to monitor essential health markers.",
    aboutImage: "well_woman_test.png",
    faqs: [],
    buttonText: "Book Well Woman Test"
  }
};
