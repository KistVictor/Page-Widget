import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export function CloseButton() {
  return (
    <Popover.Button className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 text-bold transition' title='Fechar formulario de feedback">
      <XIcon className="w-4 h-4" />
    </Popover.Button>
  )
}