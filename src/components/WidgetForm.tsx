import { Popover } from "@headlessui/react";

import { CloseButton } from "./CloseButton";

export function WidgetForm() {

  return (
    <Popover.Panel className='relative flex flex-col items-center p-4 rounded-2xl bg-zinc-900 shadow-lg w-[calc(100vw-2rem)] md:w-auto text-white'>

      <header>
        <span>Deixe seu comentário</span>
        <CloseButton />
      </header>

      <main>

      </main>

      <footer>
        Feito com ♥ por <a className="underline underline-offset-2" href='https://github.com/kistvictor'>KistVictor</a>
      </footer>

    </Popover.Panel>
  )
}