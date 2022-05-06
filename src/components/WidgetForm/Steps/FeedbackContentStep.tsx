import { FormEvent, useState } from "react";

import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";

import { CloseButton } from "../../CloseButton";
import { feedbackTypes, FeedbackType } from "..";
import { ScreeshotButton } from "../ScreenshotButton";

interface FeedbackContentStep {
  feedbackType: FeedbackType,
  restartFeedbackStep: () => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep({ feedbackType, restartFeedbackStep, onFeedbackSent }: FeedbackContentStep) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string>('')

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    console.log({
      screenshot,
      comment
    })
    
    onFeedbackSent()
  }

  const feedBackTypeInfo = feedbackTypes[feedbackType]

  return (
    <>

      <header>
        <button type="button" className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100 text-bold transition" title="Voltar formulario de feedback">
          <ArrowNarrowLeftIcon className="w-4 h-4" onClick={restartFeedbackStep}/>
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6" />
          {feedBackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      
      <form className="mt-4 w-full" onSubmit={handleFormSubmit}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
          placeholder="Nos conte com detalhe o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 my-2">
          <ScreeshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            title="Enviar feedback"
            disabled={comment.length === 0}
            className="flex flex-1 items-center justify-center p-2 bg-purple-500 rounded-md border-transparent text-md hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:hover:bg-purple-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>

    </>
  )
}