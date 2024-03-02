import * as React from "react";
import { Check, ChevronsUpDown, XCircleIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { symptoms } from "@/data/symptoms";

export function SelectSymptoms() {
  const [open, setOpen] = React.useState(false);
  const [symptomsPresent, setSymptomsPresent] = React.useState<string[]>([]);

  const [isButtonDisabled, setButtonDisabled] = React.useState<boolean>(true);

  return (
    <div className="pt-5">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            Select a symptom
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search symptom..." />
            <CommandEmpty>No symptom found.</CommandEmpty>
            <CommandGroup className="max-h-52 overflow-y-auto">
              {symptoms.map((symptom, index) => (
                <CommandItem
                  key={index}
                  value={symptom}
                  onSelect={(e) => {
                    if (!symptomsPresent.includes(e)) {
                      setSymptomsPresent((prev) => [e, ...prev]);
                    }
                  }}
                >
                  {symptom}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      <Button
      className="mx-3"
      disabled={symptomsPresent.length>=3 ? false : true}      
      >
        Submit
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
        {symptomsPresent.map((ele: string, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between border px-3 py-2 rounded-md"
          >
            <p>{ele}</p>
            <XCircleIcon
              className="cursor-pointer"
              color="#ff0000"
              onClick={() => {
                if (symptomsPresent.includes(ele)) {
                  setSymptomsPresent(
                    symptomsPresent.filter((item) => item != ele)
                  );
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
