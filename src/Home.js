import React from 'react';
import data from './data/data.json';
import { useCMS, useForm, usePlugin } from 'tinacms';
import { InlineForm, InlineBlocks } from 'react-tinacms-inline';


import { heroBlock } from "./components/Hero";
import { paragraphBlock } from './components/Paragraph';
import { imagesBlock } from './components/Images';
import { featureListBlock } from './components/FeatureList';
export default function Home() {
  const cms = useCMS()

  const formConfig = {
    id: './data/data.json',
    initialValues: data,
    onSubmit() {
      cms.alerts.success('Saved!')
    }
  }
  const [, form1] = useForm(formConfig)
  usePlugin(form1)
  const formConfig2 = {
    id: 'other form',
    onSubmit() {
      cms.alerts.success('Saved!')
    }
  }
  const [, form2] = useForm(formConfig2)
  usePlugin(form2)
  const formConfig3 = {
    id: 'other form 3',
    initialValues: {
      heading: 'this is a title'
    },
    label: "heading",
    onSubmit() {
      cms.alerts.success('Saved!')
    },
    fields: [ {
      component: 'text',
      name: 'heading',
      label: 'Title',
      description: 'Enter the title of the post here',
      placeholder: '...',
    },]
  }
  const [data3, form3] = useForm(formConfig3)
  usePlugin(form3)

  return (
    <div className='home'>
      <h1>
        {data3.heading}
      </h1>
      <InlineForm form={form1}>
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
      </InlineForm>
      <InlineForm form={form2}>
        <InlineBlocks name="other blocks" blocks={HOME_BLOCKS} />
      </InlineForm>
    </div>
  );
}
const HOME_BLOCKS = {
  hero: heroBlock,
  images: imagesBlock,
  paragraph: paragraphBlock,
  features: featureListBlock,
}
