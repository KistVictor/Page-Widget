import { CloseButton } from "../../CloseButton";
import { feedbackTypes, FeedbackType } from "..";

interface FeedbackTypeStep {
  setFeedbackType: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ setFeedbackType }: FeedbackTypeStep) {

  return (
    <>

      <header>
        <span className="text-xl leading-6 flex items-center gap-2">
          Deixe seu feedback
        </span>
        <CloseButton />
      </header>

      <main className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="flex flex-1 flex-col items-center bg-zinc-800 rounded-lg py-5 w-24 gap-2 border-2 border-transparent hover:border-purple-500 focus:border-purple-500 focus:outline-none"
              type="button"
              onClick={() => setFeedbackType(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </main>

    </>
  )
}