import { useState } from "react";

import { Popover } from "@headlessui/react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImage from '../../images/bug.svg'
import ideaImage from '../../images/idea.svg'
import thoughtImage from '../../images/thought.svg'
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada acesa'
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImage,
      alt: 'Imagem de um inseto'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null) 
  const [feedbackSent, setFeedbackSent] = useState(false)

  function restartFeedbackStep() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <Popover.Panel className='relative flex flex-col items-center p-4 rounded-2xl bg-zinc-900 shadow-lg w-[calc(100vw-2rem)] md:w-auto text-white'>

      {feedbackSent ? (
        <FeedbackSucessStep restartFeedbackStep={restartFeedbackStep} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              restartFeedbackStep={restartFeedbackStep}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>
        Feito com ♥ por <a className="underline underline-offset-2" href='https://github.com/kistvictor'>KistVictor</a>
      </footer>

    </Popover.Panel>
  )
}