import React from 'react';
import data from './data/data.json';
import { useCMS, useForm, usePlugin } from 'tinacms';
import { InlineForm, InlineBlocks } from 'react-tinacms-inline';
import {useGithubJsonForm, useGithubMarkdownForm} from 'react-tinacms-github'


import { heroBlock } from "./components/Hero";
import { paragraphBlock } from './components/Paragraph';
import { imagesBlock } from './components/Images';
import { featureListBlock } from './components/FeatureList';
import { useState } from 'react';
export default function Home() {
  const cms = useCMS()

  const [markdownFile, setMarkdownFile] = useState({
    fileRelativePath: '/asdf/asdf',
    sha: null,
    data: {
      markdownBody: 'asdf'
    }
  })

  const formOptions = {
    label: "Edit doc page",
    id: `${markdownFile.fileRelativePath}`,
    fields: [
      {
        name: "markdownBody",
        label: "Doc Body",
        component: "markdown"
      
      },
    ],
  }

  const [data, form] = useGithubMarkdownForm(markdownFile, formOptions)
  usePlugin(form)

  return (
    <div className='home'>
      <div>
         Data from useGithubMarkdownForm: {JSON.stringify(data)}
      </div>
      <div>
         Data from markdownFile: {JSON.stringify(markdownFile.data)}
      </div>
      <button onClick={ ()=>{
        setMarkdownFile({
          fileRelativePath: '/asdf/asdf',
          sha: null,
          data: {
            markdownBody: 'new data'
          }
        })
      }
      }>
        change markdownFile
      </button>

      <button onClick={ ()=>{
       cms.enabled ? cms.disable() : cms.enable ()
      }}>
        toggle cms
      </button>
    </div>
  );
}