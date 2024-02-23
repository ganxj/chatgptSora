import PageComponent from "./PageComponent";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {allVideoList, randomVideo} from "~/data/openaiVideo";

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const tIndex = await getTranslations('IndexPage');
  const indexLanguageText = {
    title: tIndex('title'),
    description: tIndex('description'),
    loadingText: tIndex('loadingText'),
    generateText: tIndex('generateText'),
    buttonText: tIndex('buttonText'),
    placeholderText: tIndex('placeholderText'),
    loginText: tIndex('loginText'),
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    soraVideoExample: tIndex('soraVideoExample'),
    prompt: tIndex('prompt'),
    moreExample: tIndex('moreExample'),
  };

  const tIndexQuestion = await getTranslations('indexQuestion');
  const questionText = {
    h2_1: tIndexQuestion('h2_1'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_1_p2: tIndexQuestion('h2_1_p2'),
    h2_1_p3: tIndexQuestion('h2_1_p3'),
    h2_1_p4: tIndexQuestion('h2_1_p4'),
    h2_2: tIndexQuestion('h2_2'),
    h2_2_p1: tIndexQuestion('h2_2_p1'),
    h2_2_p2: tIndexQuestion('h2_2_p2'),
    h2_2_p3: tIndexQuestion('h2_2_p3'),
    h2_2_p4a: tIndexQuestion('h2_2_p4a'),
    h2_2_p4b: tIndexQuestion('h2_2_p4b'),
    h2_3: tIndexQuestion('h2_3'),
    h2_3_p1: tIndexQuestion('h2_3_p1'),
    h2_3_p2: tIndexQuestion('h2_3_p2'),
    h2_3_p3: tIndexQuestion('h2_3_p3'),
    h2_3_p4: tIndexQuestion('h2_3_p4'),
    h2_3_p5: tIndexQuestion('h2_3_p5'),
    h2_4: tIndexQuestion('h2_4'),
    h2_4_p1: tIndexQuestion('h2_4_p1'),
    h2_4_p2: tIndexQuestion('h2_4_p2'),
    h2_4_p3: tIndexQuestion('h2_4_p3'),
    h2_5: tIndexQuestion('h2_5'),
    h2_5_p1: tIndexQuestion('h2_5_p1'),
    h2_5_p2: tIndexQuestion('h2_5_p2'),
    h2_5_p3: tIndexQuestion('h2_5_p3'),
    h2_6: tIndexQuestion('h2_6'),
    h2_6_p1: tIndexQuestion('h2_6_p1'),
    h2_6_p2: tIndexQuestion('h2_6_p2'),
    h2_6_p3: tIndexQuestion('h2_6_p3'),
    h2_6_p4: tIndexQuestion('h2_6_p4'),
  }

  const initVideoList = randomVideo(2);

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={indexLanguageText}
      initVideoList={initVideoList}
      questionText={questionText}
    >

    </PageComponent>
  )
}
