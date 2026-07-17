export interface BloodTestData {
  id: string;
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
  faqs?: { question: string; answer: string }[];
  buttonText: string;
}

export const bloodTests: Record<string, BloodTestData> = {
  "vitamin-d": {
    id: "vitamin-d",
    title: "Vitamin D Blood Test",
    pillText: "Vitamin D Blood Test · Milton Keynes",
    heroHeadingLine1: "Know Your Levels.",
    heroHeadingHighlight: "Vitamin D",
    heroHeadingLine2: " Testing.",
    heroDescription: "Fatigue, low mood, and poor immunity can be linked to low Vitamin D. A simple blood test provides clarity so you can take control of your well-being.",
    aboutHeading: "About Vitamin D Test",
    aboutTextParagraphs: [
      "Vitamin D is essential for strong bones, muscles, and a healthy immune system because it helps absorb calcium and maintain calcium and phosphate levels. Its deficiency leads to low energy levels and bone and muscle pain. The patient is also at increased risk of frequent illness, as it is crucial for supporting immune health.",
      "Additionally, low levels of vitamin D can lead to bone disorders in children, while very high levels can cause toxicity and other health issues. If you are encountering health issues like this, then your medical specialist will typically recommend a vitamin D test. It determines whether your vitamin D levels are within the optimal range."
    ],
    aboutMobileText: "Fatigue, low mood, and poor immunity can be linked to low Vitamin D. A simple blood test determines whether your levels are optimal, providing clarity so you can take control of your well-being.",
    aboutImage: "vitamin D.webp",
    faqs: [
      {
        question: "Why is Vitamin D important for my health?",
        answer: "Vitamin D is essential for strong bones, muscles, and a healthy immune system because it helps absorb calcium and maintain calcium and phosphate levels."
      },
      {
        question: "What are the symptoms of low Vitamin D?",
        answer: "Deficiency can lead to low energy levels, fatigue, low mood, poor immunity, and bone and muscle pain."
      }
    ],
    buttonText: "Book Vitamin D Test"
  },
  "iron": {
    id: "iron",
    title: "Iron/Ferritin Blood Test",
    pillText: "Iron/Ferritin Blood Test · Milton Keynes",
    heroHeadingLine1: "Check Your Energy.",
    heroHeadingHighlight: "Iron/Ferritin",
    heroHeadingLine2: " Testing.",
    heroDescription: "A ferritin test measures the amount of ferritin in your blood, a protein that plays a crucial role in storing iron within your body's cells.",
    aboutHeading: "About Iron/Ferritin Blood Test",
    aboutTextParagraphs: [
      "A ferritin test measures the amount of ferritin in your blood. Well, if you are wondering what ferritin is, it is a protein that plays a crucial role in storing iron within your body's cells. Iron helps your body make healthy red blood cells. Red blood cells carry oxygen. Having too little or too much iron can indicate serious health problems.",
      "Healthcare specialists often recommend a ferritin blood test to analyze the amount of iron in your body and evaluate how much of it is stored in your tissues, so they can take proper steps to improve your health.",
      "Testing both iron and ferritin levels provides them with a clear picture of your iron status and helps detect conditions caused by either iron deficiency or excess iron. Low levels of iron or ferritin may indicate iron-deficiency anemia, whereas high levels may signal conditions such as hemochromatosis."
    ],
    aboutMobileText: "A ferritin test measures the amount of ferritin in your blood, a protein that plays a crucial role in storing iron within your body's cells.",
    aboutImage: "iron-ferritin test.webp",
    faqs: [
      {
        question: "What exactly is ferritin?",
        answer: "Ferritin is a protein that plays a crucial role in storing iron within your body's cells. Iron itself helps your body make healthy red blood cells that carry oxygen."
      },
      {
        question: "Why should I test both iron and ferritin?",
        answer: "Testing both provides a clear picture of your iron status to detect conditions caused by either iron deficiency (like anemia) or excess iron (like hemochromatosis)."
      }
    ],
    buttonText: "Book Iron Test"
  },
  "cholesterol": {
    id: "cholesterol",
    title: "Cholesterol Test",
    pillText: "Cholesterol Test · Milton Keynes",
    heroHeadingLine1: "Check Your Risk.",
    heroHeadingHighlight: "Cholesterol",
    heroHeadingLine2: " Testing.",
    heroDescription: "A cholesterol test helps assess your risk for narrowed or blocked arteries by measuring levels of different types of cholesterol and fats in your blood.",
    aboutHeading: "About Cholesterol Test",
    aboutTextParagraphs: [
      "A cholesterol test is a blood test that is also known as a lipid panel or lipid profile. Cholesterol plays a crucial role in producing hormones. However, if you are dealing with high cholesterol levels, especially low-density lipoprotein (LDL), then it can lead to major health risks.",
      "This test provides a better insight into your health by measuring the levels of different types of cholesterol and fats (lipids), specifically triglycerides, in your blood. It helps your medical expert assess your risk for narrowed or blocked arteries."
    ],
    aboutMobileText: "A cholesterol test helps assess your risk for narrowed or blocked arteries by measuring levels of different types of cholesterol and fats in your blood.",
    aboutImage: "Cholesterol-Blood-Tests.webp",
    faqs: [
      {
        question: "Why should I get a cholesterol test?",
        answer: "High cholesterol levels, especially low-density lipoprotein (LDL), can lead to major health risks. This test helps assess your risk for narrowed or blocked arteries."
      },
      {
        question: "What does the cholesterol test measure?",
        answer: "It measures the levels of different types of cholesterol and fats (lipids), specifically triglycerides, in your blood."
      }
    ],
    buttonText: "Book Cholesterol Test"
  },
  "thyroid": {
    id: "thyroid",
    title: "Thyroid Function Test",
    pillText: "Thyroid Function Test · Milton Keynes",
    heroHeadingLine1: "Check Your Balance.",
    heroHeadingHighlight: "Thyroid",
    heroHeadingLine2: " Testing.",
    heroDescription: "A thyroid function test is a simple blood test that indicates how well your thyroid gland is functioning. This test also diagnoses thyroid gland disorders and assesses the response to treatment.",
    aboutHeading: "About Thyroid Function Test",
    aboutTextParagraphs: [
      "A thyroid function test is a simple blood test that indicates how well your thyroid gland is functioning. This test also diagnoses thyroid gland disorders and assesses the response to treatment.",
      "In simple words, the thyroid produces hormones commonly known as thyroxine (T4) and triiodothyronine (T3). This test evaluates the balance of thyroid hormones and thyroid-stimulating hormone (TSH). Detecting imbalances early plays a crucial role in preventing major health complications."
    ],
    aboutMobileText: "A thyroid function test is a simple blood test that indicates how well your thyroid gland is functioning. This test also diagnoses thyroid gland disorders and assesses the response to treatment.",
    aboutImage: "thyroid-blood-test.webp",
    faqs: [
      {
        question: "What does the thyroid function test indicate?",
        answer: "It evaluates the balance of thyroid hormones—thyroxine (T4) and triiodothyronine (T3)—and thyroid-stimulating hormone (TSH) to see how well your thyroid gland is functioning."
      },
      {
        question: "Why is early detection important?",
        answer: "Detecting imbalances early plays a crucial role in preventing major health complications and assessing the response to treatment."
      }
    ],
    buttonText: "Book Thyroid Test"
  },
  "kidney": {
    id: "kidney",
    title: "Kidney Function Test",
    pillText: "Kidney Function Test · Milton Keynes",
    heroHeadingLine1: "Check Your Kidneys.",
    heroHeadingHighlight: "Kidney Function",
    heroHeadingLine2: " Testing.",
    heroDescription: "A kidney function test is a group of simple blood and urine tests that evaluate how well your kidneys are functioning.",
    aboutHeading: "About Kidney Function Test",
    aboutTextParagraphs: [
      "A kidney function test is a group of simple blood and urine tests that evaluate how well your kidneys are functioning. The kidneys might not function well when they are damaged or under stress, leading to more serious health problems. If you have symptoms of kidney problems, doctors may recommend this test to analyze how efficiently your kidneys filter waste and maintain chemical balance. Detecting problems early leaves room for timely treatment.",
      "In case your test detects abnormal results, then you must prefer consulting a healthcare provider. Depending on the severity of your condition, they might ask for additional tests, such as urine tests and imaging studies, to accurately examine underlying causes of kidney disease."
    ],
    aboutMobileText: "A kidney function test is a group of simple blood and urine tests that evaluate how well your kidneys are functioning.",
    aboutImage: "kidney-test.webp",
    faqs: [
      {
        question: "Why would I need a kidney function test?",
        answer: "The kidneys might not function well when they are damaged or under stress. If you have symptoms of kidney problems, this test analyzes how efficiently your kidneys filter waste."
      },
      {
        question: "What happens if the results are abnormal?",
        answer: "You should consult a healthcare provider. Depending on the severity, they might ask for additional tests, such as imaging studies, to examine underlying causes."
      }
    ],
    buttonText: "Book Kidney Test"
  },
  "cortisol": {
    id: "cortisol",
    title: "Cortisol Blood Test",
    pillText: "Cortisol Blood Test · Milton Keynes",
    heroHeadingLine1: "Check Your Stress.",
    heroHeadingHighlight: "Cortisol",
    heroHeadingLine2: " Testing.",
    heroDescription: "A cortisol blood test is a simple blood test that measures the level of cortisol. Abnormal cortisol levels can indicate underlying health issues.",
    aboutHeading: "About Cortisol Blood Test",
    aboutTextParagraphs: [
      "A cortisol blood test is a simple blood test that measures the level of cortisol. Abnormal cortisol levels can indicate underlying health issues. Moreover, healthcare specialists typically recommend this test when they suspect an underactive or damaged adrenal gland or another condition that could affect cortisol production."
    ],
    aboutMobileText: "A cortisol blood test is a simple blood test that measures the level of cortisol. Abnormal cortisol levels can indicate underlying health issues.",
    aboutImage: "cortisol blood test.webp",
    faqs: [
      {
        question: "What does the cortisol blood test measure?",
        answer: "It measures the level of cortisol in your blood. Abnormal cortisol levels can indicate underlying health issues."
      },
      {
        question: "When is this test recommended?",
        answer: "Healthcare specialists typically recommend this test when they suspect an underactive or damaged adrenal gland or another condition that could affect cortisol production."
      }
    ],
    buttonText: "Book Cortisol Test"
  },
  "psa": {
    id: "psa",
    title: "PSA / Prostate Test",
    pillText: "PSA / Prostate Test · Milton Keynes",
    heroHeadingLine1: "Check Your Prostate.",
    heroHeadingHighlight: "PSA",
    heroHeadingLine2: " Testing.",
    heroDescription: "A PSA test is a simple blood test used to measure the amount of prostate-specific antigen in the blood.",
    aboutHeading: "About PSA / Prostate Test",
    aboutTextParagraphs: [
      "A PSA test is a simple blood test used to measure the amount of prostate-specific antigen in the blood. PSA, a protein that helps liquefy semen, is produced by both normal and cancerous prostate cells. Small amounts of PSA are considered normal. However, high levels can be an early indicator of prostate-related problems. This test plays a crucial role in diagnosing prostate cancer and helps ensure timely medical help to prevent complications."
    ],
    aboutMobileText: "A PSA test is a simple blood test used to measure the amount of prostate-specific antigen in the blood.",
    aboutImage: "prostate-test.webp",
    faqs: [
      {
        question: "What does the PSA test measure?",
        answer: "A PSA test measures the amount of prostate-specific antigen in the blood, which is a protein produced by both normal and cancerous prostate cells."
      },
      {
        question: "What do high PSA levels indicate?",
        answer: "While small amounts of PSA are normal, high levels can be an early indicator of prostate-related problems, including prostate cancer."
      }
    ],
    buttonText: "Book Prostate Test"
  },
  "diabetes": {
    id: "diabetes",
    title: "HbA1c/Diabetes Test",
    pillText: "HbA1c/Diabetes Test · Milton Keynes",
    heroHeadingLine1: "Check Your Blood Sugar.",
    heroHeadingHighlight: "HbA1c",
    heroHeadingLine2: " Testing.",
    heroDescription: "HbA1c is the average blood glucose level; this HbA1c test is performed to measure your blood sugar levels over the past two to three months.",
    aboutHeading: "About HbA1c/Diabetes Test",
    aboutTextParagraphs: [
      "HbA1c is the average blood glucose level; this HbA1c test, also known as the glycated hemoglobin test, is a simple blood test performed to measure your blood sugar levels over the past two to three months. By opting for regular HbA1c testing, you can get a detailed and long-term picture of blood sugar control, helping you make better steps to improve your overall health.",
      "This test is highly recommended for patients dealing with diabetes or those at risk of developing this condition. If your result indicates high HbA1c, it means that you have too much sugar in your blood and are more likely to develop diabetes complications. The HbA1c test provides your precise HbA1c value for accurate monitoring."
    ],
    aboutMobileText: "HbA1c is the average blood glucose level; this HbA1c test is performed to measure your blood sugar levels over the past two to three months.",
    aboutImage: "HbA1c-diabetes test.webp",
    faqs: [
      {
        question: "What does the HbA1c test measure?",
        answer: "Also known as the glycated hemoglobin test, it measures your average blood glucose levels over the past two to three months."
      },
      {
        question: "Who should get this test?",
        answer: "This test is highly recommended for patients dealing with diabetes or those at risk of developing this condition. No fasting is required."
      }
    ],
    buttonText: "Book HbA1c Test"
  },
  "cbc": {
    id: "cbc",
    title: "CBC / Full Blood Count",
    pillText: "CBC / Full Blood Count · Milton Keynes",
    heroHeadingLine1: "Evaluate Overall Health.",
    heroHeadingHighlight: "CBC",
    heroHeadingLine2: " Testing.",
    heroDescription: "A Complete Blood Count (CBC) accurately measures the number and quality of different types of blood cells.",
    aboutHeading: "About CBC / Full Blood Count",
    aboutTextParagraphs: [
      "A Complete Blood Count (CBC), also known as a Full Blood Count (FBC), is mostly recommended for evaluating overall health. It is one of the essential blood tests that accurately measures the number and quality of different types of blood cells.",
      "It gives a clear insight into your hemoglobin and hematocrit levels, and detecting any imbalance or abnormality plays a crucial role as an early indicator of conditions before they seriously affect your health. It allows your healthcare specialist to gain detailed insight into your immune function, oxygen-carrying capacity, and clotting ability."
    ],
    aboutMobileText: "A Complete Blood Count (CBC) accurately measures the number and quality of different types of blood cells.",
    aboutImage: "CBC-full-blood count test.webp",
    faqs: [
      {
        question: "What does a Complete Blood Count (CBC) measure?",
        answer: "It accurately measures the number and quality of different types of blood cells, including red blood cells, white blood cells, platelets, hemoglobin, and hematocrit levels."
      },
      {
        question: "Why is a CBC recommended?",
        answer: "It allows healthcare specialists to gain detailed insight into your immune function, oxygen-carrying capacity, and clotting ability as an early indicator of health conditions."
      }
    ],
    buttonText: "Book CBC Test"
  },
  "liver": {
    id: "liver",
    title: "Liver Function Test",
    pillText: "Liver Function Test · Milton Keynes",
    heroHeadingLine1: "Check Your Liver.",
    heroHeadingHighlight: "Liver Function",
    heroHeadingLine2: " Testing.",
    heroDescription: "A liver function test (LFT) plays a crucial role in identifying the root cause of symptoms and monitoring liver disease or damage.",
    aboutHeading: "About Liver Function Test",
    aboutTextParagraphs: [
      "A liver function test (LFT) plays a crucial role in identifying the root cause of symptoms and monitoring liver disease or damage. This simple blood test mainly assesses specific enzymes, proteins, and substances produced or processed by the liver.",
      "The main purpose of analyzing these substances is that, when your liver is inflamed, damaged, or not working properly, it can cause these levels to rise or fall abnormally, revealing potential health problems. This test is an accurate way to get a proper insight into how your liver is performing its functions and identify liver conditions early."
    ],
    aboutMobileText: "A liver function test (LFT) plays a crucial role in identifying the root cause of symptoms and monitoring liver disease or damage.",
    aboutImage: "liver-function-test.jpg",
    faqs: [
      {
        question: "What does a liver function test assess?",
        answer: "It mainly assesses specific enzymes, proteins, and substances produced or processed by the liver, including ALT, AST, ALP, and bilirubin."
      },
      {
        question: "Why analyze these substances?",
        answer: "When your liver is inflamed, damaged, or not working properly, it can cause these levels to rise or fall abnormally, revealing potential health problems early."
      }
    ],
    buttonText: "Book Liver Test"
  }
};
